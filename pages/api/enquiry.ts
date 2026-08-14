import type { NextApiRequest, NextApiResponse } from 'next'
import formidable, { File } from 'formidable'
import fs from 'fs'
import path from 'path'

// Disable Next's default body parser
export const config = {
  api: {
    bodyParser: false,
  },
}

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
const ENQUIRY_TO_EMAIL = process.env.ENQUIRY_TO_EMAIL
const ENQUIRY_FROM_EMAIL = process.env.ENQUIRY_FROM_EMAIL

async function parseForm(req: NextApiRequest): Promise<{ fields: any; files: Record<string, File | File[]> }> {
  return new Promise((resolve, reject) => {
    const form = formidable({ multiples: true })
    form.parse(req as any, (err, fields, files) => {
      if (err) return reject(err)
      resolve({ fields, files })
    })
  })
}

function normalizeFiles(files: Record<string, any>): File[] {
  const out: File[] = []
  Object.keys(files || {}).forEach((key) => {
    const val = files[key]
    if (Array.isArray(val)) {
      val.forEach((f) => out.push(f))
    } else if (val && typeof val === 'object' && val.filepath) {
      out.push(val)
    }
  })
  return out
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  if (!SENDGRID_API_KEY || !ENQUIRY_TO_EMAIL || !ENQUIRY_FROM_EMAIL) {
    console.error('Missing SendGrid configuration')
    return res.status(500).json({ error: 'Server not configured for email delivery' })
  }

  try {
    const { fields, files } = await parseForm(req)

    const name = (fields.name || '').toString()
    const email = (fields.email || '').toString()
    const description = (fields.description || '').toString()

    if (!name || !email || !description) {
      return res.status(400).json({ error: 'Missing required fields: name, email, description' })
    }

    // Lazy import to keep cold-start small
    const sgMail = (await import('@sendgrid/mail')).default
    sgMail.setApiKey(SENDGRID_API_KEY)

    const subject = `Enquiry from ${name} — ${fields.equipmentType || 'Equipment Enquiry'}`

    const textParts: string[] = []
    textParts.push(`Name: ${name}`)
    if (fields.company) textParts.push(`Company: ${fields.company}`)
    textParts.push(`Phone: ${fields.phone || ''}`)
    textParts.push(`Email: ${email}`)
    textParts.push(`Equipment Type: ${fields.equipmentType || ''}`)
    textParts.push(`Manufacturer: ${fields.manufacturer || ''}`)
    textParts.push(`Model: ${fields.model || ''}`)
    textParts.push(`Serial: ${fields.serial || ''}`)
    textParts.push(`Part number: ${fields.partNumber || ''}`)
    textParts.push(`Site / Location: ${fields.site || ''}`)
    textParts.push(`Urgent breakdown: ${fields.urgent ? 'Yes' : 'No'}`)
    textParts.push('')
    textParts.push('Description:')
    textParts.push(description)

    const attachments: { content: string; filename: string; type?: string; disposition?: string }[] = []

    const filesArray = normalizeFiles(files)
    for (const file of filesArray) {
      try {
        const buffer = fs.readFileSync(file.filepath)
        const content = buffer.toString('base64')
        const filename = (file.originalFilename || path.basename(file.filepath)).toString()
        attachments.push({ content, filename, disposition: 'attachment' })
      } catch (err) {
        console.warn('Failed to read uploaded file for attachment', err)
      }
    }

    const msg: any = {
      to: ENQUIRY_TO_EMAIL,
      from: ENQUIRY_FROM_EMAIL,
      subject,
      text: textParts.join('\n'),
      html: `<pre style="font-family:monospace">${textParts.map(p => escapeHtml(p)).join('<br/>')}</pre>`,
      attachments: attachments,
    }

    await sgMail.send(msg)

    // cleanup temporary files
    for (const file of filesArray) {
      try {
        fs.unlinkSync(file.filepath)
      } catch (err) {
        // ignore
      }
    }

    return res.status(200).json({ status: 'received' })
  } catch (err) {
    console.error('Enquiry handler error', err)
    return res.status(500).json({ error: 'Internal server error' })
  }
}

function escapeHtml(str: string) {
  return str.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string))
}
