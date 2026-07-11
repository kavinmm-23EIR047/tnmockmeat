import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, PackageCheck, Snowflake, Tags } from 'lucide-react';
import FoodImage from './FoodImage.jsx';

export default function ProductCard({ product, compact = false }) {
  return (
    <article className="scroll-reveal group relative flex h-full flex-col overflow-hidden rounded-md bg-white/[0.72] shadow-soft ring-1 ring-olivewood/[0.1] transition duration-300 hover:-translate-y-1 hover:shadow-crisp focus-within:-translate-y-1 focus-within:shadow-crisp">
      <div className="absolute right-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-md bg-parchment/95 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-olivewood shadow-insetLine backdrop-blur">
        <MessageCircle size={13} strokeWidth={2.8} />
        Enquiry only
      </div>
      <div className={compact ? 'h-48 overflow-hidden sm:h-52' : 'h-52 overflow-hidden sm:h-60 lg:h-64'}>
        <FoodImage
          src={product.image}
          alt={product.name}
          category={product.category}
          className="h-full w-full"
          imgClassName="object-cover transition duration-700 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="relative flex flex-1 flex-col p-5">
        <p className="mb-2 inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-sage">
          <PackageCheck size={15} strokeWidth={2.6} />
          {product.category}
        </p>
        <h3 className="font-display text-[1.35rem] font-black leading-tight text-olivewood sm:text-2xl">{product.name}</h3>
        <p className="mt-3 text-sm leading-7 text-bark">{product.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span key={tag} className="inline-flex items-center gap-1.5 rounded-md bg-olive/[0.35] px-3 py-1 text-xs font-extrabold text-olivewood">
              {tag.toLowerCase().includes('frozen') ? <Snowflake size={13} /> : <Tags size={13} />}
              {tag}
            </span>
          ))}
        </div>
        {!compact && (
          <Link
            to="/contact"
            className="mt-auto inline-flex w-fit items-center gap-2 pt-5 text-sm font-black text-chilli outline-none transition hover:text-olivewood focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-chilli focus-visible:ring-offset-4 focus-visible:ring-offset-white"
          >
            Ask availability <ArrowRight size={17} strokeWidth={2.8} />
          </Link>
        )}
      </div>
    </article>
  );
}
