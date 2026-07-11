import { company } from '../data/site.js';

export function getWhatsAppUrl(message = 'Hello Mock Meat, I want to know more about your products.') {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}
