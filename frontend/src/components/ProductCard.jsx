import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, PackageCheck, ShoppingBag, Snowflake, Tags, ExternalLink } from 'lucide-react';
import FoodImage from './FoodImage.jsx';
import { getWhatsAppUrl } from '../utils/contact.js';
import { slugify } from '../utils/seo.js';
import { ECOMMERCE_URL } from '../utils/config.js';

export default function ProductCard({ product, compact = false }) {
  const enquiryUrl = getWhatsAppUrl(`Hello Sakthi Frozen Foods, I want to make a wholesale/B2B enquiry about ${product.name}.`);
  const productUrl = `/products/${slugify(product.name)}`;
  const buyOnlineUrl = `${ECOMMERCE_URL}/shop?q=${encodeURIComponent(product.name)}`;

  return (
    <article className="scroll-reveal group relative flex h-full flex-col overflow-hidden rounded-md bg-white/[0.72] shadow-soft ring-1 ring-olivewood/[0.1] transition duration-300 sm:hover:-translate-y-1 sm:hover:shadow-crisp sm:focus-within:-translate-y-1 sm:focus-within:shadow-crisp">
      <div className="absolute right-2 top-2 z-10 inline-flex items-center gap-1 rounded-md bg-emerald-800/90 text-white px-2 py-1 text-[8px] xs:text-[10px] font-black uppercase tracking-[0.14em] shadow-sm backdrop-blur sm:right-3 sm:top-3 sm:px-2.5 sm:py-1">
        <ShoppingBag size={11} strokeWidth={2.8} className="sm:w-3 sm:h-3" />
        Order Online
      </div>
      <div className={compact ? 'h-36 xs:h-44 sm:h-52 overflow-hidden' : 'h-40 xs:h-48 sm:h-52 md:h-60 lg:h-64 overflow-hidden'}>
        <Link to={productUrl} className="block h-full">
          <FoodImage
            src={product.image}
            alt={product.name}
            category={product.category}
            className="h-full w-full"
            imgClassName="object-cover transition duration-700 sm:group-hover:scale-110"
            loading="lazy"
          />
        </Link>
      </div>
      <div className="relative flex flex-1 flex-col p-3 xs:p-4 sm:p-5">
        <p className="mb-1.5 inline-flex items-center gap-1.5 text-[9px] xs:text-[10px] sm:text-[11px] font-black uppercase tracking-[0.18em] text-sage">
          <PackageCheck size={12} strokeWidth={2.6} className="sm:w-3.5 sm:h-3.5" />
          {product.category}
        </p>
        <h3 className="font-display text-sm xs:text-base sm:text-xl lg:text-2xl font-black leading-tight text-olivewood">
          <Link to={productUrl} className="hover:text-chilli transition-colors duration-200">
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-[11px] xs:text-xs sm:text-sm leading-5 sm:leading-7 text-bark sm:line-clamp-none">{product.description}</p>
        <div className="mt-3 flex flex-wrap gap-1 sm:gap-2">
          {product.tags.map((tag) => (
            <span key={tag} className="inline-flex items-center gap-1 rounded-md bg-olive/[0.35] px-2 py-0.5 text-[9px] sm:text-xs font-extrabold text-olivewood sm:px-3 sm:py-1">
              {tag.toLowerCase().includes('frozen') ? <Snowflake size={10} className="sm:w-3 sm:h-3" /> : <Tags size={10} className="sm:w-3 sm:h-3" />}
              {tag}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="mt-auto pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 border-t border-olivewood/10 mt-4">
          <a
            href={buyOnlineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-md bg-emerald-800 px-3 py-1.5 text-[11px] xs:text-xs font-black text-white hover:bg-emerald-700 transition shadow-xs"
          >
            <ShoppingBag size={13} /> Buy Retail Online <ExternalLink size={10} className="opacity-70" />
          </a>

          {!compact && (
            <a
              href={enquiryUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1 text-[11px] xs:text-xs font-bold text-chilli hover:text-olivewood transition py-1"
            >
              <MessageCircle size={13} /> Bulk Enquiry <ArrowRight size={12} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

