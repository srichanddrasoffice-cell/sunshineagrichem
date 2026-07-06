import { products } from "@/data/products/index";
import { ProductCard } from "@/components/products/ProductCard";
import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n";

interface ProductsGridProps {
  locale: Locale;
}

export function ProductsGrid({ locale }: ProductsGridProps) {
  const dictionary = getDictionary(locale);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600 text-center">
            {dictionary.products.heading}
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl text-center">
            {dictionary.products.subheading}
          </h2>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} locale={locale} autoFlip={index === 0} />
        ))}
      </div>
    </section>
  );
}

export default ProductsGrid;