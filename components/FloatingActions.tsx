"use client";

import { DownloadCloud, MessageCircle } from "lucide-react";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { products } from "@/data/products";

interface FloatingActionsProps {
  brochureLabel?: string;
}

export default function FloatingActions({
  brochureLabel,
}: FloatingActionsProps) {
  const pathname = usePathname();

  const brochureAction = useMemo(() => {
    if (!brochureLabel) return null;

    const match = pathname?.match(
      /^\/(?:en|te|hi)\/products\/([^/]+)\/?$/
    );

    if (match) {
      const product = products.find((item) => item.slug === match[1]);

      if (product) {
        return {
          href: product.brochure,
          label: brochureLabel,
        };
      }
    }

    if (products.length > 0) {
      return {
        href: products[0].brochure,
        label: brochureLabel,
      };
    }

    return null;
  }, [pathname, brochureLabel]);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">

      {/* Brochure */}
      {brochureAction && (
        <a
          href={brochureAction.href}
          download="Sunshine-Brochure.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            relative
            flex
            h-36
            w-14
            flex-col
            items-center
            justify-center
            rounded-2xl
            bg-[#d9a72d]
            text-[#0f2f22]
            shadow-[0_14px_28px_rgba(217,167,45,0.35)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-[#c7951f]
            hover:shadow-[0_20px_35px_rgba(217,167,45,0.4)]
          "
        >
          <DownloadCloud className="mb-2 h-5 w-5" />

          <span
            className="
              text-[11px]
              font-bold
              uppercase
              tracking-[0.25em]
              [writing-mode:vertical-rl]
              rotate-180
            "
          >
            {brochureAction.label}
          </span>

          {/* Tooltip */}
          <span
            className="
              pointer-events-none
              absolute
              right-16
              whitespace-nowrap
              rounded-lg
              bg-gray-900
              px-3
              py-2
              text-sm
              text-white
              opacity-0
              transition-all
              duration-300
              group-hover:opacity-100
            "
          >
            {brochureAction.label}
          </span>
        </a>
      )}

      {/* WhatsApp */}
      <a
        href="https://wa.me/919573499789"
        target="_blank"
        rel="noopener noreferrer"
        className="
          group
          relative
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-green-500
          text-white
          shadow-lg
          transition-all
          duration-300
          hover:scale-105
          hover:bg-green-600
          hover:shadow-2xl
        "
      >
        <MessageCircle className="h-6 w-6" />

        {/* Tooltip */}
        <span
          className="
            pointer-events-none
            absolute
            right-16
            whitespace-nowrap
            rounded-lg
            bg-gray-900
            px-3
            py-2
            text-sm
            text-white
            opacity-0
            transition-all
            duration-300
            group-hover:opacity-100
          "
        >
          WhatsApp
        </span>
      </a>
    </div>
  );
}