"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/types/dictionary";

interface HeroStatsProps {
  dictionary?: Dictionary;
}

export function HeroStats({ dictionary }: HeroStatsProps) {
  const stats = dictionary?.hero.stats ?? [
    { label: "Trusted by farmers", value: "5000+" },
    { label: "Field success", value: "95%" },
  ];

  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2">
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="rounded-2xl border border-white/70 bg-white/70 p-4 shadow-sm backdrop-blur"
        >
          <p className="text-2xl font-semibold text-slate-900">{stat.value}</p>
          <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default HeroStats;