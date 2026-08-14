# Pull Request: Server-side enquiry parsing + SendGrid integration

This commit adds a robust server-side handler for the request-a-quote form that:

- Parses multipart/form-data using formidable
- Validates required fields (name, email, description)
- Sends an email using SendGrid with form details and uploaded files attached
- Cleans up temporary files

Files changed/added:
- package.json (added @sendgrid/mail, formidable)
- pages/api/enquiry.ts (replaced placeholder handler)
- .env.example (added required environment variables)
- README.api-enquiry.md (notes and deployment instructions)

To open a PR from add-webpage to your repository default branch, you can run:

1. From your local clone:
   git fetch origin add-webpage
   git checkout -b add-webpage origin/add-webpage
   git push origin add-webpage

2. Open a PR via GitHub web UI or the gh CLI:
   gh pr create --base main --head add-webpage --title "Add landing page + enquiry email integration" --body "Implements enquiry parsing and SendGrid email delivery. See README.api-enquiry.md for details."

Replace --base main with your repository's default branch name if different.
