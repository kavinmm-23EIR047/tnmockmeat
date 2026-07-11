import { Menu, Snowflake, Sparkles, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { company, navLinks } from '../data/site.js';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-olivewood/10 bg-parchment/[0.82] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-12 w-12 place-items-center rounded-md bg-olivewood text-parchment shadow-crisp transition group-hover:-rotate-3 group-hover:scale-105">
            <Snowflake size={22} />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-xl font-black text-olivewood">
              {company.shortName}
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
        <div className="border-t border-olivewood/10 bg-parchment px-4 py-4 shadow-soft lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-4 py-3 text-sm font-bold ${
                    isActive ? 'bg-olivewood text-parchment' : 'bg-white/[0.45] text-olivewood'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
