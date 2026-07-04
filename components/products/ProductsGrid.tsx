import { products } from "@/data/products/index";
import { ProductCard } from "@/components/products/ProductCard";
import type { Locale } from "@/lib/i18n";

interface ProductsGridProps {
  locale: Locale;
}

export function ProductsGrid({ locale }: ProductsGridProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Products</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">Reliable solutions for every farm</h2>
        </div>
      </div>
      <div className="mt-10 grid gap-4 grid-cols-2 xl:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} locale={locale} autoFlip={index === 0} />
        ))}
      </div>
    </section>
  );
}

export default ProductsGrid;