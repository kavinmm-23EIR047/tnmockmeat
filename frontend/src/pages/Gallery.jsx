import SectionHeader from '../components/SectionHeader.jsx';
import FoodImage from '../components/FoodImage.jsx';
import { products } from '../data/site.js';

export default function Gallery() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Gallery"
        title="A visual look at the frozen range."
        text="Use this space to showcase client product photos, brand visuals and preparation ideas."
      />
      <div className="mt-10 grid auto-rows-[230px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product, index) => (
          <figure
            key={product.name}
            className={`group overflow-hidden rounded-md shadow-soft ${
              index === 0 || index === 5 ? 'lg:col-span-2 lg:row-span-2' : ''
            }`}
          >
            <FoodImage
              src={product.image}
              alt={product.name}
              category={product.category}
              className="h-full w-full"
              imgClassName="object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <figcaption className="-mt-16 bg-olivewood/[0.82] px-4 py-3 text-sm font-black text-parchment backdrop-blur">
              {product.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
