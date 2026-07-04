import Link from "next/link";
import type { Blog } from "@/types/blog";
import type { Locale } from "@/lib/i18n";

interface BlogCardProps {
  blog: Blog;
  locale: Locale;
}

export function BlogCard({ blog, locale }: BlogCardProps) {
  const translation = blog.translations[locale];

  return (
    <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 h-40 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100" />
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">{translation.category}</p>
      <h3 className="mt-2 text-xl font-semibold text-slate-900">{translation.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{translation.excerpt}</p>
      <Link href={`/${locale}/blogs/${blog.slug}`} className="mt-6 inline-flex text-sm font-semibold text-amber-700">
        Read more →
      </Link>
    </article>
  );
}

export default BlogCard;