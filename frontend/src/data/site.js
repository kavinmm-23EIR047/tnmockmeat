import {
  BadgeCheck,
  Boxes,
  ChefHat,
  Factory,
  Leaf,
  PackageCheck,
  ShieldCheck,
  Snowflake,
  Store,
  Truck,
  Users
} from 'lucide-react';

export const company = {
  name: 'Sakthi Frozen Food Traders',
  shortName: 'Mock Meat Coimbatore',
  tagline: 'Plant-based mock meat and frozen foods for modern kitchens.',
  intro:
    'We supply delicious plant-based meat and frozen food products for caterers, hotels, restaurants, retailers and home-style kitchens.',
  whatsapp: '918056389214',
  phone: '+91 80563 89214',
  officePhone: '+91 90425 39214',
  email: 'Sakthifrozenfoods@gmail.com',
  instagram: 'mock_meat_coimbatore',
  location: '10, 11, Tank Road, Kavundampalayam, Coimbatore - 641030',
  mapsUrl: 'https://maps.app.goo.gl/eJ5ZgEPHa85XQLSL7?g_st=awb'
};

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' }
];

const product = (name, category, image, description, tags) => ({
  name,
  category,
  image,
  description,
  tags
});

export const products = [
  product('Veg Tenggiri Fish (Vanjaram)', 'Mock Seafood', '/images/mock-seafood-rolls.png', 'Plant-based fish-style option for pan fry, curry and coastal menus.', ['Plant based', 'Frozen', 'Curry ready']),
  product('Veg Fish', 'Mock Seafood', '/images/mock-fish-slices.png', 'Sliceable fish-style portions for gravies, fries and tasting menus.', ['Plant based', 'Chef friendly', 'Frozen']),
  product('Veg Mutton', 'Mock Meat', '/images/vegan-mutton.png', 'Protein-rich mock mutton style product for traditional recipes.', ['Plant based', 'Rich texture', 'Frozen']),
  product('Veg Mutton Curry', 'Mock Meat', '/images/vegan-mutton.png', 'Mutton-style pieces for curry, masala and traditional preparations.', ['Plant based', 'Curry ready', 'Frozen']),
  product('Veg Prawn', 'Mock Seafood', '/images/mock-fish-slices.png', 'Plant-based prawn-style pieces for fried starters and curries.', ['Plant based', 'Protein rich', 'Frozen']),
  product('Paneer Finger', 'Hand Made Starters', '/images/veg-fingers.png', 'Breaded paneer finger snack for starters and party menus.', ['Hand made', 'Ready to fry', 'Starter']),
  product('Paneer Lollipop', 'Hand Made Starters', '/images/frozen-vegetables.png', 'Crisp paneer lollipop starter for easy frying and snack service.', ['Hand made', 'Ready to fry', 'Starter']),
  product('Paneer Cutlet', 'Hand Made Starters', '/images/vegetable-cutlets.png', 'Crisp-coated paneer cutlet for catering, cafes and event counters.', ['Hand made', 'Ready to fry', 'Catering']),
  product('Sweet Corn Cutlet', 'Hand Made Starters', '/images/vegetable-cutlets.png', 'Golden sweet corn cutlet with a soft vegetable filling.', ['Hand made', 'Snack range', 'Ready to fry']),
  product('Veg Cutlet', 'Veg Starters', '/images/vegetable-cutlets.png', 'Crisp-coated vegetable cutlet for snacks, counters and cafes.', ['Snack range', 'Ready to cook', 'Catering']),
  product('Veg Cutlet Hand Made', 'Hand Made Starters', '/images/vegetable-cutlets.png', 'Hand-made vegetable cutlet for snack counters and catering.', ['Hand made', 'Ready to fry', 'Catering']),
  product('Veg Lollipop', 'Veg Starters', '/images/paneer-starters.png', 'Crisp vegetable lollipop snack for starters and events.', ['Ready to fry', 'Starter menu', 'Frozen']),
  product('Veg Lollipop Hand Made', 'Hand Made Starters', '/images/paneer-starters.png', 'Hand-made vegetable lollipop for snack service and party menus.', ['Hand made', 'Ready to fry', 'Starter']),
  product('Sabudana Vada', 'Veg Starters', '/images/paneer-starters.png', 'Crisp sabudana vada for tea-time menus and quick frying.', ['Snack range', 'Ready to fry', 'Frozen']),
  product('Veg Balls', 'Veg Starters', '/images/paneer-starters.png', 'Vegetable snack balls for starters, buffets and fast-food menus.', ['Starter menu', 'Ready to fry', 'Frozen']),
  product('Hara Bhara Kebab', 'Veg Starters', '/images/paneer-starters.png', 'Herb and vegetable kebabs for starters, platters and cafes.', ['Vegetarian', 'Starter menu', 'Frozen']),
  product('Green Peas', 'Frozen Foods', '/images/veg-starters.png', 'Frozen green peas for curries, pulao, gravies and everyday cooking.', ['Frozen', 'Kitchen essential', 'Retail']),
  product('Sweet Corn', 'Frozen Foods', '/images/veg-starters.png', 'Frozen sweet corn for snacks, soups, salads and quick dishes.', ['Frozen', 'Kitchen essential', 'Retail']),
  product('French Fries', 'Frozen Foods', '/images/veg-starters.png', 'Crisp frozen fries for cafes, restaurants and quick-service menus.', ['Ready to fry', 'Quick prep', 'Frozen']),
  product('Chocolate Roll', 'Frozen Rolls', '/images/frozen-snack-assortment.png', 'Sweet roll option for snack counters, dessert menus and tea-time service.', ['Snack range', 'Ready to fry', 'Frozen']),
  product('Noodles Roll', 'Frozen Rolls', '/images/frozen-snack-assortment.png', 'Crisp noodles-filled rolls for starters, cafes and takeaway menus.', ['Snack range', 'Ready to fry', 'Frozen']),
  product('Sweet Corn Roll', 'Frozen Rolls', '/images/frozen-snack-assortment.png', 'Sweet corn filled rolls for snack counters and events.', ['Snack range', 'Ready to fry', 'Frozen']),
  product('Paneer Roll', 'Frozen Rolls', '/images/frozen-snack-assortment.png', 'Paneer filled rolls with a crisp outer layer for starter menus.', ['Snack range', 'Ready to fry', 'Frozen']),
  product('Veg Spring Roll', 'Frozen Rolls', '/images/veg-spring-rolls.png', 'Golden spring rolls with a savoury vegetable filling.', ['Snack range', 'Ready to fry', 'Catering']),
  product('Paneer Samosa', 'Frozen Snacks', '/images/frozen-snack-assortment.png', 'Paneer filled frozen samosa for tea-time service and party menus.', ['Snack range', 'Ready to fry', 'Frozen']),
  product('Corn Samosa', 'Frozen Snacks', '/images/frozen-snack-assortment.png', 'Corn filled frozen samosa for snack counters and quick-service kitchens.', ['Snack range', 'Ready to fry', 'Frozen']),
  product('Onion Samosa', 'Frozen Snacks', '/images/frozen-samosa.png', 'Classic onion samosa for tea-time menus, stores and catering orders.', ['Snack range', 'Ready to fry', 'Frozen']),
  product('Veg Momos', 'Frozen Snacks', '/images/veg-momos.png', 'Soft steamed-style momos filled with seasoned vegetables.', ['Steam ready', 'Cafe menu', 'Frozen'])
];

