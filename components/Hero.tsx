"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const slides = [
  {
    image: "/hero1.png",
    title: "Empowering Sustainable Agriculture",
    subtitle:
      "Premium Organic Fertilizers for Healthier Crops and Better Yields.",
    button1: "Explore Products",
    button2: "Contact Us",
  },
  {
    image: "/hero2.png",
    title: "Nourish Your Soil, Strengthen Your Future",
    subtitle:
      "Advanced Organic Crop Nutrition Solutions for Every Stage of Growth.",
    button1: "Crop Solutions",
    button2: "Learn More",
  },
  {
    image: "/hero3.png",
    title: "Trusted by Farmers Across India",
    subtitle:
      "Delivering quality products and sustainable farming solutions.",
    button1: "Become a Dealer",
    button2: "Get in Touch",
  },
  {
    image: "/hero4.png",
    title: "Innovative Solutions for Modern Agriculture",
    subtitle:
      "Science-Based Products for Maximum Productivity and Better Harvests.",
    button1: "View Products",
    button2: "Contact Us",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[95vh] min-h-[600px] overflow-hidden bg-black">
      {/* Images */}
      {slides.map((slide, index) => (
        <motion.div
          key={slide.image}
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
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover"
          />
        </motion.div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.div
            key={current}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block mb-4 text-green-400 uppercase tracking-[0.2em] font-semibold">
              Sunshine Agriculture
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {slides[current].title}
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
              {slides[current].subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-full font-semibold transition">
                {slides[current].button1}
              </button>

              <button className="border border-white text-white hover:bg-white hover:text-black px-7 py-3 rounded-full font-semibold transition">
                {slides[current].button2}
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full ${
              current === index
                ? "w-10 h-3 bg-green-500"
                : "w-3 h-3 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}