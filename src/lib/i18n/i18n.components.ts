import { page } from "$app/stores";
import { derived } from "svelte/store";
import { defaultLocale, type AllowedLocale } from "./i18n.utils";

export const locale = derived(page, $page => ($page.params['lang'] ?? defaultLocale) as AllowedLocale);

export type Translations = Record<AllowedLocale, string>;

/**
 * Svelte Store that give a Translator function that "already knows" the current locale
 * 
 * @example
 * ```svelte
 * <script>
 * import { t } from 'path';
 * </script>
 * 
 * <h1>
 * {$t({
 *   en: "Hi {{{NAME}}}",
 *   it: "Ciao {{{NAME}}}"
 * },[
 *   ["{{{NAME}}}", "Bryan"]
 * ])}
 * </h1>
 * ```
 */
export const t = derived(locale, ($locale) => {

  return function (translations: Translations, variables: [key: string, value: string][] = []) {
    // get the translation for the curernt locale
    let result = translations[$locale];

    // replace placeholder with real value...
    variables.forEach(([key, value]) => {
      result = result.replaceAll(key, value);
    });

    return result;
  };

});
