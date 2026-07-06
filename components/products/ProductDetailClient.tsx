"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ProductCard } from "@/components/products/ProductCard";
import type { Locale } from "@/lib/i18n";
import type { Product, ProductTranslation } from "@/types/product";

interface ProductDetailClientProps {
  product: Product;
  locale: Locale;
  translation: ProductTranslation;
  dictionary: {
    products: {
      benefits: string;
      dosage: string;
      specifications: string;
      faq: string;
      brochure: string;
      related: string;
    };
  };
  allProducts: Product[];
}

export function ProductDetailClient({ product, locale, translation, dictionary, allProducts }: ProductDetailClientProps) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handlePopState = () => {
      router.replace(`/${locale}`);
    };

    window.history.pushState({ fromProductPage: true }, "", window.location.href);
    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, [locale, router]);

  const imageSrc = product.images?.[0] ?? "/products/magic.jpg";

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
          <div className="lg:w-[38%]">
            <div className="overflow-hidden rounded-[1.25rem] border border-slate-100 bg-gradient-to-br from-emerald-50 via-white to-slate-50 p-4 sm:p-6">
              <Image
                src={imageSrc}
                alt={translation.name}
                width={480}
                height={480}
                priority
                className="mx-auto h-48 w-full max-w-[280px] object-contain sm:h-56 lg:h-64"
              />
            </div>
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
                {product.category}
              </span>
              <Link href={`/${locale}`} className="text-sm font-medium text-slate-500 transition hover:text-emerald-600">
                ← Back to home
              </Link>
            </div>

            <h1 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              {translation.name}
            </h1>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-[15px]">
              {translation.description}
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {dictionary.products.dosage}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{translation.dosage}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {dictionary.products.brochure}
                </p>
                <a
                  href={product.brochure}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center rounded-full bg-emerald-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  {dictionary.products.brochure}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <section className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4 sm:p-5">
            <h2 className="text-lg font-semibold text-slate-900">{dictionary.products.benefits}</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {translation.benefits.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4 sm:p-5">
            <h2 className="text-lg font-semibold text-slate-900">{dictionary.products.specifications}</h2>
            <div className="mt-3 space-y-3">
              {translation.specifications.map((spec) => (
                <div key={`${spec.label}-${spec.value}`} className="flex items-start justify-between gap-3 rounded-xl bg-white px-3 py-2 text-sm">
                  <span className="font-medium text-slate-500">{spec.label}</span>
                  <span className="text-right text-slate-700">{spec.value}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-6 rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4 sm:p-5">
          <h2 className="text-lg font-semibold text-slate-900">{dictionary.products.specifications}</h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">Composition</p>
              <ul className="mt-2 space-y-2 text-sm text-slate-600">
                {translation.composition.map((item) => (
                  <li key={item} className="rounded-lg bg-white px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">{dictionary.products.faq}</p>
              <div className="mt-2 rounded-xl bg-white p-3 text-sm text-slate-600">
                <p className="font-semibold text-slate-800">{translation.faqTitle}</p>
                <p className="mt-2 leading-6">{translation.faqDescription}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-semibold text-slate-900">{dictionary.products.related}</h2>
            <Link href={`/${locale}`} className="text-sm font-medium text-emerald-600 transition hover:text-emerald-700">
              View all
            </Link>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {allProducts.map((item) => (
              <ProductCard key={item.id} product={item} locale={locale} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default ProductDetailClient;
