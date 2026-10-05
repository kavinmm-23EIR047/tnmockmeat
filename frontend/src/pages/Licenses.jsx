import { ArrowDownToLine, FileText } from 'lucide-react';
import SectionHeader from '../components/SectionHeader.jsx';
import { licenses } from '../data/licenses.js';

export default function Licenses() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <SectionHeader
        eyebrow="Licenses & registrations"
        title="Our business credentials."
        text="View or download Sakthi Frozen Food Traders' food safety, GST and MSME registration certificates."
      />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {licenses.map((license) => (
          <article key={license.title} className="overflow-hidden rounded-md bg-white shadow-soft ring-1 ring-olivewood/10">
            <a
              href={license.pdf}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${license.title} certificate`}
              className="group relative block h-72 overflow-hidden bg-white p-4"
            >
              <img
                src={license.image}
                alt={`${license.title} certificate preview`}
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <span className="absolute inset-0 grid place-items-center bg-olivewood/0 text-white transition group-hover:bg-olivewood/35">
                <span className="inline-flex items-center gap-2 rounded-full bg-olivewood px-4 py-2 text-sm font-extrabold opacity-0 transition group-hover:opacity-100">
                  <FileText size={16} /> View certificate
                </span>
              </span>
            </a>
            <div className="border-t border-olivewood/10 p-5">
              <h2 className="font-display text-xl font-black text-olivewood">{license.title}</h2>
              <p className="mt-1 text-sm font-bold text-chilli">{license.issuer}</p>
              <p className="mt-3 text-sm leading-6 text-bark">{license.description}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={license.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-olivewood px-4 py-2 text-sm font-extrabold text-white transition hover:bg-bark"
                >
                  <FileText size={15} /> View
                </a>
                <a
                  href={license.pdf}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-olivewood/20 px-4 py-2 text-sm font-extrabold text-olivewood transition hover:bg-olivewood/5"
                >
                  <ArrowDownToLine size={15} /> Download PDF
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
