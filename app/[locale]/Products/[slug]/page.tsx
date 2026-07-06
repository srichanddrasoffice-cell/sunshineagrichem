import { notFound } from "next/navigation";
import { products } from "@/data/products/index";
import { ProductDetailClient } from "@/components/products/ProductDetailClient";
import { getDictionary } from "@/lib/getDictionary";
import { defaultLocale, type Locale } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale?: string; slug?: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const resolvedLocale = (locale as Locale | undefined) ?? defaultLocale;
  const product = products.find((item) => item.slug === slug);
  if (!product) {
    return createPageMetadata({ locale: resolvedLocale, path: "/products", title: "Product", description: "Product details" });
  }
  const translation = product.translations[resolvedLocale];
  return createPageMetadata({ locale: resolvedLocale, path: `/products/${slug}`, title: translation.name, description: translation.shortDescription });
}

export default async function ProductDetailPage({ params }: { params: Promise<{ locale?: string; slug?: string }> }) {
  const { locale, slug } = await params;
  const resolvedLocale = (locale as Locale | undefined) ?? defaultLocale;
  const dictionary = getDictionary(resolvedLocale);
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const translation = product.translations[resolvedLocale];
  const allProducts = products.filter((item) => item.id !== product.id);

  return (
    <ProductDetailClient
      product={product}
      locale={resolvedLocale}
      translation={translation}
      dictionary={dictionary}
      allProducts={allProducts}
    />
  );
}
