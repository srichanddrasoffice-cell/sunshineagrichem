import type { Locale } from "@/lib/i18n";

export interface BlogTranslation {
  title: string;
  excerpt: string;
  content: string;
  category: string;
}

export interface Blog {
  id: string;
  slug: string;
  coverImage: string;
  publishedAt: string;
  translations: Record<Locale, BlogTranslation>;
  relatedSlugs: string[];
}
