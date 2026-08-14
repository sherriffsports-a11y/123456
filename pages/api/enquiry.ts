// API route to receive enquiries - simple implementation that accepts form data and returns success.
import type { NextApiRequest, NextApiResponse } from 'next'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  // We won't parse multipart here; simply acknowledge receipt for demo purposes.
  console.log('Enquiry received')
  res.status(200).json({ status: 'received' })
}
