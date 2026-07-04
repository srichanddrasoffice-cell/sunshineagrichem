import { notFound } from "next/navigation";
import { products } from "@/data/products/index";
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

  return (
    <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">{product.category}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">{translation.name}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">{translation.description}</p>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-semibold text-slate-900">{dictionary.products.benefits}</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {translation.benefits.map((item) => <li key={item}>• {item}</li>)}
            </ul>
          </div>
          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-semibold text-slate-900">{dictionary.products.dosage}</h2>
            <p className="mt-4 text-sm leading-8 text-slate-600">{translation.dosage}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
