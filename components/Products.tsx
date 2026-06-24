"use client";

import { products } from "@/data/products";

export default function ProductsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="w-14 h-[2px] bg-green-600" />
            <span className="text-green-600 uppercase tracking-[0.2em] font-semibold text-sm">
              Our Products
            </span>
            <div className="w-14 h-[2px] bg-green-600" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Best Products List
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <div className="relative p-5">
                <span
                  className={`absolute top-4 left-4 z-10 px-3 py-1 text-xs font-semibold rounded-full text-white ${
                    product.badge === "New"
                      ? "bg-blue-600"
                      : "bg-green-600"
                  }`}
                >
                  {product.badge}
                </span>

                <div className="bg-gradient-to-b  rounded-3xl overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="px-6 pb-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>

                <div className="flex justify-center items-center gap-2 mb-3">
                  <span className="text-green-600 font-bold text-lg">
                    {product.price}
                  </span>

                  {product.oldPrice && (
                    <span className="line-through text-gray-400">
                      {product.oldPrice}
                    </span>
                  )}
                </div>

                <div className="flex justify-center items-center gap-1 text-yellow-500 mb-5">
                  <span className="text-sm text-gray-500 mr-1">
                    (5.0 Review)
                  </span>

                  {"★★★★★".split("").map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>

                <button className="w-full py-3 rounded-full bg-green-600 text-white font-medium hover:bg-green-700 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-14">
          <button className="px-8 py-4 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}

