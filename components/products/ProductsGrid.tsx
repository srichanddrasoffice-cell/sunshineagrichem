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
    <section className="mx-auto max-w-7xl px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4">
      <div className="flex items-end justify-between gap-4">
       
      </div>
      <div className="mt-2 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} locale={locale} autoFlip={index === 0} />
        ))}
      </div>
    </section>
  );
}

export default ProductsGrid;