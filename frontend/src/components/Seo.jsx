import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const siteUrl = 'https://tnmockmeat.com';

const seoByPath = {
  '/': {
    title: 'tnmockmeat.com | Sakthi Frozen Foods Coimbatore',
    description:
      'Sakthi Frozen Foods supplies plant-based mock meat, veg seafood, frozen snacks and frozen foods from Coimbatore across Tamil Nadu and Kerala.'
  },
  '/about': {
    title: 'About Sakthi Frozen Foods | Mock Meat Supplier Coimbatore',
    description:
      'Learn about Sakthi Frozen Food Traders, a Coimbatore-based supplier of mock meat and frozen foods led by Sakthidhasan.T, Proprietor.'
  },
  '/products': {
    title: 'Mock Meat & Frozen Food Products | Tamil Nadu Kerala',
    description:
      'Browse veg chicken, veg fish, veg mutton, veg prawns, frozen snacks, rolls, cutlets and frozen food products for Tamil Nadu and Kerala.'
  },
  '/services': {
    title: 'Frozen Food Supply Services | Coimbatore Tamil Nadu Kerala',
    description:
      'Frozen food manufacturing, distribution, retail packs, bulk packs and menu support for restaurants, retailers and caterers.'
  },
  '/gallery': {
    title: 'Product Gallery | Sakthi Frozen Foods Coimbatore',
    description:
      'View mock meat, plant-based seafood, frozen snacks and frozen food products supplied by Sakthi Frozen Foods Coimbatore.'
  },
  '/contact': {
    title: 'Contact Sakthi Frozen Foods | tnmockmeat.com',
    description:
      'Contact Sakthi Frozen Foods in Coimbatore for mock meat, frozen snacks and frozen food supply enquiries across Tamil Nadu and Kerala.'
  },
  '/terms': {
    title: 'Terms and Conditions | tnmockmeat.com',
    description: 'Terms and conditions for using the Sakthi Frozen Foods website.'
  },
  '/privacy': {
    title: 'Privacy Policy | tnmockmeat.com',
    description: 'Privacy policy for Sakthi Frozen Foods website enquiries and contact information.'
  }
};

function setMeta(name, content, attribute = 'name') {
  let tag = document.querySelector(`meta[${attribute}="${name}"]`);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
}

function setCanonical(pathname) {
  let link = document.querySelector('link[rel="canonical"]');

  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }

  link.setAttribute('href', `${siteUrl}${pathname === '/' ? '/' : pathname}`);
}

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = seoByPath[pathname] || {
      title: 'Sakthi Frozen Foods | tnmockmeat.com',
      description: 'Sakthi Frozen Foods supplies mock meat and frozen food products from Coimbatore.'
    };

    document.title = seo.title;
    setMeta('description', seo.description);
    setMeta('og:title', seo.title, 'property');
    setMeta('og:description', seo.description, 'property');
    setMeta('og:url', `${siteUrl}${pathname === '/' ? '/' : pathname}`, 'property');
    setMeta('twitter:title', seo.title);
    setMeta('twitter:description', seo.description);
    setCanonical(pathname);
  }, [pathname]);

  return null;
}
