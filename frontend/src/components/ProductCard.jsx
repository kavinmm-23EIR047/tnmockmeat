import { ArrowRight, MessageCircle, PackageCheck, Snowflake, Tags } from 'lucide-react';
import FoodImage from './FoodImage.jsx';
import { getWhatsAppUrl } from '../utils/contact.js';

export default function ProductCard({ product, compact = false }) {
  const enquiryUrl = getWhatsAppUrl(`Hello Mock Meat, I want to enquire about ${product.name}.`);

  return (
    <article className="scroll-reveal group relative flex h-full flex-col overflow-hidden rounded-md bg-white/[0.72] shadow-soft ring-1 ring-olivewood/[0.1] transition duration-300 hover:-translate-y-1 hover:shadow-crisp focus-within:-translate-y-1 focus-within:shadow-crisp">
      <div className="absolute right-2 top-2 z-10 inline-flex items-center gap-1 rounded-md bg-parchment/95 px-2 py-1 text-[8px] xs:text-[10px] font-black uppercase tracking-[0.16em] text-olivewood shadow-insetLine backdrop-blur sm:right-3 sm:top-3 sm:px-3 sm:py-1.5">
        <MessageCircle size={11} strokeWidth={2.8} className="sm:w-3.5 sm:h-3.5" />
        Enquiry only
      </div>
      <div className={compact ? 'h-32 xs:h-40 sm:h-52 overflow-hidden' : 'h-36 xs:h-44 sm:h-52 md:h-60 lg:h-64 overflow-hidden'}>
        <FoodImage
          src={product.image}
          alt={product.name}
          category={product.category}
          className="h-full w-full"
          imgClassName="object-cover transition duration-700 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="relative flex flex-1 flex-col p-3 xs:p-4 sm:p-5">
        <p className="mb-1.5 inline-flex items-center gap-1.5 text-[9px] xs:text-[10px] sm:text-[11px] font-black uppercase tracking-[0.18em] text-sage">
          <PackageCheck size={12} strokeWidth={2.6} className="sm:w-3.5 sm:h-3.5" />
          {product.category}
        </p>
        <h3 className="font-display text-sm xs:text-base sm:text-xl lg:text-2xl font-black leading-tight text-olivewood">{product.name}</h3>
        <p className="mt-2 line-clamp-2 text-[11px] xs:text-xs sm:text-sm leading-5 sm:leading-7 text-bark sm:line-clamp-none">{product.description}</p>
        <div className="mt-3 flex flex-wrap gap-1 sm:gap-2">
          {product.tags.map((tag) => (
            <span key={tag} className="inline-flex items-center gap-1 rounded-md bg-olive/[0.35] px-2 py-0.5 text-[9px] sm:text-xs font-extrabold text-olivewood sm:px-3 sm:py-1">
              {tag.toLowerCase().includes('frozen') ? <Snowflake size={10} className="sm:w-3 sm:h-3" /> : <Tags size={10} className="sm:w-3 sm:h-3" />}
              {tag}
            </span>
          ))}
        </div>
        {!compact && (
          <a
            href={enquiryUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-auto inline-flex w-fit items-center gap-1.5 pt-3 text-[11px] xs:text-xs sm:text-sm font-black text-chilli outline-none transition hover:text-olivewood focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-chilli focus-visible:ring-offset-4 focus-visible:ring-offset-white sm:gap-2 sm:pt-5"
          >
            Enquire on WhatsApp <ArrowRight size={14} strokeWidth={2.8} className="sm:w-4 sm:h-4" />
          </a>
        )}
      </div>
    </article>
  );
}

