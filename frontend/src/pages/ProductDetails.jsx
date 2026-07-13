import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, MessageCircle, ShieldCheck, Clock, Snowflake, Info, CheckCircle2 } from 'lucide-react';
import FoodImage from '../components/FoodImage.jsx';
import { products, company } from '../data/site.js';
import { slugify } from '../utils/seo.js';
import { getWhatsAppUrl } from '../utils/contact.js';

export default function ProductDetails() {
  const { productSlug } = useParams();

  const product = useMemo(() => {
    return products.find((p) => slugify(p.name) === productSlug);
  }, [productSlug]);

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-black">Product Not Found</h2>
        <p className="mt-4 text-bark">The product you are looking for does not exist or has been moved.</p>
        <Link to="/products" className="mt-6 inline-flex items-center gap-2 rounded-md bg-chilli px-6 py-3 font-black text-white hover:bg-chilli/90 transition">
          <ArrowLeft size={16} /> Back to Products
        </Link>
      </div>
    );
  }

  const enquiryUrl = getWhatsAppUrl(`Hello, I would like to enquire about ${product.name} (Category: ${product.category}). Please provide the price and supply details.`);
  const canonicalUrl = `https://tnmockmeat.com/products/${productSlug}`;

  // Breadcrumbs schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://tnmockmeat.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": "https://tnmockmeat.com/products"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.category,
        "item": `https://tnmockmeat.com/categories/${slugify(product.category)}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": product.name,
        "item": canonicalUrl
      }
    ]
  };

  // Product schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.image,
    "description": product.description,
    "category": product.category,
    "brand": {
      "@type": "Brand",
      "name": "Sakthi Frozen Foods Traders"
    },
    "offers": {
      "@type": "Offer",
      "url": canonicalUrl,
      "priceCurrency": "INR",
      "price": "0.00",
      "priceValidUntil": "2030-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
  };

  return (
    <>
      <Helmet>
        <title>{`${product.name} | Mock Meat & Frozen Food Supplier Coimbatore`}</title>
        <meta name="description" content={`Get premium ${product.name} from Sakthi Frozen Foods Traders, Coimbatore. High protein, plant-based, and frozen freshness for restaurants, caterers, and retail.`} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:type" content="product" />
        <meta property="og:title" content={`${product.name} | Sakthi Frozen Foods Traders`} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.image} />
        <meta property="og:url" content={canonicalUrl} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${product.name} | Sakthi Frozen Foods Traders`} />
        <meta name="twitter:description" content={product.description} />
        <meta name="twitter:image" content={product.image} />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      </Helmet>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Back Link & Breadcrumbs */}
        <nav className="mb-6 flex flex-wrap items-center gap-2 text-xs font-bold text-bark sm:text-sm">
          <Link to="/products" className="inline-flex items-center gap-1.5 hover:text-chilli transition">
            <ArrowLeft size={16} /> Products
          </Link>
          <span>/</span>
          <Link to={`/categories/${slugify(product.category)}`} className="hover:text-chilli transition">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-olivewood font-extrabold">{product.name}</span>
        </nav>

        {/* Product Details Section */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Product Image Panel */}
          <div className="overflow-hidden rounded-md bg-white p-2 shadow-soft ring-1 ring-olivewood/10 sm:p-4">
            <div className="aspect-square w-full overflow-hidden rounded-md">
              <FoodImage
                src={product.image}
                alt={product.name}
                category={product.category}
                className="h-full w-full object-cover"
                imgClassName="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Product Info Panel */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center gap-1 rounded-md bg-olive/[0.3] px-3 py-1 text-xs font-extrabold text-olivewood">
                <Snowflake size={12} className="text-chilli" /> {product.category}
              </span>
              <h1 className="mt-3 font-display text-3xl font-black leading-tight sm:text-4xl lg:text-5xl text-olivewood">
                {product.name}
              </h1>

              <div className="mt-4 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span key={tag} className="rounded-md border border-olivewood/10 bg-white/50 px-2.5 py-1 text-xs font-extrabold text-bark">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 border-t border-olivewood/10 pt-6">
                <h3 className="text-sm font-black uppercase tracking-[0.18em] text-sage">Product Description</h3>
                <p className="mt-2 leading-8 text-bark text-base sm:text-lg">
                  {product.description}
                </p>
              </div>

              {/* Standard Specifications Grid */}
              <div className="mt-8 grid gap-4 border-t border-olivewood/10 pt-6 sm:grid-cols-2">
                <div className="flex gap-3 rounded-md bg-white/40 p-4 shadow-insetLine">
                  <Snowflake className="shrink-0 text-chilli" size={20} />
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-sage">Storage Conditions</h4>
                    <p className="mt-1 text-sm font-bold text-olivewood">Frozen storage at -18°C or below</p>
                  </div>
                </div>
                
                <div className="flex gap-3 rounded-md bg-white/40 p-4 shadow-insetLine">
                  <Clock className="shrink-0 text-chilli" size={20} />
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-sage">Shelf Life</h4>
                    <p className="mt-1 text-sm font-bold text-olivewood">Up to 24 months from packing</p>
                  </div>
                </div>

                <div className="flex gap-3 rounded-md bg-white/40 p-4 shadow-insetLine">
                  <ShieldCheck className="shrink-0 text-chilli" size={20} />
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-sage">Quality Standards</h4>
                    <p className="mt-1 text-sm font-bold text-olivewood">100% Preservative & Additive Free</p>
                  </div>
                </div>

                <div className="flex gap-3 rounded-md bg-white/40 p-4 shadow-insetLine">
                  <Info className="shrink-0 text-chilli" size={20} />
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-sage">Food Safety</h4>
                    <p className="mt-1 text-sm font-bold text-olivewood">FSSAI Certified & MSME Registered</p>
                  </div>
                </div>
              </div>

              {/* Culinary highlights */}
              <div className="mt-6">
                <h4 className="text-xs font-black uppercase tracking-wider text-sage">Best Suited For</h4>
                <ul className="mt-2 grid gap-1 text-sm font-bold text-bark sm:grid-cols-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-chilli" /> HORECA Menus & Starters
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-chilli" /> Traditional Curries & Gravies
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-chilli" /> Party Plats & Catering Events
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-chilli" /> Home Kitchen Variety Meals
                  </li>
                </ul>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-8 border-t border-olivewood/10 pt-6">
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={enquiryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-chilli px-8 py-4 text-center text-base font-black text-white shadow-crisp hover:bg-chilli/95 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <MessageCircle size={20} /> Enquire on WhatsApp
                </a>
                <Link
                  to="/contact"
                  className="inline-flex flex-1 items-center justify-center rounded-md bg-white border border-olivewood/10 px-8 py-4 text-center text-base font-black text-olivewood hover:bg-white/80 transition-all duration-300"
                >
                  Request Bulk Quote
                </Link>
              </div>
              <p className="mt-3 text-center text-xs text-bark">
                * Note: We supply in bulk quantities all over Tamil Nadu, Kerala, and across India.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
