"use client";

import { Leaf, Sparkles, TrendingUp } from "lucide-react";
import type { Dictionary } from "@/types/dictionary";

interface HeroFeaturesProps {
  dictionary?: Dictionary;
}

export function HeroFeatures({ dictionary }: HeroFeaturesProps) {
  const fallbackLabels = [
    "Premium formulations",
    "Field-tested results",
    "Sustainable growth",
  ];

  const items = [
    { icon: Leaf, label: dictionary?.hero.features[0] ?? fallbackLabels[0] },
    { icon: Sparkles, label: dictionary?.hero.features[1] ?? fallbackLabels[1] },
    { icon: TrendingUp, label: dictionary?.hero.features[2] ?? fallbackLabels[2] },
  ];

  return (
    <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4">
      {items.map(({ icon: Icon, label }) => (
        <div key={label} className="rounded-2xl border border-white/70 bg-white/70 p-3 shadow-sm backdrop-blur sm:p-4">
          <Icon size={16} className="text-emerald-600 sm:size-[18px]" />
          <p className="mt-2 text-xs font-medium text-slate-800 sm:mt-3 sm:text-sm">{label}</p>
        </div>
      ))}
    </div>
  );
}

export default HeroFeatures;