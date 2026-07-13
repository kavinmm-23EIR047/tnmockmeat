import { ExternalLink, Instagram, Mail, MapPin, MessageCircle, Phone, UserRound } from 'lucide-react';
import ContactForm from '../components/ContactForm.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { company } from '../data/site.js';
import { getWhatsAppUrl } from '../utils/contact.js';

export default function Contact() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Contact"
        title="Send an enquiry for mock meat, frozen foods, availability or supply."
        text="This form is for business and customer enquiries only. It does not create an online order."
      />
      <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] items-start">
        {/* Direct Contact - Renders second on mobile, first on desktop */}
        <div className="order-2 lg:order-1 rounded-2xl border border-olivewood/10 bg-[#23291D] p-5 sm:p-6 text-parchment shadow-crisp">
          <h3 className="font-display text-2xl font-black">Direct contact</h3>
          <p className="text-xs text-parchment/60 mt-1">Reach out to us directly or request a callback</p>
          
          <div className="mt-6 grid gap-3 text-sm text-parchment/[0.78]">
            {/* Proprietor */}
            <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-3 sm:p-3.5 transition duration-300">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-turmeric/10 text-turmeric border border-turmeric/20">
                <UserRound size={18} />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-parchment/50 font-black uppercase tracking-wider">{company.proprietorTitle}</p>
                <p className="text-sm font-extrabold truncate">{company.proprietor}</p>
              </div>
            </div>

            {/* WhatsApp */}
            <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-3 sm:p-3.5 hover:bg-emerald-500/10 hover:border-emerald-500/20 transition duration-300 group">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition duration-300">
                <MessageCircle size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] text-parchment/50 font-black uppercase tracking-wider">Quick Chat</p>
                <p className="text-sm font-extrabold truncate">WhatsApp enquiry</p>
              </div>
            </a>

            {/* Phone 1 */}
            <a href={`tel:${company.phone.replaceAll(' ', '')}`} className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-3 sm:p-3.5 hover:bg-chilli/10 hover:border-chilli/20 transition duration-300 group">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-chilli/10 text-chilli border border-chilli/20 group-hover:bg-chilli group-hover:text-white transition duration-300">
                <Phone size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] text-parchment/50 font-black uppercase tracking-wider">Mobile Call</p>
                <p className="text-sm font-extrabold truncate">{company.phone}</p>
              </div>
            </a>

            {/* Phone 2 */}
            <a href={`tel:${company.officePhone.replaceAll(' ', '')}`} className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-3 sm:p-3.5 hover:bg-chilli/10 hover:border-chilli/20 transition duration-300 group">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-chilli/10 text-chilli border border-chilli/20 group-hover:bg-chilli group-hover:text-white transition duration-300">
                <Phone size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] text-parchment/50 font-black uppercase tracking-wider">Office Line</p>
                <p className="text-sm font-extrabold truncate">Office: {company.officePhone}</p>
              </div>
            </a>

            {/* Email */}
            <a href={`mailto:${company.email}`} className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-3 sm:p-3.5 hover:bg-sky-500/10 hover:border-sky-500/20 transition duration-300 group">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20 group-hover:bg-sky-500 group-hover:text-white transition duration-300">
                <Mail size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] text-parchment/50 font-black uppercase tracking-wider">Write Email</p>
                <p className="text-sm font-extrabold truncate">{company.email}</p>
              </div>
            </a>

            {/* Instagram */}
            <a href={`https://www.instagram.com/${company.instagram}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-3 sm:p-3.5 hover:bg-pink-500/10 hover:border-pink-500/20 transition duration-300 group">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pink-500/10 text-pink-400 border border-pink-500/20 group-hover:bg-pink-500 group-hover:text-white transition duration-300">
                <Instagram size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] text-parchment/50 font-black uppercase tracking-wider">Social Media</p>
                <p className="text-sm font-extrabold truncate">@{company.instagram}</p>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-start gap-4 rounded-xl border border-white/5 bg-white/5 p-3 sm:p-3.5 transition duration-300">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#B8C1A2]/10 text-[#B8C1A2] border border-[#B8C1A2]/20">
                <MapPin size={18} />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-parchment/50 font-black uppercase tracking-wider">Head Office</p>
                <p className="text-xs font-extrabold leading-relaxed mt-0.5">{company.location}</p>
              </div>
            </div>

            {/* Maps URL */}
            <a href={company.mapsUrl} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-3 sm:p-3.5 hover:bg-white/[0.1] hover:border-white/10 transition duration-300 group">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-parchment border border-white/10 group-hover:bg-white group-hover:text-olivewood transition duration-300">
                <ExternalLink size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] text-parchment/50 font-black uppercase tracking-wider">Directions</p>
                <p className="text-sm font-extrabold truncate">View on Google Maps</p>
              </div>
            </a>

          </div>
        </div>

        {/* Enquiry Form - Renders first on mobile, second on desktop */}
        <div className="order-1 lg:order-2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
