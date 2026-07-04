export const locales = ["en", "te", "hi"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale = "en";

export function getLocaleFromPath(pathname: string): Locale {
  const [first] = pathname.split("/").filter(Boolean);
  if (first && locales.includes(first as Locale)) {
    return first as Locale;
  }
  return defaultLocale;
}
