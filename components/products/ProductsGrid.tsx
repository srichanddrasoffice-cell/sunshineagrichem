import { products } from "@/data/products/index";
import { ProductCard } from "@/components/products/ProductCard";
import type { Locale } from "@/lib/i18n";

interface ProductsGridProps {
  locale: Locale;
}

export const productGridClass =
  "grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-5";

export function ProductsGrid({ locale }: ProductsGridProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4">
      <div className={productGridClass}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} locale={locale} />
        ))}
      </div>
    </section>
  );
}

export default ProductsGrid;