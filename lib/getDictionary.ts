import { defaultLocale, type Locale } from "@/lib/i18n";
import { dictionaries } from "@/locales";

export function getDictionary(locale: Locale = defaultLocale) {
  return dictionaries[locale];
}
