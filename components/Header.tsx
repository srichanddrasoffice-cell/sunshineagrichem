"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, Globe } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useMemo, useState } from "react";

const languages = [
  { code: "en", label: "English" },
  { code: "te", label: "తెలుగు" },
  { code: "hi", label: "हिन्दी" },
];

const navigation = [
  {
    name: {
      en: "Home",
      te: "హోమ్",
      hi: "होम",
    },
    href: "",
  },
  {
    name: {
      en: "Products",
      te: "ఉత్పత్తులు",
      hi: "उत्पाद",
    },
    href: "/Products",
  },
  {
    name: {
      en: "Blogs",
      te: "బ్లాగ్స్",
      hi: "ब्लॉग",
    },
    href: "/blogs",
  },
  {
    name: {
      en: "About",
      te: "మా గురించి",
      hi: "हमारे बारे में",
    },
    href: "/about",
  },
  {
    name: {
      en: "Contact",
      te: "సంప్రదించండి",
      hi: "संपर्क करें",
    },
    href: "/contact",
  },
];

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const [mobileMenu, setMobileMenu] = useState(false);

  const currentLocale = useMemo(() => {
    const locale = pathname.split("/")[1];

    return ["en", "te", "hi"].includes(locale)
      ? locale
      : "en";
  }, [pathname]);

  function changeLanguage(locale: string) {
    const segments = pathname.split("/");

    segments[1] = locale;

    router.push(segments.join("/"));
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-lg">

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">

        {/* Logo */}

        <Link
          href={`/${currentLocale}`}
          className="flex items-center"
        >
          <Image
            src="/SunshineLogo.png"
            alt="Sunshine Agrichem"
            width={180}
            height={90}
          />

          <div className="hidden sm:block">
            

            <p className="-mt-1 text-xs text-green-800">
              Agrichem
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-8 lg:flex">

          {navigation.map((item) => (
            <Link
              key={item.href}
              href={`/${currentLocale}${item.href}`}
              className="text-sm font-medium text-gray-700 transition hover:text-green-600"
            >
              {item.name[currentLocale as "en" | "te" | "hi"]}
            </Link>
          ))}

        </nav>

        {/* Right */}

        <div className="flex items-center gap-3">

          {/* Language */}

          <div className="hidden items-center gap-2 rounded-full border px-3 py-2 md:flex">

            <Globe
              size={16}
              className="text-green-600"
            />

            <select
              value={currentLocale}
              onChange={(e) =>
                changeLanguage(e.target.value)
              }
              className="bg-transparent text-sm outline-none"
            >
              {languages.map((language) => (
                <option
                  key={language.code}
                  value={language.code}
                >
                  {language.label}
                </option>
              ))}
            </select>

          </div>

          {/* CTA */}

          <Link
            href={`/${currentLocale}/contact`}
            className="hidden rounded-lg bg-green-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-green-700 lg:block"
          >
            Contact Us
          </Link>

          {/* Mobile */}

          <button
            onClick={() =>
              setMobileMenu(!mobileMenu)
            }
            className="lg:hidden"
          >
            {mobileMenu ? (
              <X size={26} />
            ) : (
              <Menu size={26} />
            )}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {mobileMenu && (

        <div className="border-t bg-white lg:hidden">

          <div className="space-y-2 p-4">

            {navigation.map((item) => (
              <Link
                key={item.href}
                href={`/${currentLocale}${item.href}`}
                onClick={() =>
                  setMobileMenu(false)
                }
                className="block rounded-lg p-3 transition hover:bg-green-50"
              >
                {item.name[currentLocale as "en" | "te" | "hi"]}
              </Link>
            ))}

            <div className="mt-4 flex items-center gap-2 rounded-lg border p-3">

              <Globe size={18} />

              <select
                value={currentLocale}
                onChange={(e) =>
                  changeLanguage(e.target.value)
                }
                className="w-full bg-transparent outline-none"
              >
                {languages.map((language) => (
                  <option
                    key={language.code}
                    value={language.code}
                  >
                    {language.label}
                  </option>
                ))}
              </select>

            </div>

            <Link
              href={`/${currentLocale}/contact`}
              className="mt-4 block rounded-lg bg-green-600 py-3 text-center font-semibold text-white"
            >
              Contact Us
            </Link>

          </div>

        </div>

      )}
    </header>
  );
}