import { useState, useEffect } from 'react';
import { Send, CheckCircle, User, Phone, Mail, Briefcase, MessageSquare } from 'lucide-react';

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

  // Lock body scroll when success popup modal is open
  useEffect(() => {
    const isSuccessOpen = status.type === 'success';
    document.body.style.overflow = isSuccessOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [status.type]);

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
    <form onSubmit={handleSubmit} className="rounded-2xl bg-white/[0.85] p-6 shadow-crisp border border-black/5 sm:p-8 backdrop-blur-md">
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Name Input */}
        <div>
          <label className="mb-1.5 block text-xs font-black uppercase tracking-wider text-olivewood/60">
            Name
          </label>
          <div className="relative group">
            <User className="absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-olivewood/35 transition-colors group-focus-within:text-chilli" />
            <input
              required
              name="name"
              value={form.name}
              onChange={updateField}
              disabled={loading}
              className="w-full rounded-xl border border-olivewood/15 bg-white/40 pl-11 pr-4 py-3.5 text-sm outline-none transition focus:border-chilli focus:bg-white focus:ring-4 focus:ring-chilli/10 disabled:opacity-50"
              placeholder="Your name"
            />
          </div>
        </div>

        {/* Phone Input */}
        <div>
          <label className="mb-1.5 block text-xs font-black uppercase tracking-wider text-olivewood/60">
            Phone
          </label>
          <div className="relative group">
            <Phone className="absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-olivewood/35 transition-colors group-focus-within:text-chilli" />
            <input
              required
              name="phone"
              value={form.phone}
              onChange={updateField}
              disabled={loading}
              className="w-full rounded-xl border border-olivewood/15 bg-white/40 pl-11 pr-4 py-3.5 text-sm outline-none transition focus:border-chilli focus:bg-white focus:ring-4 focus:ring-chilli/10 disabled:opacity-50"
              placeholder="+91"
            />
          </div>
        </div>

        {/* Email Input */}
        <div>
          <label className="mb-1.5 block text-xs font-black uppercase tracking-wider text-olivewood/60">
            Email
          </label>
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-olivewood/35 transition-colors group-focus-within:text-chilli" />
            <input
              required
              name="email"
              type="email"
              value={form.email}
              onChange={updateField}
              disabled={loading}
              className="w-full rounded-xl border border-olivewood/15 bg-white/40 pl-11 pr-4 py-3.5 text-sm outline-none transition focus:border-chilli focus:bg-white focus:ring-4 focus:ring-chilli/10 disabled:opacity-50"
              placeholder="you@example.com"
            />
          </div>
        </div>

        {/* Business Type Select */}
        <div>
          <label className="mb-1.5 block text-xs font-black uppercase tracking-wider text-olivewood/60">
            Business type
          </label>
          <div className="relative group">
            <Briefcase className="absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-olivewood/35 transition-colors group-focus-within:text-chilli pointer-events-none" />
            <select
              name="businessType"
              value={form.businessType}
              onChange={updateField}
              disabled={loading}
              className="w-full rounded-xl border border-olivewood/15 bg-white/40 pl-11 pr-10 py-3.5 text-sm outline-none transition focus:border-chilli focus:bg-white focus:ring-4 focus:ring-chilli/10 disabled:opacity-50 appearance-none"
            >
              <option value="">Select one</option>
              <option>Retail store</option>
              <option>Restaurant / Cafe</option>
              <option>Caterer</option>
              <option>Distributor</option>
              <option>Home buyer</option>
            </select>
            {/* Custom dropdown arrow */}
            <div className="absolute right-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 pointer-events-none text-olivewood/40">
              <svg className="w-full h-full fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Message Textarea */}
      <div className="mt-5">
        <label className="mb-1.5 block text-xs font-black uppercase tracking-wider text-olivewood/60">
          Message
        </label>
        <div className="relative group">
          <MessageSquare className="absolute left-4 top-4 h-[18px] w-[18px] text-olivewood/35 transition-colors group-focus-within:text-chilli" />
          <textarea
            required
            name="message"
            rows="5"
            value={form.message}
            onChange={updateField}
            disabled={loading}
            className="w-full resize-none rounded-xl border border-olivewood/15 bg-white/40 pl-11 pr-4 py-3.5 text-sm outline-none transition focus:border-chilli focus:bg-white focus:ring-4 focus:ring-chilli/10 disabled:opacity-50"
            placeholder="Tell us what products or supply support you need."
          />
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-6 flex flex-col items-stretch sm:items-start">
        <button
          disabled={loading}
          className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-chilli px-8 py-4 text-sm font-black text-white shadow-crisp transition-all duration-300 hover:scale-[1.02] hover:bg-chilli/90 active:scale-100 disabled:pointer-events-none sm:w-auto"
        >
          {loading ? (
            <>
              <Spinner />
              <span>Sending your enquiry...</span>
            </>
          ) : (
            <>
              <Send size={16} />
              <span>Send enquiry</span>
            </>
          )}
        </button>



        {/* Success Popup Modal */}
        {status.type === 'success' && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 modal-backdrop-fade">
            {/* Modal dismiss click area */}
            <div 
              className="absolute inset-0" 
              onClick={() => setStatus({ type: '', message: '' })} 
            />
            
            <div className="relative w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-2xl border border-black/5 enquiry-success-msg">
              {/* Animated Success Check Indicator */}
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600 ring-8 ring-green-50/50">
                <CheckCircle size={32} strokeWidth={2.5} className="animate-pulse" />
              </div>
              
              <h3 className="font-display text-xl font-black text-olivewood">
                Enquiry Sent!
              </h3>
              
              <p className="mt-3 text-sm leading-relaxed text-bark/80">
                {status.message}
              </p>
              
              <button
                type="button"
                onClick={() => setStatus({ type: '', message: '' })}
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-chilli px-6 py-3.5 text-sm font-black text-white shadow-soft transition-all duration-300 hover:bg-chilli/90 hover:scale-[1.02] active:scale-100"
              >
                Got it, thanks!
              </button>
            </div>
          </div>
        )}

        {/* Error message */}
        {status.type === 'error' && (
          <div className="enquiry-success-msg mt-4 flex w-full items-center gap-2.5 rounded-xl bg-red-50 px-4 py-3.5 ring-1 ring-red-200">
            <p className="text-sm font-bold text-chilli">{status.message}</p>
          </div>
        )}
      </div>
    </form>
  );
}
