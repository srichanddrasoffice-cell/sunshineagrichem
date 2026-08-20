import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  locale: Locale;
  autoFlip?: boolean;
}

export function ProductCard({ product, locale }: ProductCardProps) {
  const translation = product.translations[locale];
  const imageSrc = product.images?.[0] ?? "/products/magic.jpg";
  const badges = translation.benefits.slice(0, 2);

  return (
    <Link href={`/${locale}/products/${product.slug}`} className="group block h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-[28px] border border-[#e6d7a6] bg-[linear-gradient(180deg,#ffffff_0%,#fffdf7_100%)] shadow-[0_18px_35px_rgba(13,106,61,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_42px_rgba(13,106,61,0.18)]">
        <div className="bg-[radial-gradient(circle_at_top,_rgba(255,245,200,0.9),_rgba(255,255,255,0.96),_rgba(234,247,238,0.92))] p-3">
          <div className="overflow-hidden rounded-[22px] border border-[#f1e4bb] bg-[#f7f3e8]">
            <div className="relative flex items-center justify-center bg-[linear-gradient(135deg,#fff7d6_0%,#ecf9ef_100%)] p-3">
              <Image
                src={imageSrc}
                alt={translation.name}
                width={640}
                height={640}
                priority
                className="aspect-square h-36 w-full max-w-[220px] object-contain transition-transform duration-500 group-hover:scale-105 sm:h-40"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-2 bg-white/60 p-3.5 sm:p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0d6a3d]">
            {product.category}
          </p>

          <h3 className="line-clamp-2 text-sm font-bold leading-snug text-[#0b2d1d] sm:text-base">
            {translation.name}
          </h3>

          <div className="flex flex-wrap gap-1.5">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full bg-[linear-gradient(135deg,#fef3c7_0%,#f4d35e_100%)] px-2 py-1 text-[10px] font-semibold text-[#123d2a]"
              >
                {badge}
              </span>
            ))}
          </div>

          <p className="line-clamp-2 text-[11px] leading-relaxed text-[#4c6257] sm:text-xs">
            {translation.shortDescription}
          </p>

          <p className="line-clamp-1 text-[10px] text-[#4c6257] sm:text-[11px]">
            <span className="font-semibold text-[#123d2a]">Crops:</span> {translation.crops}
          </p>

          <span className="mt-auto inline-flex items-center gap-1 pt-1 text-xs font-semibold text-[#0d6a3d]">
            View Details
            <ArrowRight className="size-3 text-[#d9a72d] transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </article>
    </Link>
  );
}

export default ProductCard;