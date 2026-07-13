import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const initialState = {
  name: '',
  phone: '',
  email: '',
  businessType: '',
  message: ''
};

function Spinner() {
  return (
    <svg
      className="animate-spin"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.25"
      />
      <path
        d="M12 2a10 10 0 0 1 10 10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

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
      const apiBaseUrl = import.meta.env.VITE_API_URL || '';
      const startTime = Date.now();

      const response = await fetch(`${apiBaseUrl}/api/enquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Unable to send enquiry.');
      }

      // Ensure spinner shows for at least 5 seconds total
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(5000 - elapsed, 0);
      await new Promise((resolve) => setTimeout(resolve, remaining));

      setStatus({ type: 'success', message: 'Thank you! Your enquiry has been sent successfully.' });
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
            disabled={loading}
            className="rounded-md border border-olivewood/[0.15] bg-white px-4 py-3 outline-none transition focus:border-chilli disabled:opacity-50"
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
            disabled={loading}
            className="rounded-md border border-olivewood/[0.15] bg-white px-4 py-3 outline-none transition focus:border-chilli disabled:opacity-50"
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
            disabled={loading}
            className="rounded-md border border-olivewood/[0.15] bg-white px-4 py-3 outline-none transition focus:border-chilli disabled:opacity-50"
            placeholder="you@example.com"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-olivewood">
          Business type
          <select
            name="businessType"
            value={form.businessType}
            onChange={updateField}
            disabled={loading}
            className="rounded-md border border-olivewood/[0.15] bg-white px-4 py-3 outline-none transition focus:border-chilli disabled:opacity-50"
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
          disabled={loading}
          className="resize-none rounded-md border border-olivewood/[0.15] bg-white px-4 py-3 outline-none transition focus:border-chilli disabled:opacity-50"
          placeholder="Tell us what products or supply support you need."
        />
      </label>

      <button
        disabled={loading}
        className="mt-5 inline-flex w-full items-center justify-center gap-2.5 rounded-md bg-olivewood px-6 py-3.5 font-black text-parchment transition-all duration-300 hover:-translate-y-0.5 hover:bg-chilli disabled:pointer-events-none sm:w-auto"
      >
        {loading ? (
          <>
            <Spinner />
            <span>Sending your enquiry...</span>
          </>
        ) : (
          <>
            <Send size={18} />
            <span>Send enquiry</span>
          </>
        )}
      </button>

      {/* Loading progress bar */}
      {loading && (
        <div className="mt-4 overflow-hidden rounded-full bg-olivewood/10">
          <div className="enquiry-progress-bar h-1.5 rounded-full bg-gradient-to-r from-chilli via-amber-500 to-green-600" />
        </div>
      )}

      {/* Success message */}
      {status.type === 'success' && (
        <div className="enquiry-success-msg mt-4 flex items-center gap-2 rounded-lg bg-green-50 px-4 py-3 ring-1 ring-green-200">
          <CheckCircle size={20} className="shrink-0 text-green-600" />
          <p className="text-sm font-bold text-green-700">{status.message}</p>
        </div>
      )}

      {/* Error message */}
      {status.type === 'error' && (
        <div className="enquiry-success-msg mt-4 flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 ring-1 ring-red-200">
          <p className="text-sm font-bold text-chilli">{status.message}</p>
        </div>
      )}
    </form>
  );
}
