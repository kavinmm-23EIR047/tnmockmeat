import { Menu, Sparkles, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { company, navLinks } from '../data/site.js';

export default function Header() {
  const [open, setOpen] = useState(false);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-black/10 bg-[#E9DFC9]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

          {/* Logo and Brand Info */}
          <Link to="/" className="flex flex-shrink-0 items-center gap-3" onClick={() => setOpen(false)}>
            <div className="h-11 w-11 flex-shrink-0 overflow-hidden rounded-md">
              <img
                src="/images/logo.png"
                alt={company.name}
                className="h-full w-full object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="truncate font-display text-base font-black leading-tight text-[#23291D]">
                {company.name}
              </span>
              <span className="truncate text-[9px] font-extrabold uppercase tracking-widest text-[#23291D]/70">
                Mock meat & frozen foods
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 rounded-full border border-black/5 bg-white/20 p-1 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-full px-5 py-2 text-sm font-extrabold transition-all ${isActive
                    ? 'bg-[#23291D] text-[#E9DFC9] shadow-sm'
                    : 'text-[#23291D] hover:bg-white/30'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Action CTA */}
          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-full bg-[#23291D] px-6 py-2.5 text-sm font-extrabold text-[#E9DFC9] transition-all hover:scale-[1.02] active:scale-100 lg:inline-flex"
          >
            <Sparkles size={15} />
            Enquire Now
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-md text-[#23291D] lg:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer System (Rendered outside the header context to prevent backdrop-blur/transparency inheritance) */}
      <div className={`fixed inset-0 z-50 lg:hidden ${open ? 'visible' : 'invisible'}`}>

        {/* Dimming Backdrop Overlay */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={() => setOpen(false)}
        />

        {/* Slide-out Drawer Menu Container */}
        <div
          className={`absolute right-0 top-0 flex h-full w-[85vw] max-w-xs flex-col border-l border-black/10 bg-[#E9DFC9] p-6 shadow-2xl transition-transform duration-300 ease-out ${open ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          {/* Header row inside menu */}
          <div className="flex items-center justify-between pb-4 border-b border-black/10">
            <span className="font-display text-lg font-black text-[#23291D]">Navigation</span>
            <button
              type="button"
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center text-[#23291D]"
              onClick={() => setOpen(false)}
            >
              <X size={24} />
            </button>
          </div>

          {/* Nav Links Stack */}
          <nav className="flex flex-col gap-2 pt-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-3.5 text-lg font-bold transition-colors ${isActive
                    ? 'bg-[#23291D]/10 text-[#23291D]'
                    : 'text-[#23291D]/80 hover:bg-[#23291D]/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Action CTA inside Mobile Drawer */}
          <div className="mt-auto pt-6">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#23291D] py-4 text-center text-base font-black text-[#E9DFC9] shadow-md transition-transform active:scale-95"
            >
              <Sparkles size={18} />
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}