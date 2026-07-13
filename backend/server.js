import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import dns from 'node:dns';

dns.setDefaultResultOrder('ipv4first');
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';

const backendDir = dirname(fileURLToPath(import.meta.url));

const dotenvResult = dotenv.config({ path: join(backendDir, '.env') });
if (dotenvResult.error) {
  console.error('❌ Failed to load .env file:', dotenvResult.error.message);
} else {
  console.log('✅ .env file loaded successfully');
}

// Startup diagnostics — verify SMTP env vars are present
console.log('📋 SMTP Config Check:');
console.log('  SMTP_HOST:', process.env.SMTP_HOST ? '✅ set' : '❌ MISSING');
console.log('  SMTP_PORT:', process.env.SMTP_PORT ? '✅ set' : '❌ MISSING');
console.log('  SMTP_USER:', process.env.SMTP_USER ? '✅ set' : '❌ MISSING');
console.log('  SMTP_PASS:', process.env.SMTP_PASS ? '✅ set (hidden)' : '❌ MISSING');
console.log('  EMAIL_FROM:', process.env.EMAIL_FROM || '❌ MISSING');
console.log('  COMPANY_EMAIL:', process.env.COMPANY_EMAIL || '❌ MISSING');

export const app = express();
export default app;

const port = process.env.PORT || 5000;
const sheetRange = process.env.GOOGLE_SHEET_RANGE || 'A:F';
const websiteUrl = (process.env.WEBSITE_URL || '').trim().replace(/^"|"$/g, '');
const logoUrl = (process.env.LOGO_URL || '').trim().replace(/^"|"$/g, '');
const businessPhone = (process.env.BUSINESS_PHONE || '').trim().replace(/^"|"$/g, '');
const whatsappUrl = (process.env.WHATSAPP_URL || '').trim().replace(/^"|"$/g, '');

const brand = {
  name: 'Sakthi Frozen Food Traders',
  shortName: 'Sri Sakthi Foods',
  proprietor: 'Sakthidhasan.T',
  proprietorTitle: 'Proprietor',
  website: websiteUrl || 'https://tnmockmeat.com',
  logo: logoUrl || 'https://tnmockmeat.com/images/logo.png',
  phone: businessPhone || '+91 80563 89214',
  whatsapp: whatsappUrl || 'https://wa.me/918056389214'
};


const allowedOrigins = [
  'http://127.0.0.1:5173',
  'http://localhost:5173',
  websiteUrl
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    const isAllowed = allowedOrigins.some(url => url.replace(/\/$/, '') === origin.replace(/\/$/, ''))
      || origin.endsWith('.vercel.app');
    if (isAllowed) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));
app.use(express.json({ limit: '1mb' }));

function clean(value = '') {
  return String(value).trim();
}

function getRequiredEnv(name) {
  let value = process.env[name];

  if (!value) {
    throw new Error(`${name} is not configured.`);
  }

  // Strip leading and trailing quotes if copied from .env file
  value = value.trim().replace(/^"|"$/g, '');

  return value;
}

function getGoogleClient() {
  const clientEmail = getRequiredEnv('GOOGLE_SERVICE_ACCOUNT_EMAIL');
  const privateKey = getRequiredEnv('GOOGLE_PRIVATE_KEY').replace(/\\n/g, '\n');

  return new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });
}

async function appendToSheet(enquiry) {
  const spreadsheetId = getRequiredEnv('GOOGLE_SHEET_ID');
  const sheets = google.sheets({ version: 'v4', auth: getGoogleClient() });

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: sheetRange,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [
        [
          new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
          enquiry.name,
          enquiry.phone,
          enquiry.email,
          enquiry.businessType,
          enquiry.message
        ]
      ]
    }
  });
}

// ✉️ Create Brevo SMTP transporter (initialize once)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp-relay.brevo.com',
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify SMTP connection on startup
transporter.verify()
  .then(() => console.log('✅ Brevo SMTP connection verified successfully'))
  .catch((err) => console.error('❌ Brevo SMTP connection failed:', err.message));

function formatAdminEmail(enquiry) {
  return [
    'New website enquiry received.',
    '',
    `Name: ${enquiry.name}`,
    `Phone: ${enquiry.phone}`,
    `Email: ${enquiry.email}`,
    `Business type: ${enquiry.businessType || 'Not selected'}`,
    `Handled by: ${brand.proprietor}, ${brand.proprietorTitle}`,
    '',
    'Message:',
    enquiry.message
  ].join('\n');
}

