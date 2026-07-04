"use client";

import { motion } from "framer-motion";
import HeroStats from "./HeroStats";
import HeroFeatures from "./HeroFeatures";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function HeroContent() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{
        staggerChildren: 0.18,
      }}
      className="max-w-3xl"
    >
      {/* Badge */}

      <motion.div
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-100 px-5 py-2 text-sm font-semibold text-green-700"
      >
        🌱 Trusted by Farmers Across India
      </motion.div>

      {/* Heading */}

      <motion.h1
        variants={fadeUp}
        transition={{ duration: 0.7 }}
        className="mt-8 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl"
      >
        Premium Bio Stimulants &
        <span className="block text-green-600">
          Organic Fertilizers
        </span>
        for Sustainable Agriculture
      </motion.h1>

      {/* Subtitle */}

      <motion.p
        variants={fadeUp}
        transition={{ duration: 0.7 }}
        className="mt-8 max-w-2xl text-lg leading-8 text-gray-600"
      >
        Sunshine Agrichem develops premium bio stimulants,
        organic fertilizers, soil conditioners, plant growth
        promoters, micronutrients, and innovative crop nutrition
        products that improve soil fertility, strengthen plant
        health, enhance root development, increase nutrient uptake,
        and maximize crop productivity. Our eco-friendly
        agricultural solutions help farmers achieve healthier crops,
        sustainable farming, improved soil health, and higher
        yields while reducing dependency on excessive chemical
        fertilizers.
      </motion.p>

      {/* Feature Chips */}

      <motion.div
        variants={fadeUp}
        transition={{ duration: 0.7 }}
        className="mt-10"
      >
        <HeroFeatures />
      </motion.div>

      {/* Statistics */}

      <motion.div
        variants={fadeUp}
        transition={{ duration: 0.7 }}
        className="mt-12"
      >
        <HeroStats />
      </motion.div>
    </motion.div>
  );
}