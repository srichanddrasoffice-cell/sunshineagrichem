import type { Locale } from "@/lib/i18n";

export interface ProductTranslation {
  name: string;
  shortDescription: string;
  description: string;
  dosage: string;
  crops: string;
  benefits: string[];
  composition: string[];
  specifications: Array<{ label: string; value: string }>;
  faqTitle: string;
  faqDescription: string;
}

export interface Product {
  id: string;
  slug: string;
  category: string;
  images: string[];
  brochure: string;
  featured: boolean;
  translations: Record<Locale, ProductTranslation>;
}
