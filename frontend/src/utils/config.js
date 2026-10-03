// Configuration for environment variables with safe fallbacks

export const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://tnmockmeat.com';
export const ECOMMERCE_URL = import.meta.env.VITE_ECOMMERCE_URL || 'https://buy.tnmockmeat.com';
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

/**
 * Build URL to ecommerce store
 * @param {string} path - path like '/shop' or '/product/123'
 * @param {Record<string, string>} params - optional query params
 */
export function getEcommerceUrl(path = '', params = {}) {
  const base = ECOMMERCE_URL.replace(/\/+$/, '');
  const cleanPath = path ? (path.startsWith('/') ? path : `/${path}`) : '';
  const url = new URL(`${base}${cleanPath}`);
  
  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      url.searchParams.set(key, value);
    }
  });

  return url.toString();
}

/**
 * Build URL for main website
 * @param {string} path - path like '/about' or '/contact'
 */
export function getMainSiteUrl(path = '') {
  const base = SITE_URL.replace(/\/+$/, '');
  const cleanPath = path ? (path.startsWith('/') ? path : `/${path}`) : '';
  return `${base}${cleanPath}`;
}
