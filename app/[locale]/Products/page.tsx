import { getDictionary } from "@/lib/getDictionary";
import { defaultLocale, type Locale } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { ProductsGrid } from "@/components/products/ProductsGrid";

export async function generateMetadata({ params }: { params: Promise<{ locale?: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = (locale as Locale | undefined) ?? defaultLocale;
  return createPageMetadata({
    locale: resolvedLocale,
    path: "/products",
    title: "Products | GreenGrow Agriculture",
    description: "Explore premium agricultural products and crop solutions.",
  });
}

export default async function ProductsPage({ params }: { params: Promise<{ locale?: string }> }) {
  const { locale } = await params;
  const resolvedLocale = (locale as Locale | undefined) ?? defaultLocale;
  const dictionary = getDictionary(resolvedLocale);

  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">{dictionary.products.heading}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">{dictionary.products.subheading}</h1>
        </div>
        <div className="mt-10">
          <ProductsGrid locale={resolvedLocale} />
        </div>
      </section>
    </main>
  );
}
