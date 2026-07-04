import { Section } from "@/components/common/Section";
import { getDictionary } from "@/lib/getDictionary";
import { defaultLocale, type Locale } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale?: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = (locale as Locale | undefined) ?? defaultLocale;
  return createPageMetadata({
    locale: resolvedLocale,
    path: "/about",
    title: "About GreenGrow Agriculture",
    description: "Learn about our mission, vision, and agricultural expertise.",
  });
}

export default async function AboutPage({ params }: { params: Promise<{ locale?: string }> }) {
  const { locale } = await params;
  const resolvedLocale = (locale as Locale | undefined) ?? defaultLocale;
  const dictionary = getDictionary(resolvedLocale);

  return (
    <main>
      <Section title={dictionary.about.heading} description={dictionary.about.intro}>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-2xl font-semibold text-slate-900">{dictionary.about.missionTitle}</h3>
            <p className="mt-4 text-sm leading-8 text-slate-600">{dictionary.about.missionText}</p>
          </div>
          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-2xl font-semibold text-slate-900">{dictionary.about.visionTitle}</h3>
            <p className="mt-4 text-sm leading-8 text-slate-600">{dictionary.about.visionText}</p>
          </div>
        </div>
      </Section>
    </main>
  );
}
