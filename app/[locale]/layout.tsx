import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import FloatingActions from "@/components/FloatingActions";
import { getDictionary } from "@/lib/getDictionary";
import { defaultLocale, type Locale } from "@/lib/i18n";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GreenGrow Agriculture",
  description: "Modern agricultural solutions for resilient farming.",
};

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "te" }, { locale: "hi" }];
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale?: string }> }) {
  const resolvedParams = await params;
  const locale = (resolvedParams.locale as Locale | undefined) ?? defaultLocale;
  const dictionary = getDictionary(locale);

  return (
    <html lang={locale} translate="no">
      <head>
        <meta name="google" content="notranslate" />
        <link rel="icon" href="/ProductsAll.png" type="image/png" />
        <link rel="shortcut icon" href="/ProductsAll.png" type="image/png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-sunshine-cream text-sunshine-text antialiased notranslate`}>
        <Navbar dictionary={dictionary} />
        {children}
        <FloatingActions brochureLabel={dictionary.products.brochure} />
        <Footer dictionary={dictionary} />
      </body>
    </html>
  );
}
