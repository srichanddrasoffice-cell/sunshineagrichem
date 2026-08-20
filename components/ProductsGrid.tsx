import { ProductCard } from "@/components/products/ProductCard";
import { products } from "@/data/products/index";
import type { Locale } from "@/lib/i18n";

interface ProductsGridProps {
  locale: Locale;
}

export default function ProductsGrid({ locale }: ProductsGridProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-2 py-4 sm:px-6 sm:py-10 lg:px-8">
      <div className="mb-4 sm:mb-8">
        <h2 className="text-xl font-bold text-sunshine-greenDeep sm:text-3xl">
          {locale === "en"
            ? "Products"
            : locale === "te"
            ? "ఉత్పత్తులు"
            : "उत्पाद"}
        </h2>

        <p className="mt-1 text-xs text-sunshine-text/75 sm:mt-2 sm:text-base">
          {locale === "en"
            ? "Explore our agriculture nutrition and crop growth solutions."
            : locale === "te"
            ? "మా వ్యవసాయ పోషకాలు మరియు పంటల అభివృద్ధి ఉత్పత్తులను తెలుసుకోండి."
            : "हमारे कृषि पोषण और फसल वृद्धि उत्पादों का अन्वेषण करें।"}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} locale={locale} autoFlip={index === 0} />
        ))}
      </div>
    </section>
  );
}