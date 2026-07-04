import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";

export function buildMetadata({
  title,
  description,
  locale,
  path,
}: {
  title: string;
  description: string;
  locale: Locale;
  path: string;
}): Metadata {
  const baseUrl = "https://greengrowagri.com";
  const url = `${baseUrl}/${locale}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}/en${path}`,
        te: `${baseUrl}/te${path}`,
        hi: `${baseUrl}/hi${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "GreenGrow Agriculture",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
