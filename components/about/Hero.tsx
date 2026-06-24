import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <Image
        src="/about/hero-farmer.jpg"
        alt="Farmer"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-3xl text-white">
          <span className="inline-block bg-green-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Since 2015
          </span>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Growing India's Future,
            <span className="text-green-400 block">
              Naturally
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-200 leading-relaxed">
            Empowering farmers with innovative, eco-friendly agricultural
            solutions that improve productivity while preserving soil health.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <button className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl font-semibold">
              Explore Products
            </button>

            <button className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition">
              Become a Dealer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}