import { Section } from "@/components/common/Section";
import { getDictionary } from "@/lib/getDictionary";
import { defaultLocale, type Locale } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { HeroForm } from "@/components/hero/HeroForm";

export async function generateMetadata({ params }: { params: Promise<{ locale?: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = (locale as Locale | undefined) ?? defaultLocale;
  return createPageMetadata({
    locale: resolvedLocale,
    path: "/contact",
    title: "Contact GreenGrow Agriculture",
    description: "Get in touch for product support, dealer onboarding, or expert advice.",
  });
}

export default async function ContactPage({ params }: { params: Promise<{ locale?: string }> }) {
  const { locale } = await params;
  const resolvedLocale = (locale as Locale | undefined) ?? defaultLocale;
  const dictionary = getDictionary(resolvedLocale);

  return (
    <main>
      <Section title={dictionary.contact.heading} description={dictionary.contact.subheading}>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <HeroForm dictionary={dictionary} />
        </div>
      </Section>
    </main>
  );
}
