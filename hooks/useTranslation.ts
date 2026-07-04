"use client";

import { useParams } from "next/navigation";
import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n";

export function useTranslation() {
  const params = useParams<{ locale?: string }>();
  const locale = (params?.locale as Locale | undefined) ?? "en";
  return getDictionary(locale);
}
