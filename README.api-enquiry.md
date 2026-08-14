# SIS Equipment Group — Enquiry integration

This branch adds a server-side handler that parses multipart form submissions and sends enquiries via SendGrid.

Environment variables (set these in Vercel or your host):

- SENDGRID_API_KEY — your SendGrid API key
- ENQUIRY_TO_EMAIL — recipient email address for enquiries (e.g. info@sherriffindustrysolutions.com)
- ENQUIRY_FROM_EMAIL — verified sender address (e.g. enquiries@sherriffindustrysolutions.com)

Notes:
- Uploaded files are attached to the outgoing email. Files are temporarily stored by formidable and removed after sending.
- The client form posts FormData to /api/enquiry. No client change is required.

Deployment:
1. Set the environment variables in your Vercel project settings.
2. Deploy the add-webpage branch to Vercel (recommended) or any Node.js host that supports Next.js.

Security & production considerations:
- Ensure ENQUIRY_FROM_EMAIL is a verified sender in SendGrid to avoid delivery issues.
- Consider rate-limiting/enhancing validation and adding spam protection (reCAPTCHA) for public sites.
- For large files, consider uploading to S3 or similar and sending links instead of attaching files.
