"use client";

import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  locale: Locale;
  autoFlip?: boolean;
}

function getAccent(category: string) {
  switch (category.toLowerCase()) {
    case "protection":
      return { background: "linear-gradient(135deg, #eff6ff 0%, #f8fafc 100%)", accent: "#2563eb" };
    case "nutrition":
    default:
      return { background: "linear-gradient(135deg, #eff6ff 0%, #f8fafc 100%)", accent: "#2563eb" };
  }
}

function getPackaging(specs?: Array<{ label: string; value: string }>) {
  if (!specs || specs.length === 0) return "";
  const found = specs.find((s) => /pack/i.test(s.label.toLowerCase()));
  if (found) return found.value;
  return specs[1]?.value ?? specs[0]?.value ?? "";
}

export function ProductCard({ product, locale, autoFlip = false }: ProductCardProps) {
  const translation = product.translations[locale];
  const accent = getAccent(product.category);
  const imageSrc = product.images?.[0] ?? "/products/magic.jpg";
  const packaging = getPackaging(translation.specifications);

  return (
    <Link href={`/${locale}/products/${product.slug}`} className="group block" aria-label={translation.name}>
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
        <div className="flex items-start justify-between gap-2 px-3 pt-3 sm:px-3.5">
          <h3 className="min-w-0 flex-1 text-[13px] font-semibold leading-4 text-slate-900 sm:text-[14px] sm:leading-5">
            {translation.name}
          </h3>
          {packaging ? (
            <span className="shrink-0 rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700" style={{ backgroundColor: `${accent.accent}14` }}>
              {packaging}
            </span>
          ) : null}
        </div>

        <div className="mt-2 flex flex-1 flex-col px-3 pb-3 sm:px-3.5 sm:pb-3.5">
          <div className="flex items-center justify-center rounded-xl border border-slate-100 p-2 sm:p-3" style={{ backgroundImage: accent.background }}>
            <Image
              src={imageSrc}
              alt={translation.name}
              width={180}
              height={180}
              priority
              className="h-20 w-auto max-w-full object-contain drop-shadow-sm transition-transform duration-200 group-hover:scale-105 sm:h-24"
            />
          </div>

          <p className="mt-2 line-clamp-4 text-[11px] leading-4 text-slate-600 sm:text-xs">
            {translation.shortDescription}
          </p>
        </div>
      </article>
    </Link>
  );
}

export default ProductCard;