export const services = [
  {
    title: 'Manufacturing',
    icon: Factory,
    image: '/images/mock-seafood-rolls.png',
    text: 'Mock meat and frozen food preparation with consistent texture, portioning and frozen handling.'
  },
  {
    title: 'Distribution',
    icon: Truck,
    image: '/images/frozen-samosa.png',
    text: 'Regular supply support for Tamil Nadu and Kerala retailers, kitchens, hotels and food-service buyers.'
  },
  {
    title: 'Retail & Bulk Packs',
    icon: Boxes,
    image: '/images/veg-spring-rolls.png',
    text: 'Flexible product formats for stores, counters, caterers and professional kitchens.'
  },
  {
    title: 'Chef & Menu Support',
    icon: ChefHat,
    image: '/images/vegan-mutton.png',
    text: 'Product suggestions for curries, fry items, starters, biryani-style recipes and snack menus.'
  }
];

export const strengths = [
  { title: 'Plant-based choices', icon: Leaf },
  { title: 'Frozen freshness', icon: Snowflake },
  { title: 'No preservatives', icon: BadgeCheck },
  { title: 'Reliable supply', icon: PackageCheck },
  { title: 'Quality focused', icon: ShieldCheck },
  { title: 'B2B ready', icon: Store }
];

export const audience = [
  { title: 'Restaurants & Cafes', icon: ChefHat },
  { title: 'Retail Stores', icon: Store },
  { title: 'Caterers', icon: Users },
  { title: 'Distributors', icon: Truck }
];

export const certifications = ['MSME Udyam Certified', 'FSSAI Certified'];

export const mockMeatInfo = [
  {
    title: 'What is mock meat?',
    text:
      'Mock meat, also known as plant-based meat, vegan meat, meat alternative or meat substitute, is made from vegan ingredients and designed to replace conventional meat.'
  },
  {
    title: 'Meat-like experience',
    text:
      'The goal is to replicate the taste, texture, appearance and mouthfeel of meat while keeping the product fully plant-based.'
  },
  {
    title: 'Plant protein base',
    text:
      'Many plant and mushroom-based substitutes are made using soy, textured vegetable protein and other plant proteins.'
  }
];

export const veganMeatHighlights = [
  '100% plant-based',
  'Protein-rich food product',
  'Ready to Cook, Ready to Eat and Ready to Fry options',
  'No preservatives',
  'Shelf stable at -18 C for up to 24 months from packing'
];
