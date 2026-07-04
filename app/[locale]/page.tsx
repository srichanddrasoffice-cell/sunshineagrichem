import { Hero } from "@/components/hero/Hero";
import { Section } from "@/components/common/Section";
import { ProductsGrid } from "@/components/products/ProductsGrid";
import { getDictionary } from "@/lib/getDictionary";
import { defaultLocale, type Locale } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { testimonials } from "@/data/testimonials";
import AllProducts from "@/components/AllProducts";

export async function generateMetadata({ params }: { params: Promise<{ locale?: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = (locale as Locale | undefined) ?? defaultLocale;
  return createPageMetadata({
    locale: resolvedLocale,
    path: "/",
    title: "GreenGrow Agriculture",
    description: "Modern agricultural solutions for resilient farming.",
  });
}

export default async function HomePage({ params }: { params: Promise<{ locale?: string }> }) {
  const { locale } = await params;
  const resolvedLocale = (locale as Locale | undefined) ?? defaultLocale;
  const dictionary = getDictionary(resolvedLocale);

  return (
    <main>
      <Hero dictionary={dictionary} />
      <AllProducts locale={resolvedLocale} />
      <ProductsGrid locale={resolvedLocale} />

      <Section title={dictionary.about.heading} description={dictionary.about.intro}>
        <div className="grid gap-6 lg:grid-cols-3">
          {dictionary.about.cards.map((card) => (
            <div key={card.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{card.text}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Client voices" description="Trusted by farmers and dealer partners across the region.">
        <div className="grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-lg leading-8 text-slate-700">“{testimonial.quote[resolvedLocale]}”</p>
              <div className="mt-4">
                <p className="font-semibold text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.role[resolvedLocale]}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
