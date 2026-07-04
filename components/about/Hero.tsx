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

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl text-white">
          <span className="inline-block bg-green-600 px-3 py-1.5 rounded-full text-xs font-medium mb-4 sm:px-4 sm:py-2 sm:text-sm sm:mb-6">
            Since 2015
          </span>

          <h1 className="text-3xl font-bold leading-tight sm:text-5xl md:text-7xl">
            Growing India's Future,
            <span className="text-green-400 block">
              Naturally
            </span>
          </h1>

          <p className="mt-5 text-sm leading-6 text-gray-200 sm:mt-8 sm:text-lg md:text-xl md:leading-relaxed">
            Empowering farmers with innovative, eco-friendly agricultural
            solutions that improve productivity while preserving soil health.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
            <button className="rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold hover:bg-green-700 sm:px-8 sm:py-4">
              Explore Products
            </button>

            <button className="rounded-xl border border-white px-5 py-3 text-sm hover:bg-white hover:text-black transition sm:px-8 sm:py-4">
              Become a Dealer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}