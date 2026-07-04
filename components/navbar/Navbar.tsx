"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { Menu, X, Globe } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/types/dictionary";

interface NavbarProps {
  dictionary: Dictionary;
}

export function Navbar({ dictionary }: NavbarProps) {
  const pathname = usePathname();
  const params = useParams<{ locale?: string }>();
  const currentLocale = (params?.locale as Locale | undefined) ?? "en";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = useMemo(
    () => [
      { href: `/${currentLocale}`, label: dictionary.navbar.home },
      { href: `/${currentLocale}/about`, label: dictionary.navbar.about },
      { href: `/${currentLocale}/products`, label: dictionary.navbar.products },
      { href: `/${currentLocale}/blogs`, label: dictionary.navbar.blogs },
      { href: `/${currentLocale}/contact`, label: dictionary.navbar.contact },
    ],
    [currentLocale, dictionary],
  );

  return (
    <header className={`sticky top-0 z-50 border-b transition ${scrolled ? "border-white/70 bg-white/80 backdrop-blur-xl" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href={`/${currentLocale}`} className="text-xl font-semibold tracking-tight text-slate-900">
          GreenGrow
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={`text-sm font-medium ${pathname === item.href ? "text-emerald-700" : "text-slate-700 hover:text-emerald-700"}`}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-2 md:flex">
            <Globe size={16} className="text-emerald-600" />
            <select value={currentLocale} onChange={(event) => {
              const next = event.target.value as Locale;
              const nextPath = pathname.replace(`/${currentLocale}`, `/${next}`);
              window.location.href = nextPath || `/${next}`;
            }} className="bg-transparent text-sm outline-none">
              <option value="en">English</option>
              <option value="te">తెలుగు</option>
              <option value="hi">हिन्दी</option>
            </select>
          </div>
          <Link href={`/${currentLocale}/contact`} className="hidden rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 lg:inline-flex">
            {dictionary.navbar.cta}
          </Link>
          <button className="rounded-full border border-slate-200 bg-white/80 p-2 lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-slate-200 bg-white/95 px-6 py-4 lg:hidden">
          <div className="space-y-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="block text-sm font-medium text-slate-700" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
              <select value={currentLocale} onChange={(event) => {
                const next = event.target.value as Locale;
                const nextPath = pathname.replace(`/${currentLocale}`, `/${next}`);
                window.location.href = nextPath || `/${next}`;
              }} className="w-full bg-transparent text-sm outline-none">
                <option value="en">English</option>
                <option value="te">తెలుగు</option>
                <option value="hi">हिन्दी</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;