import { Link } from 'react-router-dom';
import { ExternalLink, Instagram, Mail, MapPin, Phone, ShoppingBag } from 'lucide-react';
import { company, legalLinks, navLinks, certifications } from '../data/site.js';
import { ECOMMERCE_URL } from '../utils/config.js';

export default function Footer() {
  const onlineStoreLinks = [
    { label: 'Shop All Products', href: `${ECOMMERCE_URL}/shop` },
    { label: 'Special Offers & Combos', href: `${ECOMMERCE_URL}/shop` },
    { label: 'Track Order', href: `${ECOMMERCE_URL}/orders` },
    { label: 'My Account', href: `${ECOMMERCE_URL}/account` },
  ];

  return (
    <footer className="bg-olivewood text-parchment">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1fr_0.8fr] lg:px-8">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-md bg-white p-1">
              <img src="/images/logo.png" alt={company.shortName} className="h-full w-full object-contain" />
            </span>
            <div>
              <p className="font-display text-xl font-black">{company.name}</p>
              <p className="text-sm text-parchment/70">Mock meat &amp; frozen foods</p>
            </div>
          </div>
          <p className="max-w-xl text-sm leading-7 text-parchment/[0.76]">
            Coimbatore-based supplier serving plant-based mock meat and frozen foods for hotels,
            caterers, retailers, and restaurants all over India.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {certifications.map((item) => (
              <Link
                key={item}
                to="/licenses"
                className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-parchment/80 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 font-display text-sm font-black uppercase tracking-[0.22em] text-olive">
            Corporate
          </p>
          <div className="grid gap-3">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className="text-sm text-parchment/[0.76] hover:text-white transition">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 font-display text-sm font-black uppercase tracking-[0.22em] text-emerald-400 flex items-center gap-1.5">
            <ShoppingBag size={14} /> Online Store
          </p>
          <div className="grid gap-3">
            {onlineStoreLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-parchment/[0.76] hover:text-emerald-300 transition"
              >
                <span>{item.label}</span>
                <ExternalLink size={11} className="opacity-60" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 font-display text-sm font-black uppercase tracking-[0.22em] text-olive">
            Contact
          </p>
          <div className="grid gap-3 text-sm text-parchment/[0.76]">
            <a className="flex gap-3 hover:text-white transition" href={company.mapsUrl} target="_blank" rel="noreferrer">
              <MapPin size={18} className="shrink-0 text-olive" />
              {company.location}
            </a>
            <a className="flex gap-3 hover:text-white" href={`tel:${company.phone.replaceAll(' ', '')}`}>
              <Phone size={18} className="shrink-0 text-olive" />
              {company.phone}
            </a>
            <a className="flex gap-3 hover:text-white" href={`tel:${company.officePhone.replaceAll(' ', '')}`}>
              <Phone size={18} className="shrink-0 text-olive" />
              {company.officePhone}
            </a>
            <a className="flex gap-3 hover:text-white" href={`mailto:${company.email}`}>
              <Mail size={18} className="shrink-0 text-olive" />
              {company.email}
            </a>
            <a className="flex gap-3 hover:text-white" href={`https://www.instagram.com/${company.instagram}`} target="_blank" rel="noreferrer">
              <Instagram size={18} className="shrink-0 text-olive" />
              @{company.instagram}
            </a>
          </div>
        </div>

        <div>
          <p className="mb-4 font-display text-sm font-black uppercase tracking-[0.22em] text-olive">
            Legal
          </p>
          <div className="grid gap-3 text-sm text-parchment/[0.76]">
            {legalLinks.map((link) => (
              <Link key={link.to} to={link.to} className="hover:text-white transition">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-parchment/60 sm:flex sm:items-center sm:justify-between sm:text-left max-w-7xl mx-auto">
        <p>© {new Date().getFullYear()} {company.name}. Mock meat &amp; frozen foods.</p>
        <p className="mt-2 sm:mt-0">
          Developed by{' '}
          <a 
            href="https://akwebflairtechnologies.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="underline hover:text-white transition-colors"
          >
            akwebflairtechnologies
          </a>
        </p>
      </div>
    </footer>
  );
}
