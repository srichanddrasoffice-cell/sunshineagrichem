import ProductCard from "@/components/ProductCard";
import { products, Locale } from "@/data/products";

interface ProductsGridProps {
  locale: Locale;
}

export default function ProductsGrid({ locale }: ProductsGridProps) {
  const activeProducts = products.filter((product) => product.active);

  return (
    <section className="mx-auto w-full max-w-7xl px-2 py-4 sm:px-6 sm:py-10 lg:px-8">
      <div className="mb-4 sm:mb-8">
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
          {locale === "en"
            ? "Products"
            : locale === "te"
            ? "ఉత్పత్తులు"
            : "उत्पाद"}
        </h2>

        <p className="mt-1 text-xs text-gray-600 sm:mt-2 sm:text-base">
          {locale === "en"
            ? "Explore our agriculture nutrition and crop growth solutions."
            : locale === "te"
            ? "మా వ్యవసాయ పోషకాలు మరియు పంటల అభివృద్ధి ఉత్పత్తులను తెలుసుకోండి."
            : "हमारे कृषि पोषण और फसल वृद्धि उत्पादों का अन्वेषण करें।"}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2.5 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {activeProducts.map((product) => (
          <ProductCard key={product.id} product={product} locale={locale} />
        ))}
      </div>
    </section>
  );
}