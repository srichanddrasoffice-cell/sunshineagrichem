const steps = [
  {
    title: "Rooted in Purpose",
    text: "Sunshine Inc. was founded to help India's farmers adapt to changing agricultural demands.",
  },
  {
    title: "Our Answer",
    text: "We developed environmentally responsible products backed by research and field validation.",
  },
  {
    title: "The Challenge",
    text: "Chemical overuse has degraded soil health and impacted sustainability across farming regions.",
  },
];

export default function OurStory() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold">Our Story</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="border rounded-3xl p-8"
            >
              <span className="text-6xl font-bold text-green-100">
                0{index + 1}
              </span>

              <h3 className="text-2xl font-bold mt-5">
                {step.title}
              </h3>

              <p className="text-gray-600 mt-4">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}