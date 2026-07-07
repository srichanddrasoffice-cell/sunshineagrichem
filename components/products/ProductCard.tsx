"use client";

import { useEffect, useRef, useState, type KeyboardEvent, type MouseEvent, type TouchEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
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
  const router = useRouter();
  const translation = product.translations[locale];
  const accent = getAccent(product.category);
  const imageSrc = product.images?.[0] ?? "/products/magic.jpg";
  const packaging = getPackaging(translation.specifications);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(() => {
    if (typeof window === "undefined") return false;
    return !window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  });
  const suppressClickRef = useRef(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateDeviceType = () => {
      const canHover = mediaQuery.matches;
      setIsTouchDevice(!canHover);
    };

    updateDeviceType();
    mediaQuery.addEventListener("change", updateDeviceType);

    return () => mediaQuery.removeEventListener("change", updateDeviceType);
  }, []);

  useEffect(() => {
    if (!autoFlip || !cardRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const isTouchDeviceNow = !window.matchMedia("(hover: hover) and (pointer: fine)").matches;
          if (isTouchDeviceNow) {
            setIsFlipped(true);
          }
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, [autoFlip]);

  const handleNavigate = () => {
    router.push(`/${locale}/products/${product.slug}`);
  };

  const handleTouchEnd = (event: TouchEvent<HTMLElement>) => {
    // Check if the touch target is a button to avoid interfering with button clicks
    if ((event.target as HTMLElement).closest('button')) {
      return;
    }
    event.preventDefault();
    suppressClickRef.current = true;
    setIsFlipped((prev) => !prev);
  };

  const handleCardClick = (event?: MouseEvent<HTMLElement>) => {
    if (suppressClickRef.current) {
      suppressClickRef.current = false;
      return;
    }

    if (isTouchDevice) {
      event?.preventDefault();
      setIsFlipped((prev) => !prev);
      return;
    }

    handleNavigate();
  };

  const handleDetailsClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    handleNavigate();
  };

  const handleCardKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleCardClick();
    }
  };

  const faceStyle = {
    backfaceVisibility: "hidden" as const,
    WebkitBackfaceVisibility: "hidden" as const,
  };

  return (
    <div className="group [perspective:1000px]" ref={cardRef}>
      <article
        role="button"
        tabIndex={0}
        onClick={handleCardClick}
        onTouchEnd={handleTouchEnd}
        onKeyDown={handleCardKeyDown}
        className={`relative h-full min-h-[250px] w-full rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-500 [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : ""} group-hover:[transform:rotateY(180deg)]`}
        style={{ touchAction: "manipulation" }}
      >
        <div className="absolute inset-0 flex h-full flex-col overflow-hidden rounded-2xl bg-white" style={faceStyle}>
         

          <div className="mt-2 flex flex-1 flex-col px-3 pb-3 sm:px-3.5 sm:pb-3.5">
            <div className="flex items-center justify-center rounded-xl border border-slate-100 p-2 sm:p-3" style={{ backgroundImage: accent.background }}>
              <Image
                src={imageSrc}
                alt={translation.name}
                width={180}
                height={200}
                priority
                className="h-30 w-auto max-w-full object-contain drop-shadow-sm transition-transform duration-200 group-hover:scale-105 sm:h-24"
              />
            </div>

            <div className="mt-2 space-y-2">
             

              {translation.dosage ? (
                <div className="rounded-lg border border-emerald-100 bg-emerald-50 px-2.5 py-2">
                  <h3 className="min-w-0 flex-1 text-[13px] text-center font-semibold leading-4 text-emerald-700 sm:text-[14px] sm:leading-5">
              {translation.name}
            </h3>
             <div className="mt-1 text-[11px] leading-4 text-slate-700 sm:text-xs">
            <ul className="mt-2 space-y-1.5">
              {translation.specifications.slice(0, 3).map((specification) => (
                <li key={`${specification.label}-${specification.value}`} className="text-[11px] leading-4 text-slate-600">
                  <span className="font-semibold text-slate-800">{specification.label}:</span> {specification.value}
                </li>
              ))}
            </ul>
          </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="absolute inset-0 flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-3" style={{ ...faceStyle, transform: "rotateY(180deg)" }}>
          <div className="flex items-start justify-between gap-2">
            <div>
             
              <h3 className="mt-1 text-[13px] font-semibold leading-4 text-slate-900 sm:text-[14px] sm:leading-5">
                {translation.name}
              </h3>
            </div>
            {packaging ? (
              <span className="shrink-0 rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700" style={{ backgroundColor: `${accent.accent}14` }}>
                {packaging}
              </span>
            ) : null}
          </div>

           <p className="line-clamp-3 text-[11px] leading-4 text-slate-600 sm:text-xs">
                {translation.shortDescription}
              </p>

            <p className="mt-1 text-[11px] leading-4 text-slate-700">{translation.dosage}</p>


          <button
            type="button"
            onClick={handleDetailsClick}
            className="mt-auto inline-flex items-center justify-center rounded-xl bg-emerald-600 px-3 py-2 text-[11px] font-semibold text-white transition-colors duration-200 hover:bg-emerald-700"
          >
            More details
          </button>
        </div>
      </article>
    </div>
  );
}

export default ProductCard;