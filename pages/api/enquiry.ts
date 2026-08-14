import type { NextApiRequest, NextApiResponse } from 'next'
import formidable, { type Fields, type Files, type File } from 'formidable'
import { readFile, unlink } from 'fs/promises'
import path from 'path'

// Disable Next's default body parser
export const config = {
  api: {
    bodyParser: false,
  },
}

const MAX_FILE_SIZE = 10 * 1024 * 1024
const MAX_FILES = 10
// SendGrid rejects messages over 30MB. Base64 inflates payloads by ~4/3, so
// keep the raw total well under that ceiling.
const MAX_TOTAL_FILE_SIZE = 20 * 1024 * 1024

async function parseForm(req: NextApiRequest): Promise<{ fields: Fields; files: Files }> {
  const form = formidable({
    maxFiles: MAX_FILES,
    maxFileSize: MAX_FILE_SIZE,
    maxTotalFileSize: MAX_TOTAL_FILE_SIZE,
    // Browsers still submit a part for a file input the user left empty, and
    // formidable rejects zero-byte files by default. Accept them here and drop
    // them in flattenFiles, otherwise every enquiry without an attachment
    // fails to parse.
    allowEmptyFiles: true,
    minFileSize: 0,
  })
  return form.parse(req).then(([fields, files]) => ({ fields, files }))
}

// formidable v3 always returns fields as arrays, even for single values.
function firstValue(value: string[] | undefined): string {
  return (value?.[0] ?? '').trim()
}

// Returns every parsed file, including the zero-byte placeholders, so the
// caller can clean all of them up off disk.
function flattenFiles(files: Files): File[] {
  return Object.values(files)
    .flatMap((entry) => entry ?? [])
    .filter((file) => Boolean(file?.filepath))
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function escapeHtml(str: string) {
  return str.replace(
    /[&<>"']/g,
    (c) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] as string,
  )
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.SENDGRID_API_KEY
  const toEmail = process.env.ENQUIRY_TO_EMAIL
  const fromEmail = process.env.ENQUIRY_FROM_EMAIL

  if (!apiKey || !toEmail || !fromEmail) {
    console.error(
      'Enquiry form is not configured: SENDGRID_API_KEY, ENQUIRY_TO_EMAIL and ENQUIRY_FROM_EMAIL must all be set',
    )
    return res.status(500).json({ error: 'Server not configured for email delivery' })
  }

  let uploads: File[] = []

  try {
    const { fields, files } = await parseForm(req)
    uploads = flattenFiles(files)

    const name = firstValue(fields.name)
    const email = firstValue(fields.email)
    const description = firstValue(fields.description)

    if (!name || !email || !description) {
      return res.status(400).json({ error: 'Missing required fields: name, email, description' })
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address' })
    }

    const equipmentType = firstValue(fields.equipmentType)
    const urgent = firstValue(fields.urgent) !== ''

    const detailLines = [
      `Name: ${name}`,
      `Company: ${firstValue(fields.company)}`,
      `Phone: ${firstValue(fields.phone)}`,
      `Email: ${email}`,
      `Equipment Type: ${equipmentType}`,
      `Manufacturer: ${firstValue(fields.manufacturer)}`,
      `Model: ${firstValue(fields.model)}`,
      `Serial: ${firstValue(fields.serial)}`,
      `Part number: ${firstValue(fields.partNumber)}`,
      `Site / Location: ${firstValue(fields.site)}`,
      `Urgent breakdown: ${urgent ? 'Yes' : 'No'}`,
      '',
      'Description:',
      description,
    ]

    const attachments = []
    for (const file of uploads.filter((file) => file.size > 0)) {
      try {
        const buffer = await readFile(file.filepath)
        attachments.push({
          content: buffer.toString('base64'),
          filename: file.originalFilename || path.basename(file.filepath),
          type: file.mimetype || 'application/octet-stream',
          disposition: 'attachment',
        })
      } catch (err) {
        console.warn('Failed to read uploaded file for attachment', err)
      }
    }

    const sgMail = (await import('@sendgrid/mail')).default
    sgMail.setApiKey(apiKey)

    await sgMail.send({
      to: toEmail,
      from: fromEmail,
      replyTo: email,
      subject: `${urgent ? '[URGENT] ' : ''}Enquiry from ${name} — ${equipmentType || 'Equipment Enquiry'}`,
      text: detailLines.join('\n'),
      html: `<pre style="font-family:monospace">${detailLines.map(escapeHtml).join('<br/>')}</pre>`,
      attachments,
    })

    return res.status(200).json({ status: 'received' })
  } catch (err) {
    // Formidable flags every size/count limit breach with httpCode 413.
    if ((err as { httpCode?: number }).httpCode === 413) {
      return res.status(413).json({
        error: `Attachments are too large. Send at most ${MAX_FILES} files, each under ${MAX_FILE_SIZE / 1024 / 1024}MB.`,
      })
    }

    console.error('Enquiry handler error', err)
    return res.status(500).json({ error: 'Internal server error' })
  } finally {
    // Formidable buffers uploads to disk, so clean up regardless of outcome.
    await Promise.all(
      uploads.map((file) =>
        unlink(file.filepath).catch(() => {
          /* already gone */
        }),
      ),
    )
  }
}
