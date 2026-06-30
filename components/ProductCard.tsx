"use client";

import Image from "next/image";
import Link from "next/link";
import { Product, Locale } from "@/data/products";

interface ProductCardProps {
  product: Product;
  locale: Locale;
}

type OptionalProductDetails = {
  application?: Partial<Record<Locale, string>> | string;
  dosage?: Partial<Record<Locale, string>> | string;
};

function getLocalizedDetail(
  value: OptionalProductDetails["application"],
  locale: Locale
) {
  if (!value) return "";
  return typeof value === "string" ? value : value[locale] || value.en || "";
}

export default function ProductCard({ product, locale }: ProductCardProps) {
  const details = product as Product & OptionalProductDetails;
  const application = getLocalizedDetail(details.application, locale);
  const dosage = getLocalizedDetail(details.dosage, locale);

  return (
    <Link
      href={`/${locale}/products/${product.slug}`}
      className="group block [perspective:1100px]"
      aria-label={product.name[locale]}
    >
      <article className="relative h-[232px] w-full [transform-style:preserve-3d] [animation:product-card-flip_8s_ease-in-out_infinite] transition-transform duration-700 group-hover:[animation-play-state:paused] group-hover:[transform:rotateY(180deg)] group-focus-visible:[animation-play-state:paused] group-focus-visible:[transform:rotateY(180deg)] sm:h-[300px]">
        <div className="absolute inset-0 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm [backface-visibility:hidden]">
          <div className="relative h-full bg-gradient-to-br from-gray-50 to-gray-100 p-2.5">
            {product.featured && (
              <span
                className="absolute left-2 top-2 z-20 rounded-full px-2 py-0.5 text-[10px] font-bold text-white shadow-sm"
                style={{ backgroundColor: product.themeColor }}
              >
                Featured
              </span>
            )}

            <div className="absolute right-2 top-2 z-20 flex h-6 max-w-[58px] items-center justify-end">
              <Image
                src={product.companyLogo}
                alt={product.brand}
                width={58}
                height={20}
                className="max-h-5 w-auto object-contain"
              />
            </div>

            <div className="flex h-full items-center justify-center pt-5">
              <Image
                src={product.thumbnail}
                alt={product.name[locale]}
                width={160}
                height={160}
                className="max-h-[150px] w-auto object-contain drop-shadow-md transition duration-300 group-hover:scale-105 sm:max-h-[210px]"
                priority
              />
            </div>

            <div className="absolute inset-x-2 bottom-2">
              <p className="line-clamp-1 text-center text-xs font-bold text-gray-900 sm:text-sm">
                {product.name[locale]}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 overflow-hidden rounded-xl bg-[#303c40] p-3 text-white shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div
            className="absolute bottom-0 left-0 h-14 w-14 [clip-path:polygon(0_0,100%_100%,0_100%)]"
            style={{ backgroundColor: product.themeColor }}
          />

          <div className="relative z-10 flex h-full flex-col">
            <h3 className="line-clamp-1 text-base font-extrabold leading-tight sm:text-xl">
              {product.shortName[locale]}
            </h3>

            <div className="mt-2 space-y-2 text-[10px] leading-4 text-white/90 sm:text-xs sm:leading-5">
              <section className="flex gap-2">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/15 text-[10px]">
                  +
                </span>
                <div>
                  <h4 className="font-bold text-white">
                    {locale === "en"
                      ? "Benefits:"
                      : locale === "te"
                      ? "ప్రయోజనాలు:"
                      : "लाभ:"}
                  </h4>
                  <p className="line-clamp-4">
                    {product.benefits
                      .slice(0, 3)
                      .map((benefit) => benefit[locale])
                      .join(", ")}
                  </p>
                </div>
              </section>

              <section className="flex gap-2">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/15 text-[10px]">
                  /
                </span>
                <div>
                  <h4 className="font-bold text-white">
                    {locale === "en"
                      ? "Application:"
                      : locale === "te"
                      ? "వాడకం:"
                      : "उपयोग:"}
                  </h4>
                  <p className="line-clamp-2">
                    {application || product.shortDescription[locale]}
                  </p>
                </div>
              </section>

              <section className="flex gap-2">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/15 text-[10px]">
                  i
                </span>
                <div>
                  <h4 className="font-bold text-white">
                    {locale === "en"
                      ? "Dosage:"
                      : locale === "te"
                      ? "మోతాదు:"
                      : "खुराक:"}
                  </h4>
                  <p className="line-clamp-2">
                    {dosage ||
                      (locale === "en"
                        ? "See product details for recommended dosage."
                        : locale === "te"
                        ? "సిఫార్సు చేసిన మోతాదుకు ఉత్పత్తి వివరాలు చూడండి."
                        : "अनुशंसित खुराक के लिए उत्पाद विवरण देखें।")}
                  </p>
                </div>
              </section>
            </div>

            <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-2">
              <span className="line-clamp-1 text-[10px] text-white/70">
                {product.category}
              </span>
              <span
                className="rounded-full px-3 py-1 text-[11px] font-bold text-white"
                style={{ backgroundColor: product.themeColor }}
              >
                {locale === "en"
                  ? "View"
                  : locale === "te"
                  ? "చూడండి"
                  : "देखें"}
              </span>
            </div>
          </div>
        </div>
      </article>

      <style jsx global>{`
        @keyframes product-card-flip {
          0%,
          42% {
            transform: rotateY(0deg);
          }
          50%,
          92% {
            transform: rotateY(180deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }
      `}</style>
    </Link>
  );
}