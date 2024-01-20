import type { BeforeNavigate } from "@sveltejs/kit";
import { goto } from "$app/navigation";
import { getAllowedLocaleFromPathname } from "./i18n.utils";

export const handleInternalization = (navigation: BeforeNavigate) => {
  // if request is for a route that is multilingual...
  // and if user has a language preference for which we have a translation
  // redirect the to the route with that language
  if (navigation.to?.route.id?.includes("[[lang]]")) {
    // if the "to" url already contains the local as first url segment do nothing on the request
    const to_locale = getAllowedLocaleFromPathname(navigation.to?.url.pathname ?? '');
    if (to_locale) return;

    // otherwise preprend the same locale of the "from" url
    const from_locale = getAllowedLocaleFromPathname(navigation.from?.url.pathname ?? '');
    if (from_locale) {
      const newUrl = new URL(navigation.to.url);
      newUrl.pathname = `/${from_locale}${navigation.to.url.pathname}`;
      navigation.cancel();
      goto(newUrl);
    }
  }
};