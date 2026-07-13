import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { slugify } from '../utils/seo.js';

const siteUrl = 'https://tnmockmeat.com';

const seoByPath = {
  '/': {
    title: 'Sakthi Frozen Foods Traders | Mock Meat & Frozen Foods Supplier in Coimbatore',
    description: 'Sakthi Frozen Foods Traders is a leading Coimbatore supplier of plant-based mock meat, vegetarian meat, veg seafood, frozen snacks, and French fries. Serving restaurants, hotels, and retailers across India.'
  },
  '/about': {
    title: 'About Sakthi Frozen Foods Traders | Mock Meat Supplier Coimbatore',
    description: 'Learn about Sakthi Frozen Foods Traders, a premium supplier of plant-based meat and frozen foods in Coimbatore, India. Committed to clean, protein-rich, and preservative-free foods.'
  },
  '/products': {
    title: 'Mock Meat & Frozen Food Products List | Coimbatore All Over India',
    description: 'Browse our range of plant-based mock chicken, veg mutton, veg fish, veg prawns, frozen snacks, paneer starters, and French fries ready to cook.'
  },
  '/services': {
    title: 'Mock Meat Manufacturing & Frozen Food Supply Services | Coimbatore',
    description: 'B2B supply, private label manufacturing, regional distribution, bulk packaging, and customized menu support for hotels, caterers, and retail stores.'
  },
  '/gallery': {
    title: 'Product Gallery & Clean Storage Showcase | Sakthi Frozen Foods',
    description: 'Explore the high-quality product images of our veg meats, seafood, cutlets, kebabs, samosas, and frozen foods served by Sakthi Frozen Foods Traders.'
  },
  '/contact': {
    title: 'Contact Sakthi Frozen Foods Traders | Bulk Orders & Enquiries',
    description: 'Contact our Coimbatore office for wholesale pricing, sample requests, and distribution inquiries for mock meat and frozen foods.'
  },
  '/terms': {
    title: 'Terms & Conditions | Sakthi Frozen Foods Traders',
    description: 'Standard terms of service and business guidelines for Sakthi Frozen Foods Traders.'
  },
  '/privacy': {
    title: 'Privacy Policy | Sakthi Frozen Foods Traders',
    description: 'Privacy policy and data handling guidelines for Sakthi Frozen Foods Traders customers and enquiries.'
  }
};

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sakthi Frozen Foods Traders",
  "url": "https://tnmockmeat.com/",
  "logo": "https://tnmockmeat.com/images/logo.png",
  "email": "Sakthifrozenfoods@gmail.com",
  "telephone": "+91 80563 89214"
};

// Website Schema
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://tnmockmeat.com/",
  "name": "Sakthi Frozen Foods Traders"
};

// LocalBusiness Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://tnmockmeat.com",
  "name": "Sakthi Frozen Foods Traders",
  "alternateName": "Sakthi Frozen Foods",
  "url": "https://tnmockmeat.com/",
  "logo": "https://tnmockmeat.com/images/logo.png",
  "image": "https://tnmockmeat.com/og-image.jpg",
  "description": "Leading supplier of plant-based mock meat, veg seafood, frozen snacks, and frozen foods in Coimbatore serving customers across India.",
  "telephone": "+91 80563 89214",
  "email": "Sakthifrozenfoods@gmail.com",
  "priceRange": "₹₹",
  "founder": {
    "@type": "Person",
    "name": "Sakthidhasan.T",
    "jobTitle": "Proprietor"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "10, 11, Tank Road, Kavundampalayam",
    "addressLocality": "Coimbatore",
    "addressRegion": "Tamil Nadu",
    "postalCode": "641030",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "11.0168",
    "longitude": "76.9558"
  },
  "hasMap": "https://maps.app.goo.gl/eJ5ZgEPHa85XQLSL7?g_st=awb",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "21:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/mock_meat_coimbatore"
  ],
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Coimbatore" },
    { "@type": "AdministrativeArea", "name": "Tamil Nadu" },
    { "@type": "AdministrativeArea", "name": "Kerala" },
    { "@type": "AdministrativeArea", "name": "India" }
  ]
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is mock meat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mock meat, also known as plant-based meat, vegan meat, or meat substitute, is made from high-quality vegan ingredients (like soy, textured vegetable protein, and gluten) and designed to replicate the taste, texture, and cooking experience of conventional meat."
      }
    },
    {
      "@type": "Question",
      "name": "Is mock meat healthy and protein-rich?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, plant-based mock meat is a high-protein option that is low in saturated fat, cholesterol-free, and contains no preservatives or artificial chemical additives."
      }
    },
    {
      "@type": "Question",
      "name": "What is the shelf life of frozen mock meat products?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our products are shelf-stable for up to 24 months from the packing date when stored at -18°C or below."
      }
    }
  ]
};

export default function Seo() {
  const { pathname } = useLocation();

  // Dynamic values for category routing or standard paths
  const seoData = useMemo(() => {
    if (pathname.startsWith('/categories/')) {
      const slug = pathname.replace('/categories/', '');
      const rawName = slug
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      return {
        title: `${rawName} | Plant-Based Frozen Food Products Coimbatore`,
        description: `Buy wholesale and bulk ${rawName} products from Sakthi Frozen Foods Traders, Coimbatore. High-protein, clean ingredients, perfect for catering and retail.`,
        isDynamicCategory: true,
        categoryName: rawName
      };
    }

    // Skip product details page in this component since ProductDetails.jsx handles its own SEO/metadata.
    if (pathname.startsWith('/products/')) {
      return null;
    }

    return seoByPath[pathname] || {
      title: 'Sakthi Frozen Foods Traders | Mock Meat & Frozen Foods Coimbatore',
      description: 'Sakthi Frozen Foods Traders Coimbatore is a wholesale supplier of plant-based mock meat, veg seafood, and frozen snacks all over India.'
    };
  }, [pathname]);

  // Generate breadcrumb list schema dynamically
  const breadcrumbSchema = useMemo(() => {
    if (pathname === '/' || !seoData) return null;

    const parts = pathname.split('/').filter(Boolean);
    const itemListElement = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      }
    ];

    parts.forEach((part, index) => {
      const route = `/${parts.slice(0, index + 1).join('/')}`;
      let name = seoData.isDynamicCategory && part === parts[parts.length - 1] 
        ? seoData.categoryName 
        : part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, ' ');

      itemListElement.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": name,
        "item": `${siteUrl}${route}`
      });
    });

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": itemListElement
    };
  }, [pathname, seoData]);

  if (!seoData) return null;

  const currentCanonical = `${siteUrl}${pathname === '/' ? '' : pathname}`;

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      <link rel="canonical" href={currentCanonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Sakthi Frozen Foods Traders" />
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:url" content={currentCanonical} />
      <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoData.title} />
      <meta name="twitter:description" content={seoData.description} />
      <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />

      {/* Structured Data Scripts */}
      {pathname === '/' && (
        <>
          <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
          <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
          <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        </>
      )}

      {pathname === '/contact' && (
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      )}

      {pathname === '/about' && (
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      )}

      {breadcrumbSchema && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}
    </Helmet>
  );
}
