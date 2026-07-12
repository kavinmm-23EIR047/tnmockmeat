import { Menu, Sparkles, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { company, navLinks } from '../data/site.js';

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-olivewood/10 bg-parchment/[0.82] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-md bg-transparent transition group-hover:-rotate-3 group-hover:scale-105">
            <img src="/images/logo.png" alt={company.name} className="h-full w-full object-contain" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-xl font-black text-olivewood">
              {company.name}
            </span>
            <span className="block text-[11px] font-extrabold uppercase tracking-[0.18em] text-bark">
              Mock meat and frozen foods
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-md border border-olivewood/10 bg-white/[0.36] p-1 shadow-insetLine lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-md px-4 py-2 text-sm font-extrabold transition ${
                  isActive
                    ? 'bg-olivewood text-parchment shadow-crisp'
                    : 'text-olivewood hover:bg-olive/[0.35]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden items-center gap-2 rounded-md bg-chilli px-5 py-2.5 text-sm font-extrabold text-white shadow-crisp transition hover:-translate-y-0.5 hover:bg-olivewood lg:inline-flex"
        >
          <Sparkles size={16} />
          Enquire Now
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          className="grid h-11 w-11 place-items-center rounded-md border border-olivewood/[0.15] text-olivewood lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close navigation overlay"
            className="absolute inset-0 bg-olivewood/72"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 z-10 flex h-[100dvh] w-full min-h-0 flex-col overflow-hidden bg-parchment shadow-none sm:w-[86vw] sm:max-w-sm sm:border-l sm:border-olivewood/10 sm:shadow-crisp">
            <div className="flex items-center justify-between border-b border-olivewood/10 px-5 py-4">
              <span className="font-display text-lg font-black text-olivewood">Menu</span>
              <button
                type="button"
                aria-label="Close menu"
                className="grid h-11 w-11 place-items-center rounded-md border border-olivewood/[0.15] text-olivewood"
                onClick={() => setOpen(false)}
              >
                <X size={22} />
              </button>
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto px-4 py-5 pb-6">
              <nav className="grid gap-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex min-h-14 items-center rounded-lg border-b px-2 py-4 text-lg font-bold transition ${
                        isActive
                          ? 'border-olivewood/15 bg-transparent text-olivewood'
                          : 'border-olivewood/10 bg-transparent text-olivewood/90'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
