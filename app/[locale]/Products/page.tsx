import ProductsGrid from "@/components/ProductsGrid";
import { Locale } from "@/data/products";

interface ProductsPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export default async function ProductsPage({
  params,
}: ProductsPageProps) {
  const { locale } = await params;

  return <ProductsGrid locale={locale} />;
}

