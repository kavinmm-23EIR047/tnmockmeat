import SectionHeader from '../components/SectionHeader.jsx';
import { BadgeCheck } from 'lucide-react';
import { certifications, company, mockMeatInfo, strengths } from '../data/site.js';

export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="About"
        title="A Coimbatore-based frozen food trader for mock meat and plant-based products."
        text={`${company.name} supplies mock meat and frozen food products designed for caterers, hotels, restaurants and home-style cooking needs.`}
      />
      <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-md bg-olivewood p-8 text-parchment shadow-soft">
          <p className="font-display text-2xl xs:text-3xl sm:text-4xl font-black">{company.shortName}</p>
          <div className="mt-4 rounded-md bg-white/10 px-4 py-3">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-olive">{company.proprietorTitle}</p>
            <p className="mt-1 font-display text-2xl font-black text-parchment">{company.proprietor}</p>
          </div>
          <p className="mt-5 leading-8 text-parchment/[0.76]">
            We focus on delicious plant-based meat and frozen food products for food
            businesses that need convenient, consistent and vegetarian-friendly supply.
          </p>
          <div className="mt-7 grid gap-3">
            {certifications.map((item) => (
              <span key={item} className="inline-flex items-center gap-3 rounded-md bg-white/10 px-4 py-3 text-sm font-black">
                <BadgeCheck size={19} className="text-olive" />
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {strengths.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-md bg-white/60 p-6 shadow-soft ring-1 ring-olivewood/[0.08]">
                <Icon className="mb-4 text-chilli" size={28} />
                <h3 className="font-display text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-bark">
                  Practical support for food businesses looking for reliable frozen products.
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {mockMeatInfo.map((item) => (
          <article key={item.title} className="rounded-md bg-white/60 p-6 shadow-soft ring-1 ring-olivewood/[0.08]">
            <h3 className="font-display text-xl font-black">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-bark">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
