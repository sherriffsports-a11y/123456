# SIS Equipment Group — Landing Page

Marketing site for SIS Equipment Group, covering supply, repair, overhaul and sourcing of mining and
industrial equipment.

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
lib/           contact.ts — the single source for the enquiry address
pages/         Routes: /, /capabilities-statement, /privacy, /terms
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

Limits are enforced server-side and breaching any of them returns HTTP 413:

- 10 MB per file
- 10 files per submission
- 20 MB total per submission (SendGrid rejects messages over 30 MB, and base64 inflates the payload by roughly a third)
- 30 fields and 100 KB of field text per submission

Responses:

| Status | Meaning |
| --- | --- |
| 200 | Enquiry sent (also returned for a submission caught by the honeypot, deliberately) |
| 400 | Missing required field or malformed email address |
| 405 | Method other than POST |
| 413 | Attachments or field text exceed the limits above |
| 429 | Rate limit exceeded; a `Retry-After` header gives the wait in seconds |
| 500 | Missing SendGrid configuration, or the send failed |

### Abuse protection

The endpoint is public, so it has two cheap defences:

- **Rate limiting** — 5 submissions per IP per 15 minutes, checked *before* the body is parsed so an
  abuser cannot make the server buffer megabytes of uploads on a request that will be rejected.
- **A honeypot field** — `enquiryRef` is positioned off-screen, hidden from assistive technology and
  removed from the tab order, so a person never fills it. When it arrives populated the submission is
  discarded and a normal `200` is returned, giving bots no signal.

**The rate limiter holds its counters in process memory**, which is a real limitation worth
understanding: on a serverless host each instance keeps its own counters, so traffic spread across
instances gets a proportionally higher effective limit, and counters reset on cold start. It stops
naive scripted abuse, not a determined attacker. For stronger guarantees, move the counters to a
shared store such as Redis, or apply rate limiting at the edge (Vercel's firewall, Cloudflare). Adding
a CAPTCHA such as Cloudflare Turnstile is the other obvious step; it was left out here because it
needs credentials that are not yet configured.

## Deployment

Deploy to Vercel or any host that supports a Node.js Next.js server. `/api/enquiry` writes uploads to
a temporary directory, so the host must allow local filesystem writes — this works on Vercel's Node
runtime but not on edge runtimes.

Set the environment variables above in the host's project settings before deploying.

## Known gaps

- **Spam protection is best-effort.** The form has a honeypot and in-memory rate limiting, but no
  CAPTCHA and no shared rate-limit store — see "Abuse protection" above for what that does and does
  not cover.
- **The Privacy Policy and Terms pages have not been reviewed by a lawyer.** They were written to
  describe accurately what this site actually does, but they are not legal advice and should be
  checked by a legal professional before the site goes live.
- **Neither legal page names the operating entity or its ABN**, because those were deliberately
  removed from public display. An Australian privacy policy would normally identify the entity
  responsible for the information it collects, so consider adding it back on `/privacy`.
- **All equipment imagery is AI-generated**, not photographs of real equipment: the hero
  (`public/hero-electric-motor.jpg`) and the four gallery images (`public/equipment/`). They depict
  generic plant — a red-oxide TEFC induction motor, an aluminium bevel-helical geared motor, an
  end-suction centrifugal pump and an oil-filled distribution transformer — and deliberately carry no
  nameplates or brand marks, since fabricated branding would be worse than none.
- **Two supplied product photos could not be used and are stood in for.** A red-oxide CMG motor (for
  the hero) and a pair of aluminium bevel-helical geared motors (for the gallery) were both provided as
  chat attachments, which are not readable as files from the build environment. Both are also product
  shots on plain white, so they need the white background removed and compositing onto a dark canvas
  before they suit these slots — in the hero's case a white background would otherwise sit directly
  behind white heading text. To use the real photos, commit them to the repo or supply a URL. Photographs of your own workshop and equipment would be
  considerably more convincing to a technical audience, and swapping them in means replacing the files
  in `public/` and adjusting the `alt` text in `components/EquipmentGallery.tsx` and
  `components/Hero.tsx`.
- **Large attachments are emailed inline.** For bigger files, upload to object storage and email links
  instead.
