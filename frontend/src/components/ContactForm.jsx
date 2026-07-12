import { useState } from 'react';
import { Send } from 'lucide-react';

const initialState = {
  name: '',
  phone: '',
  email: '',
  businessType: '',
  message: ''
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Unable to send enquiry.');
      }

      setStatus({ type: 'success', message: 'Thank you. Your enquiry has been sent successfully.' });
      setForm(initialState);
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Please try again or use WhatsApp.'
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-md bg-white/70 p-5 shadow-soft ring-1 ring-olivewood/[0.08] sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-olivewood">
          Name
          <input
            required
            name="name"
            value={form.name}
            onChange={updateField}
            className="rounded-md border border-olivewood/[0.15] bg-white px-4 py-3 outline-none transition focus:border-chilli"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-olivewood">
          Phone
          <input
            required
            name="phone"
            value={form.phone}
            onChange={updateField}
            className="rounded-md border border-olivewood/[0.15] bg-white px-4 py-3 outline-none transition focus:border-chilli"
            placeholder="+91"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-olivewood">
          Email
          <input
            required
            name="email"
            type="email"
            value={form.email}
            onChange={updateField}
            className="rounded-md border border-olivewood/[0.15] bg-white px-4 py-3 outline-none transition focus:border-chilli"
            placeholder="you@example.com"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-olivewood">
          Business type
          <select
            name="businessType"
            value={form.businessType}
            onChange={updateField}
            className="rounded-md border border-olivewood/[0.15] bg-white px-4 py-3 outline-none transition focus:border-chilli"
          >
            <option value="">Select one</option>
            <option>Retail store</option>
            <option>Restaurant / Cafe</option>
            <option>Caterer</option>
            <option>Distributor</option>
            <option>Home buyer</option>
          </select>
        </label>
      </div>
      <label className="mt-4 grid gap-2 text-sm font-bold text-olivewood">
        Message
        <textarea
          required
          name="message"
          rows="5"
          value={form.message}
          onChange={updateField}
          className="resize-none rounded-md border border-olivewood/[0.15] bg-white px-4 py-3 outline-none transition focus:border-chilli"
          placeholder="Tell us what products or supply support you need."
        />
      </label>
      <button
        disabled={loading}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-olivewood px-5 py-3 font-black text-parchment transition hover:-translate-y-0.5 hover:bg-chilli disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        <Send size={18} />
        {loading ? 'Sending...' : 'Send enquiry'}
      </button>
      {status.message && (
        <p className={`mt-4 text-sm font-bold ${status.type === 'success' ? 'text-green-700' : 'text-chilli'}`}>
          {status.message}
        </p>
      )}
    </form>
  );
}
