import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mock_meat_foods';

app.use(cors({ origin: ['http://127.0.0.1:5173', 'http://localhost:5173'] }));
app.use(express.json({ limit: '1mb' }));

const enquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, trim: true },
    businessType: { type: String, trim: true },
    message: { type: String, required: true, trim: true }
  },
  { timestamps: true }
);

const Enquiry = mongoose.model('Enquiry', enquirySchema);

app.get('/api/health', (_request, response) => {
  response.json({ ok: true, service: 'mock-meat-api' });
});

app.post('/api/enquiries', async (request, response) => {
  const { name, phone, email, businessType, message } = request.body;

  if (!name || !phone || !message) {
    return response.status(400).json({ message: 'Name, phone and message are required.' });
  }

  const enquiry = await Enquiry.create({ name, phone, email, businessType, message });
  return response.status(201).json({ message: 'Enquiry saved.', enquiryId: enquiry._id });
});

async function startServer() {
  try {
    await mongoose.connect(mongoUri);
    app.listen(port, () => {
      console.log(`API server running on http://127.0.0.1:${port}`);
    });
  } catch (error) {
    console.error('Unable to start API server:', error.message);
    process.exit(1);
  }
}

startServer();
