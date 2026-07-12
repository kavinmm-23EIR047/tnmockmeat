import { useMemo, useState } from 'react';
import { CheckCircle2, Filter, Snowflake } from 'lucide-react';
import ProductCard from '../components/ProductCard.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { products, veganMeatHighlights } from '../data/site.js';

export default function Products() {
  const categories = useMemo(() => ['All', ...new Set(products.map((product) => product.category))], []);
  const [activeCategory, setActiveCategory] = useState('All');
  const visibleProducts =
    activeCategory === 'All'
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeader
            eyebrow="Products"
            title="Browse mock meat and frozen foods by category."
            text="Our vegan meat range is sustainable, plant-based and protein-rich, with Ready to Cook, Ready to Eat and Ready to Fry options."
          />
          <div className="scroll-reveal rounded-md bg-olivewood p-5 text-parchment shadow-crisp ring-1 ring-white/10 sm:p-6">
            <p className="font-display text-2xl font-black">Frozen supply for direct enquiries.</p>
            <p className="mt-2 text-sm leading-7 text-parchment/[0.72]">
              No preservatives. Shelf stable at -18°C for up to 24 months from the date of packing.
            </p>
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

        <div className="mt-10 flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`inline-flex shrink-0 items-center gap-2 rounded-md px-4 py-2 text-sm font-black shadow-insetLine outline-none transition focus-visible:ring-2 focus-visible:ring-chilli focus-visible:ring-offset-4 focus-visible:ring-offset-parchment ${
                activeCategory === category
                  ? 'bg-chilli text-white shadow-crisp'
                  : 'bg-white/[0.58] text-olivewood hover:bg-white'
              }`}
            >
              <Filter size={15} strokeWidth={2.8} />
              {category}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {visibleProducts.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
