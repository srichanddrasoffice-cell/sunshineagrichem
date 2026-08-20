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
    <>
      <main className="mx-auto max-w-3xl px-3 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:py-12">
        <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-6 lg:p-8">
        {/* Top: image + info */}
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-8">
          <div className="lg:w-[38%]">
            <div className="overflow-hidden rounded-xl border border-slate-100 bg-linear-to-br from-emerald-50 via-white to-slate-50 p-3 sm:p-6">
              <Image
                src={imageSrc}
                alt={translation.name}
                width={480}
                height={480}
                priority
                className="mx-auto h-32 w-full max-w-50 object-contain sm:h-56 lg:h-64"
              />
            </div>
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-emerald-700">
                {product.category}
              </span>
              <Link href={`/${locale}`} className="text-xs font-medium text-slate-500 transition hover:text-emerald-600">
                ← Back
              </Link>
            </div>

            <h1 className="mt-2 text-xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              {translation.name}
            </h1>
            <p className="mt-1.5 text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
              {translation.description}
            </p>

            <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-5 sm:gap-3">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-2.5 sm:p-4">
                <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-500 sm:text-[11px]">
                  {dictionary.products.dosage}
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-700 sm:mt-2 sm:text-sm sm:leading-6">
                  {translation.dosage}
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-2.5 sm:p-4">
                <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-500 sm:text-[11px]">
                  {dictionary.products.brochure}
                </p>
                <a
                  href={product.brochure}
                  download="Sunshine-Agrichem-Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center rounded-full bg-[#d9a72d] px-2.5 py-1.5 text-xs font-semibold text-[#0f2f22] transition hover:bg-[#c7951f] sm:mt-2 sm:px-3 sm:py-2 sm:text-sm"
                >
                  {dictionary.products.brochure}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits + Specs */}
        <div className="mt-4 grid gap-3 sm:mt-6 sm:gap-4 lg:grid-cols-2">
          <section className="rounded-xl border border-slate-200 bg-slate-50 p-3 sm:p-5">
            <h2 className="text-sm font-semibold text-slate-900 sm:text-lg">{dictionary.products.benefits}</h2>
            <ul className="mt-2 space-y-1.5 text-xs text-slate-600 sm:mt-3 sm:space-y-2 sm:text-sm">
              {translation.benefits.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-500 sm:mt-2 sm:h-1.5 sm:w-1.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

         
        </div>

        {/* Composition + FAQ */}
        <section className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3 sm:mt-6 sm:p-5">
          <h2 className="text-sm font-semibold text-slate-900 sm:text-lg">{dictionary.products.specifications}</h2>
          <div className="mt-2 grid gap-2.5 sm:mt-3 sm:grid-cols-2 sm:gap-3">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-500 sm:text-[11px]">
                Composition
              </p>
              <ul className="mt-1.5 space-y-1.5 text-xs text-slate-600 sm:mt-2 sm:space-y-2 sm:text-sm">
                {translation.composition.map((item) => (
                  <li key={item} className="rounded-lg bg-white px-2.5 py-1.5 sm:px-3 sm:py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-500 sm:text-[11px]">
                {dictionary.products.faq}
              </p>
              <div className="mt-1.5 rounded-lg bg-white p-2.5 text-xs text-slate-600 sm:mt-2 sm:p-3 sm:text-sm">
                <p className="font-semibold text-slate-800">{translation.faqTitle}</p>
                <p className="mt-1.5 leading-5 sm:mt-2 sm:leading-6">{translation.faqDescription}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related products */}
        <section className="mt-5 sm:mt-8">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-base font-semibold text-slate-900 sm:text-xl">{dictionary.products.related}</h2>
            <Link href={`/${locale}`} className="text-xs font-medium text-emerald-600 transition hover:text-emerald-700 sm:text-sm">
              View all
            </Link>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-4 sm:gap-3 lg:grid-cols-4">
            {allProducts.map((item) => (
              <ProductCard key={item.id} product={item} locale={locale} />
            ))}
          </div>
        </section>
      </div>
    </main>
  </>
  );
}

export default ProductDetailClient;