function formatUserEmail(enquiry) {
  return [
    `Hi ${enquiry.name},`,
    '',
    `Thanks for contacting ${brand.shortName}. We have received your enquiry and our team will get back to you soon.`,
    '',
    'Submitted Details:',
    `Name: ${enquiry.name}`,
    `Phone: ${enquiry.phone}`,
    `Email: ${enquiry.email}`,
    `Business Type: ${enquiry.businessType || 'Not selected'}`,
    `Message: ${enquiry.message}`,
    '',
    `Phone: ${brand.phone}`,
    `WhatsApp: ${brand.whatsapp}`,
    `Website: ${brand.website}`,
    '',
    'Regards,',
    `${brand.proprietor}, ${brand.proprietorTitle}`,
    brand.shortName
  ].join('\n');
}

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function detailRow(label, value) {
  return `
    <tr>
      <td style="padding:10px 0;color:#858B72;font-size:13px;font-weight:700;width:130px;">${label}</td>
      <td style="padding:10px 0;color:#23291D;font-size:15px;font-weight:800;">${escapeHtml(value || 'Not selected')}</td>
    </tr>
  `;
}

function baseEmailHtml(content) {
  return `
    <!doctype html>
    <html>
      <body style="margin:0;background:#E9DFC9;font-family:Arial,Helvetica,sans-serif;color:#23291D;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#E9DFC9;padding:28px 12px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:#fffaf0;border:1px solid rgba(35,41,29,0.12);border-radius:14px;overflow:hidden;">
                <tr>
                  <td style="background:#23291D;padding:22px 26px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="vertical-align:middle;">
                          <img src="${brand.logo}" alt="${brand.shortName}" width="86" style="display:block;max-width:86px;height:auto;">
                        </td>
                        <td align="right" style="vertical-align:middle;color:#E9DFC9;font-size:13px;font-weight:700;">
                          Mock Meat & Frozen Foods
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:28px 26px 22px;">
                    ${content}
                  </td>
                </tr>
                <tr>
                  <td style="background:#F3EAD8;border-top:1px solid rgba(35,41,29,0.1);padding:18px 26px;color:#6B624F;font-size:13px;line-height:1.6;">
                    <strong style="color:#23291D;">${brand.name}</strong><br>
                    ${brand.proprietor}, ${brand.proprietorTitle}<br>
                    Phone: <a href="tel:${brand.phone.replace(/\s/g, '')}" style="color:#B4432D;text-decoration:none;font-weight:700;">${brand.phone}</a><br>
                    WhatsApp: <a href="${brand.whatsapp}" style="color:#B4432D;text-decoration:none;font-weight:700;">Chat with us</a><br>
                    Website: <a href="${brand.website}" style="color:#B4432D;text-decoration:none;font-weight:700;">${brand.website.replace(/^https?:\/\//, '')}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

function formatAdminEmailHtml(enquiry) {
  return baseEmailHtml(`
    <p style="margin:0 0 8px;color:#B4432D;font-size:13px;font-weight:900;text-transform:uppercase;letter-spacing:0.08em;">New website enquiry</p>
    <h1 style="margin:0 0 18px;color:#23291D;font-size:26px;line-height:1.2;">Customer details received</h1>
    <div style="background:#23291D;color:#E9DFC9;border-radius:10px;padding:14px 16px;margin-bottom:18px;">
      <p style="margin:0;color:#DCA534;font-size:12px;font-weight:900;text-transform:uppercase;letter-spacing:0.1em;">For</p>
      <p style="margin:4px 0 0;font-size:18px;font-weight:900;">${brand.proprietor}, ${brand.proprietorTitle}</p>
    </div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-top:1px solid rgba(35,41,29,0.12);border-bottom:1px solid rgba(35,41,29,0.12);margin-bottom:20px;">
      ${detailRow('Name', enquiry.name)}
      ${detailRow('Phone', enquiry.phone)}
      ${detailRow('Email', enquiry.email)}
      ${detailRow('Business Type', enquiry.businessType)}
    </table>
    <p style="margin:0 0 8px;color:#858B72;font-size:13px;font-weight:800;">Message</p>
    <div style="background:#E9DFC9;border-left:4px solid #DCA534;border-radius:8px;padding:16px;color:#23291D;font-size:15px;line-height:1.7;">
      ${escapeHtml(enquiry.message).replace(/\n/g, '<br>')}
    </div>
    <p style="margin:20px 0 0;">
      <a href="mailto:${encodeURIComponent(enquiry.email)}" style="display:inline-block;background:#B4432D;color:#ffffff;text-decoration:none;font-weight:900;padding:12px 18px;border-radius:8px;">Reply to customer</a>
      <a href="${brand.whatsapp}" style="display:inline-block;background:#23291D;color:#E9DFC9;text-decoration:none;font-weight:900;padding:12px 18px;border-radius:8px;margin-left:8px;">Open WhatsApp</a>
    </p>
  `);
}

function formatUserEmailHtml(enquiry) {
  return baseEmailHtml(`
    <p style="margin:0 0 8px;color:#B4432D;font-size:13px;font-weight:900;text-transform:uppercase;letter-spacing:0.08em;">Thanks for contacting us</p>
    <h1 style="margin:0 0 14px;color:#23291D;font-size:28px;line-height:1.2;">Hi ${escapeHtml(enquiry.name)}, we received your enquiry.</h1>
    <p style="margin:0 0 18px;color:#6B624F;font-size:15px;line-height:1.7;">
      Our team will get back to you soon with the product and supply details you requested.
    </p>
    <div style="background:#23291D;color:#E9DFC9;border-radius:10px;padding:14px 16px;margin-bottom:18px;">
      <p style="margin:0;color:#DCA534;font-size:12px;font-weight:900;text-transform:uppercase;letter-spacing:0.1em;">Submitted Details</p>
    </div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-top:1px solid rgba(35,41,29,0.12);border-bottom:1px solid rgba(35,41,29,0.12);margin-bottom:20px;">
      ${detailRow('Name', enquiry.name)}
      ${detailRow('Phone', enquiry.phone)}
      ${detailRow('Email', enquiry.email)}
      ${detailRow('Business Type', enquiry.businessType)}
    </table>
    <p style="margin:0 0 8px;color:#858B72;font-size:13px;font-weight:800;">Message</p>
    <div style="background:#E9DFC9;border-left:4px solid #DCA534;border-radius:8px;padding:16px;color:#23291D;font-size:15px;line-height:1.7;margin-bottom:20px;">
      ${escapeHtml(enquiry.message).replace(/\n/g, '<br>')}
    </div>
    <div style="background:#E9DFC9;border-radius:10px;padding:16px;margin-bottom:20px;">
      <p style="margin:0;color:#23291D;font-size:15px;line-height:1.7;">
        For faster support, you can call us at <strong>${brand.phone}</strong> or message us on WhatsApp.
      </p>
    </div>
    <p style="margin:0 0 20px;">
      <a href="${brand.whatsapp}" style="display:inline-block;background:#B4432D;color:#ffffff;text-decoration:none;font-weight:900;padding:12px 18px;border-radius:8px;">WhatsApp us</a>
      <a href="${brand.website}" style="display:inline-block;background:#23291D;color:#E9DFC9;text-decoration:none;font-weight:900;padding:12px 18px;border-radius:8px;margin-left:8px;">Visit website</a>
    </p>
    <p style="margin:0;color:#858B72;font-size:13px;line-height:1.6;">
      ${brand.proprietor}, ${brand.proprietorTitle}<br>
      Website: <a href="${brand.website}" style="color:#B4432D;font-weight:800;text-decoration:none;">${brand.website.replace(/^https?:\/\//, '')}</a>
    </p>
  `);
}

app.get('/api/health', (_request, response) => {
  response.json({ ok: true, service: 'sri-sakthi-foods-api' });
});

app.post('/api/enquiries', async (request, response) => {
  const enquiry = {
    name: clean(request.body.name),
    phone: clean(request.body.phone),
    email: clean(request.body.email),
    businessType: clean(request.body.businessType),
    message: clean(request.body.message)
  };

  if (!enquiry.name || !enquiry.phone || !enquiry.email || !enquiry.message) {
    return response.status(400).json({ message: 'Name, phone, email and message are required.' });
  }

  // ✅ Respond to frontend immediately
  response.status(201).json({
    message: 'Thank you. Your enquiry has been sent successfully.'
  });

  // ✅ Start background tasks (Sheets + Emails)
  const emailFrom = `Sakthi Foods <${process.env.EMAIL_FROM || 'sakthifrozenfoods@gmail.com'}>`;
  const companyEmail = process.env.COMPANY_EMAIL || process.env.EMAIL_FROM || 'sakthifrozenfoods@gmail.com';

  console.log(`📧 Processing enquiry from ${enquiry.name} (${enquiry.email})`);

  Promise.allSettled([
    appendToSheet(enquiry),
    // Send confirmation email to customer
    transporter.sendMail({
      from: emailFrom,
      to: enquiry.email,
      subject: 'Thank You for Contacting Sakthi Frozen Foods',
      text: formatUserEmail(enquiry),
      html: formatUserEmailHtml(enquiry)
    }),
    // Send notification email to company
    transporter.sendMail({
      from: emailFrom,
      to: companyEmail,
      subject: `New Enquiry from ${enquiry.name}`,
      text: formatAdminEmail(enquiry),
      html: formatAdminEmailHtml(enquiry)
    })
  ]).then((results) => {
    const labels = [
      '✅ Saved to Google Sheets',
      '📨 Customer confirmation email sent',
      '📨 Admin notification email sent'
    ];
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(labels[index]);
      } else {
        console.error(`❌ ${labels[index]} — FAILED:`, result.reason.message);
      }
    });
  }).catch((err) => console.error('❌ Background task error:', err.message));
});

if (process.env.VERCEL !== '1') {
  app.listen(port, () => {
    console.log(`API server running on http://127.0.0.1:${port}`);
  });
}
