import { redirect, type Handle } from "@sveltejs/kit";
import { defaultLocale, getLocaleFromRequest, pathnameHasLocale } from "./i18n.utils";


export const handleInternalization: Handle = ({ event, resolve }) => {

  console.log({ what: "hooks.server - handleInternalization" });

  // if request is for a route that is multilingual...
  // and if user has a language preference for which we have a translation
  // redirect the to the route with that language
  if (event.route.id?.includes("[[lang]]")) {

    // if the url already contains the "locale" as first url segment do nothing...
    if (pathnameHasLocale(event.url.pathname)) {
      console.log('pathnameHasLocale => true');
      return resolve(event);
    }
    console.log('pathnameHasLocale => false');


    // otherwise calculate "locale" based on :
    //    - which locale we want to support
    //    - and the preferrend language as expressed in the request
    const resolvedLocale = getLocaleFromRequest(event.request);
    console.log('resolvedLocale: ', resolvedLocale);
    if (!resolvedLocale) {
      return resolve(event);
    }

    if (resolvedLocale === defaultLocale) {
      console.log('resolvedLocale === defaultLocale => true , no need to prepend locale');
      return resolve(event);
    }

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    const newUrl = new URL(event.url);
    newUrl.pathname = `/${resolvedLocale}${newUrl.pathname}`;
    redirect(301, newUrl);

  }

  return resolve(event);

};