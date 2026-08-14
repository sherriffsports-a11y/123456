# SIS Equipment Group — Landing Page

Marketing site for SIS Equipment Group (operated by Sherriff Industry Solutions Pty Ltd), covering
supply, repair, overhaul and sourcing of mining and industrial equipment.

Built with [Next.js](https://nextjs.org/) (Pages Router), TypeScript and [Tailwind CSS](https://tailwindcss.com/).

## Requirements

- Node.js 20.9 or newer (Next.js 16 requirement)
- npm 10 or newer

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the SendGrid values
npm run dev
```

The site is served at [http://localhost:3000](http://localhost:3000).

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Production build |
| `npm start` | Serve the production build (run `build` first) |
| `npm run lint` | ESLint via the Next.js config |
| `npm run typecheck` | `tsc --noEmit` |

## Project layout

```
components/    Landing page sections (Hero, Capabilities, QuoteForm, ...)
pages/         Routes: / and /capabilities-statement
pages/api/     enquiry.ts — handles quote form submissions
public/        Logo and favicon
styles/        Tailwind entry point
```

## Environment variables

The quote form at `/#request-quote` posts to `/api/enquiry`, which emails the submission via SendGrid.
All three SendGrid variables are required — without them the endpoint returns HTTP 500 and logs the
misconfiguration, while the rest of the site continues to work.

| Variable | Required | Description |
| --- | --- | --- |
| `SENDGRID_API_KEY` | yes | SendGrid API key with Mail Send permission |
| `ENQUIRY_TO_EMAIL` | yes | Where enquiries are delivered |
| `ENQUIRY_FROM_EMAIL` | yes | Sender address; must be a **verified sender** in SendGrid or delivery will fail |
| `NEXT_PUBLIC_SITE_URL` | no | Production URL (e.g. `https://example.com.au`), used for the canonical link and structured data |

## The enquiry endpoint

`POST /api/enquiry` accepts `multipart/form-data`. `name`, `email` and `description` are required;
everything else is optional. Attachments are read from disk, base64-encoded onto the outgoing email,
and the temporary files are always removed afterwards.

Upload limits are enforced server-side and breaching any of them returns HTTP 413:

- 10 MB per file
- 10 files per submission
- 20 MB total per submission (SendGrid rejects messages over 30 MB, and base64 inflates the payload by roughly a third)

Responses:

| Status | Meaning |
| --- | --- |
| 200 | Enquiry sent |
| 400 | Missing required field or malformed email address |
| 405 | Method other than POST |
| 413 | Attachments exceed the limits above |
| 500 | Missing SendGrid configuration, or the send failed |

## Deployment

Deploy to Vercel or any host that supports a Node.js Next.js server. `/api/enquiry` writes uploads to
a temporary directory, so the host must allow local filesystem writes — this works on Vercel's Node
runtime but not on edge runtimes.

Set the environment variables above in the host's project settings before deploying.

## Known gaps

- **No spam protection.** The endpoint is unauthenticated and has no rate limiting or CAPTCHA. Add
  these before publicising the form.
- **Footer legal links** (`#privacy`, `#terms`) are placeholders that point at sections which do not
  exist yet.
- **The hero image is hotlinked from Unsplash.** Replace it with a licensed, self-hosted photograph
  before going live.
- **Large attachments are emailed inline.** For bigger files, upload to object storage and email links
  instead.
