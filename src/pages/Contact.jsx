import { ExternalLink, Instagram, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
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
      <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-md bg-olivewood p-7 text-parchment shadow-soft">
          <h3 className="font-display text-2xl font-black">Direct contact</h3>
          <div className="mt-6 grid gap-4 text-sm text-parchment/[0.78]">
            <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className="flex gap-3 rounded-md bg-white/10 p-4 hover:bg-white/[0.15]">
              <MessageCircle className="text-olive" size={22} />
              WhatsApp enquiry
            </a>
            <a href={`tel:${company.phone.replaceAll(' ', '')}`} className="flex gap-3 rounded-md bg-white/10 p-4 hover:bg-white/[0.15]">
              <Phone className="text-olive" size={22} />
              {company.phone}
            </a>
            <a href={`tel:${company.officePhone.replaceAll(' ', '')}`} className="flex gap-3 rounded-md bg-white/10 p-4 hover:bg-white/[0.15]">
              <Phone className="text-olive" size={22} />
              Office: {company.officePhone}
            </a>
            <a href={`mailto:${company.email}`} className="flex gap-3 rounded-md bg-white/10 p-4 hover:bg-white/[0.15]">
              <Mail className="text-olive" size={22} />
              {company.email}
            </a>
            <a href={`https://www.instagram.com/${company.instagram}`} target="_blank" rel="noreferrer" className="flex gap-3 rounded-md bg-white/10 p-4 hover:bg-white/[0.15]">
              <Instagram className="text-olive" size={22} />
              @{company.instagram}
            </a>
            <span className="flex gap-3 rounded-md bg-white/10 p-4">
              <MapPin className="text-olive" size={22} />
              {company.location}
            </span>
            <a href={company.mapsUrl} target="_blank" rel="noreferrer" className="flex gap-3 rounded-md bg-white/10 p-4 hover:bg-white/[0.15]">
              <ExternalLink className="text-olive" size={22} />
              View on Google Maps
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
