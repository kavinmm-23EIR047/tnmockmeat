import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CheckCircle2, Layers, Fish, Beef, Cookie, Sparkles, Snowflake, ShoppingBag, ExternalLink } from 'lucide-react';
import ProductCard from '../components/ProductCard.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { products, veganMeatHighlights } from '../data/site.js';
import { slugify } from '../utils/seo.js';
import { ECOMMERCE_URL } from '../utils/config.js';

const categoryIcons = {
  'All': Layers,
  'Mock Seafood': Fish,
  'Mock Meat': Beef,
  'Hand Made Starters': Cookie,
  'Veg Starters': Sparkles,
  'Frozen Foods': Snowflake,
  'Frozen Rolls': Layers,
  'Frozen Snacks': Sparkles
};

export default function Products() {
  const { categorySlug } = useParams();
  
  const categories = useMemo(() => ['All', ...new Set(products.map((product) => product.category))], []);

  const activeCategory = useMemo(() => {
    if (!categorySlug) return 'All';
    const match = categories.find((cat) => slugify(cat) === categorySlug);
    return match || 'All';
  }, [categorySlug, categories]);

  const visibleProducts = useMemo(() => {
    return activeCategory === 'All'
      ? products
      : products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  const ecommerceCategoryUrl = activeCategory === 'All'
    ? `${ECOMMERCE_URL}/shop`
    : `${ECOMMERCE_URL}/shop?category=${encodeURIComponent(activeCategory)}`;

  return (
    <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeader
            eyebrow="Products"
            title="Browse mock meat and frozen foods by category."
            text="Our vegan meat range is sustainable, plant-based and protein-rich, with Ready to Cook, Ready to Eat and Ready to Fry options."
          />
          <div className="scroll-reveal rounded-md bg-olivewood p-5 text-parchment shadow-crisp ring-1 ring-white/10 sm:p-6 flex flex-col justify-between">
            <div>
              <p className="font-display text-2xl font-black">B2B Wholesale & Retail Home Delivery</p>
              <p className="mt-2 text-sm leading-7 text-parchment/[0.72]">
                Preservative-free plant foods. Shelf stable at -18°C for up to 24 months from packing. Available for bulk catering supply and direct online shopping.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10">
              <a
                href={`${ECOMMERCE_URL}/shop`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-700 hover:bg-emerald-600 px-5 py-2 text-xs font-black text-white shadow-sm transition"
              >
                <ShoppingBag size={14} /> Shop Retail Packs Online <ExternalLink size={12} className="opacity-70" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {veganMeatHighlights.map((item, index) => (
            <div
              key={item}
              className="scroll-reveal flex min-h-24 items-start gap-3 rounded-md bg-white/[0.66] p-4 shadow-insetLine transition hover:-translate-y-0.5 hover:bg-white/80"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              {index === veganMeatHighlights.length - 1 ? (
                <Snowflake className="mt-1 shrink-0 text-chilli" size={20} />
              ) : (
                <CheckCircle2 className="mt-1 shrink-0 text-chilli" size={20} />
              )}
              <span className="text-sm font-bold leading-6">{item}</span>
            </div>
          ))}
        </div>

        <div className="relative mt-10">
          {/* Subtle horizontal scroll fading indicators */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-2 z-10 w-12 bg-gradient-to-l from-parchment to-transparent sm:w-16" />
          <div className="pointer-events-none absolute left-0 top-0 bottom-2 z-10 w-12 bg-gradient-to-r from-parchment to-transparent sm:w-16" />
          
          <div className="no-scrollbar flex gap-2 overflow-x-auto pb-3 px-4 -mx-4 sm:px-0 sm:mx-0">
            {categories.map((category) => {
              const Icon = categoryIcons[category] || Layers;
              const isActive = activeCategory === category;
              const categoryUrl = category === 'All' ? '/products' : `/categories/${slugify(category)}`;
              return (
                <Link
                  key={category}
                  to={categoryUrl}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold tracking-wide outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-chilli focus-visible:ring-offset-4 focus-visible:ring-offset-parchment ${
                    isActive
                      ? 'bg-chilli text-white shadow-crisp scale-102'
                      : 'bg-white/[0.6] text-bark hover:bg-white border border-olivewood/[0.08] hover:text-olivewood'
                  }`}
                >
                  <Icon size={14} className={isActive ? 'text-white' : 'text-sage'} />
                  <span>{category}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* E-commerce category quick banner */}
        <div className="mt-4 flex items-center justify-between rounded-md bg-emerald-900/10 px-4 py-3 text-xs sm:text-sm text-olivewood border border-emerald-800/15">
          <span className="font-bold">
            Showing <strong className="font-black">{activeCategory}</strong> catalog ({visibleProducts.length} items).
          </span>
          <a
            href={ecommerceCategoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-black text-emerald-800 hover:text-emerald-950 hover:underline"
          >
            <ShoppingBag size={14} /> Buy {activeCategory === 'All' ? 'Online' : activeCategory} in Store <ExternalLink size={12} />
          </a>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {visibleProducts.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
