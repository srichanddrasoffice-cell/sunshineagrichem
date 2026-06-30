import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import FloatingActions from "@/components/FloatingActions";
import Number from "@/components/Number";
import WhyChooseUs from "@/components/WhyChoose";
import ProductsGrid from "@/components/ProductsGrid";
import { translations } from "@/locales";

export default async function Home({
    params,
}: {
    params: Promise<{ locale: "en" | "te" | "hi" }>;
}) {
    const { locale } = await params;
    const t = translations[locale];

    return (
        <>
            <Hero hero={t.hero} />
            <AboutUs />
            <Number />
            <WhyChooseUs />
            <FloatingActions />
            <ProductsGrid locale={locale} />
        </>
    );
}
