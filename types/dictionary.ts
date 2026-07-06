import type { Locale } from "@/lib/i18n";

export interface HeroDictionary {
  eyebrow: string;
  title: string;
  description: string;
  stats: Array<{ value: string; label: string }>;
  features: string[];
  ctaPrimary: string;
  formTitle: string;
}

export interface NavbarDictionary {
  home: string;
  about: string;
  products: string;
  blogs: string;
  contact: string;
  knowledgeCenter: string;
  dealerRegistration: string;
  becomeDistributor: string;
  cta: string;
  productsLabel: string;
}

export interface FooterDictionary {
  company: string;
  quickLinks: string;
  products: string;
  social: string;
  newsletter: string;
  newsletterPlaceholder: string;
  newsletterButton: string;
  copyright: string;
}

export interface AboutDictionary {
  heading: string;
  intro: string;
  missionTitle: string;
  missionText: string;
  visionTitle: string;
  visionText: string;
  heroTitle: string;
  heroParagraph1: string;
  stats: Array<{ value: string; label: string }>;
  cards: Array<{ title: string; text: string }>;
}

export interface ProductsDictionary {
  heading: string;
  subheading: string;
  viewAll: string;
  details: string;
  benefits: string;
  dosage: string;
  specifications: string;
  faq: string;
  brochure: string;
  related: string;
}

export interface BlogsDictionary {
  heading: string;
  subheading: string;
  readMore: string;
  categories: string;
  recent: string;
  related: string;
}

export interface CommonDictionary {
  search: string;
  learnMore: string;
  contactUs: string;
  backHome: string;
  noResults: string;
}

export interface ContactDictionary {
  heading: string;
  subheading: string;
  name: string;
  phone: string;
  email: string;
  location: string;
  message: string;
  submit: string;
  successTitle: string;
  successDescription: string;
}

export interface SeoDictionary {
  homeTitle: string;
  homeDescription: string;
  aboutTitle: string;
  aboutDescription: string;
  productsTitle: string;
  productsDescription: string;
  blogsTitle: string;
  blogsDescription: string;
  contactTitle: string;
  contactDescription: string;
}

export interface Dictionary {
  hero: HeroDictionary;
  navbar: NavbarDictionary;
  footer: FooterDictionary;
  about: AboutDictionary;
  products: ProductsDictionary;
  blogs: BlogsDictionary;
  common: CommonDictionary;
  contact: ContactDictionary;
  seo: SeoDictionary;
}

export type DictionaryMap = Record<Locale, Dictionary>;
