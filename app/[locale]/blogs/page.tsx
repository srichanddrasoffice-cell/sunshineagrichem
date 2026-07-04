import { BlogCard } from "@/components/blogs/BlogCard";
import { blogs } from "@/data/blogs/index";
import { getDictionary } from "@/lib/getDictionary";
import { defaultLocale, type Locale } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale?: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = (locale as Locale | undefined) ?? defaultLocale;
  return createPageMetadata({
    locale: resolvedLocale,
    path: "/blogs",
    title: "Blogs | GreenGrow Agriculture",
    description: "Read agronomy and field insights from GreenGrow.",
  });
}

export default async function BlogsPage({ params }: { params: Promise<{ locale?: string }> }) {
  const { locale } = await params;
  const resolvedLocale = (locale as Locale | undefined) ?? defaultLocale;
  const dictionary = getDictionary(resolvedLocale);

  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">{dictionary.blogs.heading}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">{dictionary.blogs.subheading}</h1>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} locale={resolvedLocale} />
          ))}
        </div>
      </section>
    </main>
  );
}
