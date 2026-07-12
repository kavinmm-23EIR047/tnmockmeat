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
  shortName: 'Sakthi Frozen Foods',
  proprietor: 'Sakthidhasan.T',
  proprietorTitle: 'Proprietor',
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
  product('Veg Tenggiri Fish (Vanjaram)', 'Mock Seafood', 'https://res.cloudinary.com/thk8htfr/image/upload/v1783830077/thenggiri_fish_qsc1ey.png', 'Plant-based fish-style option for pan fry, curry and coastal menus.', ['Plant based', 'Frozen', 'Curry ready']),
  product('Veg Fish', 'Mock Seafood', 'https://res.cloudinary.com/thk8htfr/image/upload/v1783830097/veg_fish_djwnon.png', 'Sliceable fish-style portions for gravies, fries and tasting menus.', ['Plant based', 'Chef friendly', 'Frozen']),
  product('Veg Fish Fillet', 'Mock Seafood', 'https://res.cloudinary.com/thk8htfr/image/upload/v1783830094/veg_fish_fillet_sexnng.png', 'Fish-style fillet prepared for frying, coating and menu service.', ['Plant based', 'Ready to fry', 'Frozen']),
  product('Veg Chicken', 'Mock Meat', 'https://res.cloudinary.com/thk8htfr/image/upload/v1783830073/veg_chicken_dvaegf.png', 'Chicken-style plant-based product for curries, starters and quick-service menus.', ['Plant based', 'Chef friendly', 'Frozen']),
  product('Veg Liver', 'Mock Meat', 'https://res.cloudinary.com/thk8htfr/image/upload/v1783830110/veg_liver_y2outn.png', 'Liver-style plant-based product for gravies, masala dishes and catering menus.', ['Plant based', 'Curry ready', 'Frozen']),
  product('Veg Mutton', 'Mock Meat', 'https://res.cloudinary.com/thk8htfr/image/upload/v1783830126/veg_mutton_jjevsa.png', 'Protein-rich mock mutton style product for traditional recipes.', ['Plant based', 'Rich texture', 'Frozen']),
  product('Veg Mutton Curry', 'Mock Meat', 'https://res.cloudinary.com/thk8htfr/image/upload/v1783830116/veg_mutton_curry_rueajw.png', 'Mutton-style pieces for curry, masala and traditional preparations.', ['Plant based', 'Curry ready', 'Frozen']),
  product('Veg Prawn', 'Mock Seafood', 'https://res.cloudinary.com/thk8htfr/image/upload/v1783830123/veg_prawn_urnlbz.png', 'Plant-based prawn-style pieces for fried starters and curries.', ['Plant based', 'Protein rich', 'Frozen']),
  product('Paneer Finger', 'Hand Made Starters', 'https://res.cloudinary.com/thk8htfr/image/upload/v1783830104/panner_cutlet_isx0ka.png', 'Breaded paneer finger snack for starters and party menus.', ['Hand made', 'Ready to fry', 'Starter']),
  product('Paneer Lollipop', 'Hand Made Starters', 'https://res.cloudinary.com/thk8htfr/image/upload/v1783830089/panner_lolipop_wr0owp.png', 'Crisp paneer lollipop starter for easy frying and snack service.', ['Hand made', 'Ready to fry', 'Starter']),
  product('Paneer Cutlet', 'Hand Made Starters', 'https://res.cloudinary.com/thk8htfr/image/upload/v1783830104/panner_cutlet_isx0ka.png', 'Crisp-coated paneer cutlet for catering, cafes and event counters.', ['Hand made', 'Ready to fry', 'Catering']),
  product('Sweet Corn Cutlet', 'Hand Made Starters', 'https://res.cloudinary.com/thk8htfr/image/upload/v1783830113/sweet_corn_cutlet_bbdp6a.png', 'Golden sweet corn cutlet with a soft vegetable filling.', ['Hand made', 'Snack range', 'Ready to fry']),
  product('Veg Cutlet Hand Made', 'Hand Made Starters', 'https://res.cloudinary.com/thk8htfr/image/upload/v1783830113/sweet_corn_cutlet_bbdp6a.png', 'Hand-made vegetable cutlet for snack counters and catering.', ['Hand made', 'Ready to fry', 'Catering']),
  product('Veg Lollipop Hand Made', 'Hand Made Starters', 'https://res.cloudinary.com/thk8htfr/image/upload/v1783830109/veg_lolipop_vbvxk9.png', 'Hand-made vegetable lollipop for snack service and party menus.', ['Hand made', 'Ready to fry', 'Starter']),
  product('Veg Balls', 'Veg Starters', 'https://res.cloudinary.com/thk8htfr/image/upload/v1783830090/veg_balls_oviifi.png', 'Vegetable snack balls for starters, buffets and fast-food menus.', ['Starter menu', 'Ready to fry', 'Frozen']),
  product('Corn Cheese Balls', 'Veg Starters', 'https://res.cloudinary.com/thk8htfr/image/upload/v1783830062/corn_cheese_balls_uj86wd.png', 'Corn and cheese style snack balls for frying, platters and party menus.', ['Starter menu', 'Ready to fry', 'Frozen']),
  product('Hara Bhara Kebab', 'Veg Starters', 'https://res.cloudinary.com/thk8htfr/image/upload/v1783830082/HarabharaKababs_h7qebv.png', 'Herb and vegetable kebabs for starters, platters and cafes.', ['Vegetarian', 'Starter menu', 'Frozen']),
  product('Green Peas', 'Frozen Foods', 'https://res.cloudinary.com/thk8htfr/image/upload/v1783830072/Greenpeas_h6r15u.png', 'Frozen green peas for curries, pulao, gravies and everyday cooking.', ['Frozen', 'Kitchen essential', 'Retail']),
  product('Sweet Corn', 'Frozen Foods', 'https://res.cloudinary.com/thk8htfr/image/upload/v1783830123/sweetcorn_sanpvp.png', 'Frozen sweet corn for snacks, soups, salads and quick dishes.', ['Frozen', 'Kitchen essential', 'Retail']),
  product('French Fries', 'Frozen Foods', 'https://res.cloudinary.com/thk8htfr/image/upload/v1783830069/Frenchfries_eoj1oy.png', 'Crisp frozen fries for cafes, restaurants and quick-service menus.', ['Ready to fry', 'Quick prep', 'Frozen']),
  product('Noodles Roll', 'Frozen Rolls', 'https://res.cloudinary.com/thk8htfr/image/upload/v1783830082/noodlesroll_gmztqg.png', 'Crisp noodles-filled rolls for starters, cafes and takeaway menus.', ['Snack range', 'Ready to fry', 'Frozen']),
  product('Veg Spring Roll', 'Frozen Rolls', 'https://res.cloudinary.com/thk8htfr/image/upload/v1783830124/veg_spring_roll_athpl7.png', 'Golden spring rolls with a savoury vegetable filling.', ['Snack range', 'Ready to fry', 'Catering']),
  product('Corn Samosa', 'Frozen Snacks', 'https://res.cloudinary.com/thk8htfr/image/upload/v1783830081/cornsamosa_oyqycd.png', 'Corn filled frozen samosa for snack counters and quick-service kitchens.', ['Snack range', 'Ready to fry', 'Frozen']),
  product('Onion Samosa', 'Frozen Snacks', 'https://res.cloudinary.com/thk8htfr/image/upload/v1783830125/onionsamosa_okioxt.png', 'Classic onion samosa for tea-time menus, stores and catering orders.', ['Snack range', 'Ready to fry', 'Frozen']),
  product('Veg Momos', 'Frozen Snacks', 'https://res.cloudinary.com/thk8htfr/image/upload/v1783830123/veg_momos_a5apzy.png', 'Soft steamed-style momos filled with seasoned vegetables.', ['Steam ready', 'Cafe menu', 'Frozen'])
];

