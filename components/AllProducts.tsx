"use client";

import Image from "next/image";
import { useState } from "react";
import { getDictionary } from "@/lib/getDictionary";
import { defaultLocale, type Locale } from "@/lib/i18n";

interface AllProductsProps {
  locale?: Locale;
}

export default function AllProducts({
  locale = defaultLocale,
}: AllProductsProps) {
  const dictionary = getDictionary(locale);
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="bg-white py-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

       

        {/* Image + Content */}
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">

          {/* Image */}
          <div className="order-1">
            <div className="overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-green-50 to-white p-2 shadow-lg">
              <Image
                src="/ProductsAll.png"
                alt="Sunshine Agrichem Product Range"
                width={1200}
                height={900}
                priority
                className="h-auto w-full rounded-xl object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-2">
             {/* Heading */}
        <div className="mx-auto mb-8 max-w-3xl text-center lg:mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-5xl">
            {dictionary.about.heroTitle}
          </h2>
        </div>

            <p
              className={`text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 ${
                showMore ? "" : "line-clamp-4 sm:line-clamp-none"
              }`}
            >
              {dictionary.about.heroParagraph1}
            </p>

            {/* Mobile Only Read More */}
            <button
              type="button"
              onClick={() => setShowMore(!showMore)}
              className="mt-3 inline-flex items-center text-sm font-semibold text-emerald-600 transition hover:text-emerald-700 sm:hidden"
            >
              {showMore ? "Read Less ↑" : "Read More →"}
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}