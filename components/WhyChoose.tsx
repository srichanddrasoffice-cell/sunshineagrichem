import { CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Higher Yields",
    text: "Balanced nutrition and healthier soils translate to stronger crops and better harvests.",
  },
  {
    title: "Healthier Soil",
    text: "Organic and bio-based inputs restore soil vitality and reduce chemical dependence.",
  },
  {
    title: "Safe & Compliant",
    text: "Residue-free crops meet increasing global consumer expectations.",
  },
  {
    title: "Proven Results",
    text: "Field-tested performance ensures consistent results across seasons and regions.",
  },
  {
    title: "Long-Term Savings",
    text: "Sustainable inputs protect soil health, reducing future input costs.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <div className="relative">
            {/* Green Corner Shape */}
            <div className="absolute -top-6 -left-6 w-16 h-16 border-[8px] border-green-500 z-0" />

            {/* Dotted Pattern */}
            <div className="absolute -top-10 right-0 grid grid-cols-12 gap-2 opacity-30">
              {Array.from({ length: 72 }).map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-1 rounded-full bg-green-500"
                />
              ))}
            </div>

            {/* Main Image */}
            <div className="relative rounded-lg overflow-hidden shadow-2xl z-10">
              <img
                src="/Untitled%20design.svg"
                alt="Sunshine Logo"
                className="w-full h-[350px] md:h-[500px] object-cover"
              />
            </div>

            {/* Experience Card */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-md px-10 py-8 z-20 min-w-[280px]">
              <h3 className="text-6xl font-bold text-gray-900 text-center">
                10+
              </h3>

              <p className="text-center text-gray-600 mt-2">
                Years Of Experience
              </p>

              {/* Decorative Stripes */}
              <div className="absolute bottom-0 right-0 flex">
                <div className="w-6 h-20 bg-blue-700 rotate-45 translate-x-6" />
                <div className="w-6 h-20 bg-cyan-500 rotate-45 translate-x-3" />
                <div className="w-6 h-20 bg-green-500 rotate-45" />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-4">
              <span className="text-green-600 font-semibold uppercase tracking-wider">
                Why Choose Us
              </span>
              <div className="h-[2px] w-16 bg-green-600" />
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-8">
              We Take Pride In Perfecting Your Success
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-8 mb-10">
              Farmers choose Sunshine Inc. because our solutions deliver
              measurable results. From improving crop productivity to restoring
              soil health, our products are designed to support sustainable and
              profitable farming practices.
            </p>

            {/* Benefits */}
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
              {benefits.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <CheckCircle
                    size={18}
                    className="text-green-600 mt-1 flex-shrink-0"
                  />

                  <p className="text-gray-700 leading-8">
                    <span className="font-bold text-slate-900">
                      {item.title}
                    </span>
                    : {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

