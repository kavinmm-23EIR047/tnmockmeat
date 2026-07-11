import { Link } from 'react-router-dom';
import FoodImage from '../components/FoodImage.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { services } from '../data/site.js';

export default function Services() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Services"
        title="Manufacturing and distribution support for frozen food buyers."
        text="The service pages explain what the company does: product preparation, frozen supply, bulk enquiries and menu-friendly product support."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((service) => {
          return (
            <article key={service.title} className="overflow-hidden rounded-md bg-white/[0.65] shadow-soft ring-1 ring-olivewood/[0.08]">
              <div className="h-56">
                <FoodImage
                  src={service.image}
                  alt={service.title}
                  category={service.title}
                  className="h-full w-full"
                  imgClassName="object-cover"
                />
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl font-black">{service.title}</h3>
                <p className="mt-4 leading-8 text-bark">{service.text}</p>
              </div>
            </article>
          );
        })}
      </div>
      <div className="mt-10 rounded-md bg-olivewood p-8 text-parchment shadow-soft">
        <h3 className="font-display text-3xl font-black">Need product supply for a store or kitchen?</h3>
        <p className="mt-3 max-w-3xl leading-8 text-parchment/[0.76]">
          Share your location, product requirement and business type. The team can respond with
          availability and supply details directly.
        </p>
        <Link to="/contact" className="mt-6 inline-flex rounded-md bg-chilli px-6 py-3 font-black text-white">
          Send enquiry
        </Link>
      </div>
    </section>
  );
}
