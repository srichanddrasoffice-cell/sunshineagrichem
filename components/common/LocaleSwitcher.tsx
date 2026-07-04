"use client";

import { useParams, usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";

export function LocaleSwitcher() {
  const pathname = usePathname();
  const params = useParams<{ locale?: string }>();
  const currentLocale = (params?.locale as Locale | undefined) ?? "en";

  return (
    <select
      value={currentLocale}
      onChange={(event) => {
        const nextLocale = event.target.value as Locale;
        const nextPath = pathname.replace(`/${currentLocale}`, `/${nextLocale}`);
        window.location.href = nextPath || `/${nextLocale}`;
      }}
      className="rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-sm outline-none"
    >
      <option value="en">English</option>
      <option value="te">తెలుగు</option>
      <option value="hi">हिन्दी</option>
    </select>
  );
}

export default LocaleSwitcher;