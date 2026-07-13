import { ArrowRight, CheckCircle2, MapPin, MessageCircle, Snowflake } from 'lucide-react';
import { Link } from 'react-router-dom';
import FoodImage from '../components/FoodImage.jsx';
import MobileSlider from '../components/MobileSlider.jsx';
import ProductCard from '../components/ProductCard.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import StatBand from '../components/StatBand.jsx';
import { audience, company, products, services, strengths } from '../data/site.js';
import { getWhatsAppUrl } from '../utils/contact.js';

const topSellingProductNames = ['Veg Mutton', 'Veg Fish', 'Veg Lollipop Hand Made', 'Corn Cheese Balls'];

export default function Home() {
  const topSellingProducts = topSellingProductNames
    .map((name) => products.find((product) => product.name === name))
    .filter(Boolean);
  const heroProducts = {
    first: products.find((product) => product.name === 'Veg Prawn'),
    second: products.find((product) => product.name === 'Veg Mutton'),
    third: products.find((product) => product.name === 'Veg Tenggiri Fish (Vanjaram)')
  };

  return (
    <>
      <section className="relative overflow-hidden px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="hero-panel relative overflow-hidden rounded-2xl bg-olivewood text-parchment shadow-crisp">
            <div className="absolute inset-0 opacity-25 pointer-events-none">
              <FoodImage
                src={products[2].image}
                alt={products[2].name}
                category={products[2].category}
                className="h-full w-full"
                imgClassName="object-cover"
                loading="eager"
              />
            </div>
            {/* Ambient visual glows for visual depth */}
            <div className="absolute -left-10 -top-10 h-72 w-72 rounded-full bg-turmeric/10 blur-[80px] pointer-events-none" />
            <div className="absolute -left-20 bottom-10 h-80 w-80 rounded-full bg-chilli/5 blur-[90px] pointer-events-none" />

            <div className="absolute inset-0 bg-gradient-to-b from-olivewood via-olivewood/[0.92] to-[#23291D]/85 lg:bg-gradient-to-r lg:from-olivewood lg:via-olivewood/[0.88] lg:to-olivewood/[0.3]" />
            
            <div className="relative grid min-h-[640px] items-end gap-10 px-5 pt-8 pb-16 sm:px-8 sm:py-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-12">
              
              {/* Left Column: Title & Intro */}
              <div className="animate-rise pb-2 lg:pb-6">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-[#B8C1A2] backdrop-blur">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-olive opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-olive"></span>
                  </span>
                  <span>Coimbatore frozen food supplier</span>
                </div>
                
                <p className="text-xs font-black uppercase tracking-[0.24em] text-turmeric/90 mb-2">Sakthi Frozen Foods Traders</p>
                
                <h1 className="brand-word font-display text-6xl font-black leading-[0.95] tracking-tight text-parchment sm:text-7xl lg:text-8xl">
                  Mock
                  <span className="block text-olive mt-1">Meat</span>
                </h1>
                
                <p className="mt-6 max-w-xl text-base leading-8 text-parchment/80 sm:text-lg">
                  We supply delicious <strong className="text-white font-extrabold">plant-based meat</strong> and <strong className="text-white font-extrabold">frozen food products</strong> for caterers, hotels, restaurants, retailers and home-style kitchens.
                </p>
                
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/products"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-parchment px-8 py-3.5 font-black text-olivewood shadow-soft transition-all duration-300 hover:scale-[1.02] hover:bg-white active:scale-100"
                  >
                    Explore range <ArrowRight size={18} />
                  </Link>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 font-black text-white backdrop-blur transition-all duration-300 hover:scale-[1.02] hover:bg-green-600/10 hover:border-green-500/40 active:scale-95"
                  >
                    <MessageCircle size={18} /> WhatsApp enquiry
                  </a>
                </div>
              </div>

              {/* Right Column: Original Image Grid Layout styled cleanly */}
              <div className="animate-rise delay-150">
                <div className="grid grid-cols-6 gap-3">
                  <div className="col-span-6 overflow-hidden rounded-md shadow-crisp border border-white/10 sm:col-span-4 sm:h-[390px]">
                    <FoodImage
                      src={heroProducts.first?.image}
                      alt={heroProducts.first?.name}
                      category={heroProducts.first?.category}
                      className="h-full min-h-72 w-full"
                      imgClassName="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="col-span-6 grid gap-3 sm:col-span-2">
                    {[heroProducts.second, heroProducts.third].filter(Boolean).map((product) => (
                      <div key={product.name} className="overflow-hidden rounded-md bg-[#fffaf0] p-2 shadow-crisp border border-olivewood/10 transition-all duration-300 hover:scale-[1.02]">
                        <FoodImage
                          src={product.image}
                          alt={product.name}
                          category={product.category}
                          className="h-40 w-full rounded-md"
                          imgClassName="object-cover"
                        />
                        <p className="px-2 pt-2 text-xs font-black uppercase tracking-[0.16em] text-olivewood">
                          {product.category}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex flex-col sm:flex-row flex-wrap gap-3 pr-6 sm:pr-0">
                  {['Plant-based', 'No preservatives', 'Direct enquiry'].map((item) => (
                    <div key={item} className="rounded-md border border-white/[0.12] bg-white/10 px-4 py-2.5 text-xs sm:text-sm font-black text-parchment text-center sm:text-left backdrop-blur-md">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-olivewood/10 bg-parchment/70 py-3">
        <div className="marquee-track flex w-max gap-4 text-sm font-black uppercase tracking-[0.2em] text-bark">
          {[...products, ...products].map((product, index) => (
            <span key={`${product.name}-${index}`} className="flex items-center gap-4">
              <Snowflake size={16} className="text-chilli" />
              {product.name}
            </span>
          ))}
        </div>
      </div>

      <StatBand />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What we do"
          title="Frozen products for kitchens that want variety, speed and vegetarian-friendly choices."
          text="The website explains the company, product categories, distribution areas and enquiry options. Customers can view products and contact the team, but they cannot add to cart or place online orders."
        />
        <MobileSlider desktopCols={4}>
          {services.map((service) => (
            <div key={service.title} className="group h-full overflow-hidden rounded-md bg-white/[0.58] shadow-soft ring-1 ring-olivewood/[0.08] transition hover:-translate-y-1 hover:bg-white">
              <div className="h-48 sm:h-40 overflow-hidden">
                <FoodImage
                  src={service.image}
                  alt={service.title}
                  category={service.title}
                  className="h-full w-full"
                  imgClassName="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-black">{service.title}</h3>
                <p className="mt-2 text-sm leading-7 text-bark">{service.text}</p>
              </div>
            </div>
          ))}
        </MobileSlider>
      </section>

      <section className="slant-panel bg-white/[0.42] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Top Selling Products"
              title="Veg Mutton, Veg Fish, Veg Lollipop and Corn Cheese Balls."
              text="These are the major products highlighted on the home page for quick enquiry and easy browsing."
            />
            <Link to="/products" className="inline-flex items-center gap-2 font-black text-chilli hover:text-olivewood">
              See all products <ArrowRight size={18} />
            </Link>
          </div>
          <MobileSlider desktopCols={4}>
            {topSellingProducts.map((product) => (
              <ProductCard key={product.name} product={product} compact />
            ))}
          </MobileSlider>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <SectionHeader
            eyebrow="Why choose us"
            title="Built for retailers, restaurants and distributors."
            text="Sakthi Frozen Foods Traders focuses on dependable product availability, frozen handling and useful choices for vegetarian and plant-based menus."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {strengths.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-center gap-3 rounded-md bg-white/[0.58] p-4 shadow-insetLine">
                  <Icon className="text-chilli" size={20} />
                  <span className="font-bold">{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="surface-noise rounded-md bg-olivewood p-6 text-white shadow-crisp">
          <h3 className="font-display text-3xl font-black">Who we serve</h3>
          <div className="mt-6 grid gap-4">
            {audience.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-center gap-4 rounded-md bg-white/[0.12] p-4">
                  <Icon size={24} />
                  <span className="font-bold">{item.title}</span>
                  <CheckCircle2 className="ml-auto text-olive" size={20} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
