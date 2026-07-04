import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs/index";
import { defaultLocale, type Locale } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale?: string; slug?: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const resolvedLocale = (locale as Locale | undefined) ?? defaultLocale;
  const blog = blogs.find((item) => item.slug === slug);
  if (!blog) {
    return createPageMetadata({ locale: resolvedLocale, path: "/blogs", title: "Blog", description: "Blog details" });
  }
  const translation = blog.translations[resolvedLocale];
  return createPageMetadata({ locale: resolvedLocale, path: `/blogs/${slug}`, title: translation.title, description: translation.excerpt });
}

export default async function BlogDetailPage({ params }: { params: Promise<{ locale?: string; slug?: string }> }) {
  const { locale, slug } = await params;
  const resolvedLocale = (locale as Locale | undefined) ?? defaultLocale;
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  const translation = blog.translations[resolvedLocale];

  return (
    <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">{translation.category}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">{translation.title}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">{translation.content}</p>
      </div>
    </main>
  );
}
