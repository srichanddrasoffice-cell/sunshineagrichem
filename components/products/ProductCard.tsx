"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type MouseEvent } from "react";
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
      return { background: "linear-gradient(135deg, #dbeafe 0%, #f8fafc 100%)", accent: "#2563eb" };
    case "nutrition":
    default:
      return { background: "linear-gradient(135deg, #dcfce7 0%, #f8fafc 100%)", accent: "#16a34a" };
  }
}

function getLocalizedText(value: string[]) {
  return value.join(", ");
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
  const [isFlipped, setIsFlipped] = useState(autoFlip);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean | null>(null);

  useEffect(() => {
    if (autoFlip) {
      setIsFlipped(true);
    }

    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(hover: none)");
      const updateTouchDevice = () => setIsTouchDevice(mediaQuery.matches);

      updateTouchDevice();

      if (typeof mediaQuery.addEventListener === "function") {
        mediaQuery.addEventListener("change", updateTouchDevice);
        return () => mediaQuery.removeEventListener("change", updateTouchDevice);
      }

      mediaQuery.addListener(updateTouchDevice);
      return () => mediaQuery.removeListener(updateTouchDevice);
    }
  }, [autoFlip]);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (isTouchDevice !== false) {
      event.preventDefault();
      setIsFlipped((value) => !value);
      return;
    }
  };

  return (
    <Link href={`/${locale}/products/${product.slug}`} className="group block touch-manipulation [perspective:1100px]" aria-label={translation.name} aria-pressed={isFlipped} onClick={handleClick}>
      <article className="relative h-[220px] w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-visible:[transform:rotateY(180deg)] sm:h-[260px]" style={{ transform: isTouchDevice ? (isFlipped ? "rotateY(180deg)" : "rotateY(0deg)") : undefined }}>
        <div className="absolute inset-0 overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white shadow-sm [backface-visibility:hidden]">
          <div
            className="flex h-full flex-col items-center p-4"
            style={{ background: accent.background }}
          >
            {/* Product Image */}
            <div className="flex flex-1 items-center justify-center w-full">
              <Image
                src={imageSrc}
                alt={translation.name}
                width={180}
                height={180}
                priority
                className="
          max-h-[170px]
          w-auto
          object-contain
          drop-shadow-xl
          transition-transform
          duration-300
          group-hover:scale-105
        "
              />
            </div>

            {/* Product Details */}
            <div className="w-full pt-3">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-base font-bold text-slate-900">
                  {translation.name}
                </h3>

                <div className="rounded-full  px-3 py-1 text-xs font-medium text-slate-700 whitespace-nowrap">
                  {getPackaging(translation.specifications)}
                </div>
              </div>
            </div>
          </div>
          </div>

          <div className="absolute inset-0 overflow-hidden rounded-[1.25rem] bg-slate-900 p-3 text-white shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className="relative z-10 flex h-full flex-col">
              <h3 className="line-clamp-1 text-base font-extrabold leading-tight sm:text-lg">{translation.name}</h3>
              <p className="mt-2 text-xs leading-5 text-white/80 sm:text-sm">
                {translation.shortDescription}
              </p>

              <div className="mt-3 space-y-2 text-[11px] leading-4 text-white/90 sm:text-xs sm:leading-5">
                <section>
                  <h4 className="font-semibold text-white">Benefits</h4>
                  <p className="mt-1 line-clamp-3">{getLocalizedText(translation.benefits.slice(0, 3))}</p>
                </section>
                <section>
                  <h4 className="font-semibold text-white">Application</h4>
                  <p className="mt-1 line-clamp-2">{translation.description}</p>
                </section>
                <section>
                  <h4 className="font-semibold text-white">Dosage</h4>
                  <p className="mt-1 line-clamp-2">{translation.dosage}</p>
                </section>
              </div>

              <div className="mt-auto flex items-center justify-end border-t border-white/10 pt-2">
                <span className="rounded-full px-3 py-1 text-[11px] font-bold text-white" style={{ backgroundColor: accent.accent }}>
                  View
                </span>
              </div>
            </div>
          </div>
      </article>
    </Link>
  );
}

export default ProductCard;