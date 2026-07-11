import { Link } from 'react-router-dom';
import { Instagram, Mail, MapPin, Phone, Snowflake } from 'lucide-react';
import { company, navLinks } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="bg-olivewood text-parchment">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-md bg-parchment text-olivewood">
              <Snowflake size={22} />
            </span>
            <div>
              <p className="font-display text-xl font-black">{company.name}</p>
              <p className="text-sm text-parchment/70">{company.shortName}</p>
            </div>
          </div>
          <p className="max-w-xl text-sm leading-7 text-parchment/[0.76]">
            Coimbatore-based supplier serving plant-based mock meat, frozen snacks and
            kitchen-ready products for hotels, caterers, retailers and restaurants.
          </p>
        </div>

        <div>
          <p className="mb-4 font-display text-sm font-black uppercase tracking-[0.22em] text-olive">
            Explore
          </p>
          <div className="grid gap-3">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className="text-sm text-parchment/[0.76] hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 font-display text-sm font-black uppercase tracking-[0.22em] text-olive">
            Contact
          </p>
          <div className="grid gap-3 text-sm text-parchment/[0.76]">
            <span className="flex gap-3">
              <MapPin size={18} className="shrink-0 text-olive" />
              {company.location}
            </span>
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
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-parchment/60">
        © {new Date().getFullYear()} {company.name}. Showcase website. No online ordering or prices.
      </div>
    </footer>
  );
}
