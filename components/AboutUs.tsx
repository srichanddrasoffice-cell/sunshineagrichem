
"use client";

import { useState } from "react";

type TabId = "mission" | "vision" | "coreValue";

const TABS: { id: TabId; label: string }[] = [
  { id: "mission", label: "OUR MISSION" },
  { id: "vision", label: "OUR VISION" },
  { id: "coreValue", label: "OUR CORE VALUE" },
];

const TAB_CONTENT: Record<TabId, string[]> = {
  mission: [
    "Deliver advanced, safe, and effective agricultural inputs tailored for India's diverse farming needs.",
    "Promote farming practices that balance profitability with environmental care.",
    "Provide continuous technical support, training, and field guidance to farming communities.",
  ],
  vision: [
    "To become India's most trusted agricultural solutions partner by 2030.",
    "Enable every farmer to access world-class, eco-friendly farming technologies.",
    "Drive sustainable agriculture through innovation, education, and community.",
  ],
  coreValue: [
    "Integrity — transparent partnerships built on trust with farmers and dealers.",
    "Sustainability — eco-conscious solutions that protect soil and future yields.",
    "Excellence — rigorous quality standards in every product we deliver.",
  ],
};

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState<TabId>("mission");

  return (
    <section className="relative bg-gradient-to-b from-white to-green-50 py-20 lg:py-28 px-6 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* ================= LEFT SIDE IMAGES ================= */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-5">
            {/* Main Large Image */}
            <div className="col-span-2 overflow-hidden rounded-[32px] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1200&q=80"
                alt="Farmland"
                className="w-full h-[280px] sm:h-[380px] lg:h-[450px] object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Image 2 */}
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80"
                alt="Agriculture"
                className="w-full h-[180px] sm:h-[220px] object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Image 3 */}
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80"
                alt="Farmer"
                className="w-full h-[180px] sm:h-[220px] object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Floating Stats Card */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-3xl shadow-2xl px-8 py-5 border border-gray-100">
            <div className="flex items-center gap-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-[#2e7d4f]">10+</h3>
                <p className="text-sm text-gray-500">Years</p>
              </div>

              <div className="w-px h-12 bg-gray-200" />

              <div className="text-center">
                <h3 className="text-3xl font-bold text-[#2e7d4f]">5000+</h3>
                <p className="text-sm text-gray-500">Farmers</p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE CONTENT ================= */}
        <div className="flex flex-col justify-center">
          {/* Small Label */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#2e7d4f] font-semibold tracking-[0.2em] uppercase text-sm">
              About Us
            </span>
            <div className="h-[2px] w-16 bg-[#2e7d4f]" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-slate-900 leading-[1.1] mb-6">
            Empowering Farmers Through
            <span className="block text-[#2e7d4f]">
              Sustainable Agriculture
            </span>
          </h2>

          {/* Description */}
<p className="text-gray-600 text-lg leading-8 mb-8 max-w-xl">            Sunshine Inc. partners with farmers across India to deliver
            innovative agricultural solutions that improve productivity,
            enhance soil health, and promote sustainable farming practices.
            Through advanced research, eco-friendly products, and continuous
            farmer support, we are helping shape the future of agriculture.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap gap-3 mb-8">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${activeTab === tab.id
                    ? "bg-[#2e7d4f] text-white shadow-lg scale-105"
                    : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-100"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <ul
            key={activeTab}
            className="space-y-4 mb-10 transition-all duration-300"
          >
            {TAB_CONTENT[activeTab].map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-4 text-gray-700"
              >
                <div className="w-6 h-6 rounded-full bg-[#2e7d4f]/10 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-[#2e7d4f]" />
                </div>
                <span className="leading-7">{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#2e7d4f] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#256943] transition-all duration-300 shadow-lg">
              Learn More
            </button>

            <button className="border border-[#2e7d4f] text-[#2e7d4f] px-8 py-4 rounded-full font-semibold hover:bg-[#2e7d4f] hover:text-white transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
