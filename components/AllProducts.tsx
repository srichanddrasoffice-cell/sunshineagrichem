import Image from "next/image";
import { getDictionary } from "@/lib/getDictionary";
import { defaultLocale, type Locale } from "@/lib/i18n";

interface AllProductsProps {
  locale?: Locale;
}

export default async function AllProducts({
  locale = defaultLocale,
}: AllProductsProps) {
  const dictionary = getDictionary(locale);

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            {dictionary.about.heroTitle}
          </h2>

          
        </div>

        {/* Image + Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-green-50 to-white p-3 shadow-xl">
              <Image
                src="/ProductsAll.png"
                alt="Sunshine Agrichem Product Range"
                width={1200}
                height={900}
                className="h-auto w-full rounded-2xl object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            

            <p className="mt-6 text-sm leading-7 text-slate-600 sm:text-lg sm:leading-8">
              {dictionary.about.heroParagraph1}
            </p>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-lg sm:leading-8">
              {dictionary.about.heroParagraph2}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}