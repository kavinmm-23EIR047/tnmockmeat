import { MessageCircle, Phone } from 'lucide-react';
import { company } from '../data/site.js';
import { getWhatsAppUrl } from '../utils/contact.js';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-30 flex flex-col gap-3">
      <a
        aria-label="WhatsApp"
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noreferrer"
        className="grid h-12 w-12 place-items-center rounded-md bg-[#25D366] text-white shadow-soft transition hover:-translate-y-1"
      >
        <MessageCircle size={22} />
      </a>
      <a
        aria-label="Call"
        href={`tel:${company.phone.replaceAll(' ', '')}`}
        className="grid h-12 w-12 place-items-center rounded-md bg-chilli text-white shadow-soft transition hover:-translate-y-1"
      >
        <Phone size={21} />
      </a>
    </div>
  );
}
