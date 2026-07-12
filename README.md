# Mock Meat

Professional showcase website for Mock Meat, focused on mock meat and frozen foods. It is not an ecommerce app: there is no cart, checkout or pricing. Visitors can browse product categories and send enquiries through a contact form or WhatsApp.

## Tech Stack

- React + Vite
- Tailwind CSS
- React Router
- Express
- Google Sheets API
- Nodemailer SMTP email

## Routes

- `/` Home
- `/about`
- `/products`
- `/services`
- `/gallery`
- `/contact`

## Setup

```bash
npm.cmd install
copy .env.example .env
npm.cmd run dev
```

Run the backend in a second terminal:

```bash
npm.cmd run server
```

Project folders:

- `frontend/` contains the React + Vite app, Tailwind config, public assets and build output.
- `backend/` contains the Express API server.

Set the Google Sheets, SMTP and `WHATSAPP_NUMBER` values in `.env` before production use.

## Contact Form Backend

The contact form posts to `/api/enquiries`. On submit, the backend:

- adds a row to Google Sheets
- emails the admin with the submitted details
- emails the user a thank-you message when they provide an email address

Create a Google Cloud service account, share the target Google Sheet with the service account email as an editor, and set these environment variables:

```bash
GOOGLE_SHEET_ID=your_google_sheet_id
GOOGLE_SHEET_RANGE=Enquiries!A:F
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_KEY_HERE\n-----END PRIVATE KEY-----\n"
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
MAIL_FROM="Sri Sakthi Foods <your_email@gmail.com>"
ADMIN_EMAIL=admin@example.com
```

For Gmail, use an app password for `SMTP_PASS`.
