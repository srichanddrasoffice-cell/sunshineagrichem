"use client";

import { motion } from "framer-motion";
import { ArrowRight, Droplets, ShieldCheck, Sprout } from "lucide-react";
import Link from "next/link";

import type { Dictionary } from "@/types/dictionary";
import { HeroFeatures } from "@/components/hero/HeroFeatures";
import { HeroForm } from "@/components/hero/HeroForm";

interface HeroProps {
  dictionary: Dictionary;
}

export function Hero({ dictionary }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-sunshine-cream px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/herbg.png')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-sunshine-cream via-sunshine-cream/90 to-transparent" />
      <div className="absolute inset-0 backdrop-blur-[1px]" />

      <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-sunshine-green/15 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-sunshine-orange/15 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center justify-items-center gap-8 sm:gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:justify-items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-center sm:text-left"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sunshine-green/20 bg-white/80 px-3 py-1.5 text-xs font-medium text-sunshine-greenDeep shadow-sm backdrop-blur sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
            <Sprout size={16} className="text-sunshine-green" />
            {dictionary.hero.eyebrow}
          </div>

          <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-sunshine-greenDeep sm:text-5xl lg:text-6xl">
            {dictionary.hero.title}
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-sunshine-text/80 sm:mt-6 sm:text-lg sm:leading-8">
            {dictionary.hero.description}
          </p>

         

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="rounded-[2rem] border border-sunshine-green/10 bg-white/80 p-4 shadow-[0_20px_60px_rgba(21,122,58,0.08)] backdrop-blur-sm sm:p-6">
            <div className="mb-4 flex items-center justify-center gap-2 rounded-full bg-sunshine-greenLight px-3 py-1.5 text-xs font-medium text-sunshine-greenDeep sm:mb-6 sm:gap-3 sm:px-4 sm:py-2 sm:text-sm">
              {dictionary.hero.formTitle}
            </div>

            <HeroForm dictionary={dictionary} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;