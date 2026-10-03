import { MessageCircle, Phone, ShoppingBag } from 'lucide-react';
import { company } from '../data/site.js';
import { getWhatsAppUrl } from '../utils/contact.js';
import { ECOMMERCE_URL } from '../utils/config.js';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-30 flex flex-col items-end gap-2.5">
      <a
        aria-label="Shop Online"
        href={`${ECOMMERCE_URL}/shop`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 rounded-full bg-emerald-800 px-3.5 py-2 text-xs font-black text-white shadow-crisp transition hover:-translate-y-1 hover:bg-emerald-700"
      >
        <ShoppingBag size={16} />
        <span className="hidden sm:inline">Shop Online</span>
      </a>
      <a
        aria-label="WhatsApp"
        href={getWhatsAppUrl('Hello Sakthi Frozen Foods, I would like to make an enquiry.')}
        target="_blank"
        rel="noreferrer"
        className="grid h-11 w-11 place-items-center rounded-full bg-[#25D366] text-white shadow-soft transition hover:-translate-y-1"
      >
        <MessageCircle size={20} />
      </a>
      <a
        aria-label="Call"
        href={`tel:${company.phone.replaceAll(' ', '')}`}
        className="grid h-11 w-11 place-items-center rounded-full bg-chilli text-white shadow-soft transition hover:-translate-y-1"
      >
        <Phone size={19} />
      </a>
    </div>
  );
}