export const services = [
  {
    title: 'Manufacturing',
    icon: Factory,
    image: 'https://res.cloudinary.com/thk8htfr/image/upload/v1783830126/veg_mutton_jjevsa.png',
    text: 'Mock meat and frozen food preparation with consistent texture, portioning and frozen handling.'
  },
  {
    title: 'Distribution',
    icon: Truck,
    image: 'https://res.cloudinary.com/thk8htfr/image/upload/v1783830124/veg_spring_roll_athpl7.png',
    text: 'Regular supply support for Tamil Nadu and Kerala retailers, kitchens, hotels and food-service buyers.'
  },
  {
    title: 'Retail & Bulk Packs',
    icon: Boxes,
    image: 'https://res.cloudinary.com/thk8htfr/image/upload/v1783830062/corn_cheese_balls_uj86wd.png',
    text: 'Flexible product formats for stores, counters, caterers and professional kitchens.'
  },
  {
    title: 'Chef & Menu Support',
    icon: ChefHat,
    image: 'https://res.cloudinary.com/thk8htfr/image/upload/v1783830073/veg_chicken_dvaegf.png',
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

export const legalLinks = [
  { label: 'Terms & Conditions', to: '/terms' },
  { label: 'Privacy Policy', to: '/privacy' }
];

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
