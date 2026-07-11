# Mock Meat

Professional showcase website for Mock Meat, focused on mock meat and frozen foods. It is not an ecommerce app: there is no cart, checkout or pricing. Visitors can browse product categories and send enquiries through a contact form or WhatsApp.

## Tech Stack

- React + Vite
- Tailwind CSS
- React Router
- Express
- MongoDB with Mongoose

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
- `backend/` contains the Express + MongoDB API server.

Set `MONGODB_URI` and `WHATSAPP_NUMBER` in `.env` before production use.
