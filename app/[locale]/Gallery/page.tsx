"use client";

import Image from "next/image";
import { useState } from "react";

const categories = [
  "All",
  "Farm Visits",
  "Products",
  "Farmer Success",
  "Field Trials",
];

const galleryItems = [
  {
    image: "/gallery/gallery1.jpg",
    category: "Farm Visits",
    title: "Field Inspection",
  },
  {
    image: "/gallery/gallery2.jpg",
    category: "Products",
    title: "Organic Fertilizer",
  },
  {
    image: "/gallery/gallery3.jpg",
    category: "Farmer Success",
    title: "Happy Farmer",
  },
  {
    image: "/gallery/gallery4.jpg",
    category: "Field Trials",
    title: "Crop Performance",
  },
  {
    image: "/gallery/gallery5.jpg",
    category: "Farm Visits",
    title: "Dealer Meet",
  },
  {
    image: "/gallery/gallery6.jpg",
    category: "Products",
    title: "Foliar Spray",
  },
  {
    image: "/gallery/gallery7.jpg",
    category: "Farmer Success",
    title: "Healthy Harvest",
  },
  {
    image: "/gallery/gallery8.jpg",
    category: "Field Trials",
    title: "Demonstration Plot",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/gallery-banner.jpg"
          alt="Gallery"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 text-center px-6">
          <span className="uppercase tracking-[0.3em] text-green-400 font-semibold">
            Sunshine Inc
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-white mt-4">
            Our Gallery
          </h1>

          <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
            Explore our journey, farmer success stories,
            field demonstrations, product showcases, and
            sustainable agriculture initiatives.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() =>
                  setActiveCategory(category)
                }
                className={`px-6 py-3 rounded-full font-semibold transition ${
                  activeCategory === category
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-green-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* GALLERY GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {filteredImages.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl shadow-lg"
              >
                <div className="relative h-[300px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6">

                  <span className="text-green-400 text-sm uppercase tracking-widest">
                    {item.category}
                  </span>

                  <h3 className="text-white text-xl font-bold mt-2">
                    {item.title}
                  </h3>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-green-50">
        <div className="max-w-4xl mx-auto text-center px-6">

          <span className="uppercase tracking-[0.2em] text-green-600 font-semibold">
            Sunshine Inc
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
            Growing Together With Farmers
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Our success is built on strong partnerships with
            farmers, dealers, and agricultural communities
            across India.
          </p>

          <button className="mt-8 bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition">
            Contact Us
          </button>

        </div>
      </section>
    </main>
  );
}