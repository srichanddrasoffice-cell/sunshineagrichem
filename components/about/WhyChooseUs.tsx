const reasons = [
  "Eco-Friendly Solutions",
  "Research Driven",
  "Farmer Focused",
  "Sustainable Agriculture",
  "Higher Productivity",
  "Reliable Partnerships",
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-green-50">
      <div className="container mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Why Choose Sunshine Inc.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((item) => (
            <div
              key={item}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
            >
              <div className="w-14 h-14 rounded-full bg-green-100 mb-5" />
              <h3 className="text-xl font-bold mb-3">{item}</h3>
              <p className="text-gray-600">
                Delivering sustainable solutions that help farmers grow more
                while protecting the environment.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}