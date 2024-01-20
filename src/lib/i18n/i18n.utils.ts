import acceptLanguageParser from 'accept-language-parser';

export type AllowedLocale = 'en' | 'it';
export const allowedLocales: Array<AllowedLocale> = ['en', 'it'];
export const defaultLocale: AllowedLocale = 'en';

export function getAllowedLocaleFromPathname(pathname: URL['pathname']) {
  return allowedLocales.find(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
}

export function pathnameHasLocale(pathname: URL['pathname']) {
  return Boolean(getAllowedLocaleFromPathname(pathname));
}

export function getLocaleFromRequest(request: Request) {
  const headers = Object.fromEntries(request.headers.entries());
  if (headers['accept-language']) {
    const userPreferredLocales = acceptLanguageParser.parse(headers['accept-language']);
    const resolvedLocale = acceptLanguageParser.pick(allowedLocales, userPreferredLocales);
    if (resolvedLocale) return resolvedLocale;
  }
  return null;
}