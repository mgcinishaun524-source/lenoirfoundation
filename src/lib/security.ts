const ALLOWED_LINK_SCHEMES = new Set<string>([
  'https:',
  'http:',
  'mailto:',
  'tel:',
  '#',
]);

const ALLOWED_FORM_ENDPOINTS = /^https:\/\/formsubmit\.co\/ajax\/[a-f0-9]{32}$/i;

const EMAIL_HEADER_INJECTION = /[\r\n%0a%0d\b]/g;

export function isFormSubmitEndpoint(url: unknown): url is string {
  return typeof url === 'string' && ALLOWED_FORM_ENDPOINTS.test(url.trim());
}

export function getSafeFormSubmitEndpoint(): string {
  const configured = (import.meta.env.VITE_FORMSUBMIT_ENDPOINT as string | undefined) ?? '';
  if (!isFormSubmitEndpoint(configured)) {
    console.warn('[security] FormSubmit endpoint missing or invalid; submissions disabled.');
    return '';
  }
  return configured.trim();
}

export function safeHref(raw: unknown, defaultFallback = '#'): string {
  if (raw == null) return defaultFallback;
  const value = String(raw).trim();
  if (!value) return defaultFallback;
  if (value.startsWith('#') && /^#[A-Za-z0-9_-]*$/.test(value)) return value;
  try {
    const url = new URL(value, window.location.origin);
    if (!ALLOWED_LINK_SCHEMES.has(url.protocol)) return defaultFallback;
    if (url.protocol === 'mailto:' || url.protocol === 'tel:') {
      const clean = url.pathname + url.search + url.hash;
      if (EMAIL_HEADER_INJECTION.test(clean)) return defaultFallback;
    }
    return url.toString();
  } catch {
    return defaultFallback;
  }
}

export function safeMailto(rawEmail: unknown, defaultFallback = '#'): string {
  if (rawEmail == null) return defaultFallback;
  const email = String(rawEmail).trim();
  if (!email) return defaultFallback;
  if (EMAIL_HEADER_INJECTION.test(email)) return defaultFallback;
  const simpleEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!simpleEmailPattern.test(email)) return defaultFallback;
  return `mailto:${email}`;
}

export function sanitizeHeaderString(value: unknown, maxLength = 120): string {
  if (value == null) return '';
  return String(value).replace(EMAIL_HEADER_INJECTION, ' ').trim().slice(0, maxLength);
}

export function sanitizePlainText(value: unknown, maxLength = 2000): string {
  if (value == null) return '';
  return String(value).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').slice(0, maxLength);
}

export const siteContactEmail = (import.meta.env.VITE_SITE_CONTACT_EMAIL as string | undefined) ?? 'info@lenoirfoundation.com';
export const sitePrimaryDomain = (import.meta.env.VITE_SITE_PRIMARY_DOMAIN as string | undefined) ?? 'https://lenoirfoundation.com';
