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
    <section className="relative overflow-hidden px-4 py-12 sm:px-8 sm:py-24 lg:px-12">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover  bg-no-repeat"
        style={{
          backgroundImage: "url('/gpther.png')",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0lg:to-transparent" />

      {/* Optional blur overlay */}
      <div className="absolute inset-0 backdrop-blur-[1px]" />

      {/* Decorative Blur Circles */}
      <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-lime-200/20 blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto grid max-w-7xl items-center justify-items-center gap-8 sm:gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:justify-items-stretch">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-center sm:text-left"
        >
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-emerald-700 shadow-md backdrop-blur sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
            <Sprout size={16} />
            {dictionary.hero.eyebrow}
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {dictionary.hero.title}
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white sm:mt-6 sm:text-lg sm:leading-8">
            {dictionary.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
            <Link
              href="/en/products"
              className="mx-auto sm:mx-0 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition-all duration-300 hover:scale-105 hover:bg-emerald-700 sm:px-6 sm:py-3"
            >
              {dictionary.hero.ctaPrimary}
              <ArrowRight size={18} />
            </Link>


          </div>

          {/* Feature Chips */}

        </motion.div>

        {/* Right Form */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="p-4 sm:p-6">
            {/* Form Title */}
            <div className="mb-4 flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 sm:mb-6 sm:gap-3 sm:px-4 sm:py-2 sm:text-sm">
              <ShieldCheck size={16} />
              {dictionary.hero.formTitle}
            </div>

            {/* Contact Form */}
            <HeroForm dictionary={dictionary} />


          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;