"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface HeroProps {
  hero: {
    badge: string;
    slides: {
      title: string;
      subtitle: string;
      button1: string;
      button2: string;
    }[];
  };
}

// Images stay here (they don't change with language)
const heroImages = [
  "/hero1.png",
  "/hero2.png",
  "/hero3.png",
  "/hero4.png",
];

export default function Hero({ hero }: HeroProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % hero.slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [hero.slides.length]);

  return (
    <section className="relative h-[95vh] min-h-[600px] overflow-hidden bg-black">

      {/* Background Images */}
      {heroImages.map((image, index) => (
        <motion.div
          key={image}
          className="absolute inset-0"
          initial={false}
          animate={{
            opacity: current === index ? 1 : 0,
            scale: current === index ? 1 : 1.08,
          }}
          transition={{
            opacity: { duration: 1.2 },
            scale: { duration: 6, ease: "linear" },
          }}
        >
          <Image
            src={image}
            alt={hero.slides[index].title}
            fill
            priority={index === 0}
            className="object-cover"
          />
        </motion.div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">

          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >

            {/* Badge */}
            <span className="mb-4 inline-block uppercase tracking-[0.2em] text-green-400 font-semibold">
              {hero.badge}
            </span>

            {/* Title */}
            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              {hero.slides[current].title}
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-200 md:text-xl">
              {hero.slides[current].subtitle}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <button className="rounded-full bg-green-600 px-7 py-3 font-semibold text-white transition hover:bg-green-700">
                {hero.slides[current].button1}
              </button>

              <button className="rounded-full border border-white px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-black">
                {hero.slides[current].button2}
              </button>

            </div>

          </motion.div>

        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">

        {hero.slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`rounded-full transition-all duration-300 ${
              current === index
                ? "h-3 w-10 bg-green-500"
                : "h-3 w-3 bg-white/50"
            }`}
          />
        ))}

      </div>

    </section>
  );
}