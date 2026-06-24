
import {
  Sprout,
  Users,
  TrendingUp,
  Award,
} from "lucide-react";

const stats = [
  {
    icon: Sprout,
    value: "1600M+",
    label: "Agricultural Products",
  },
  {
    icon: Users,
    value: "18000K+",
    label: "Farmer Touch Points",
  },
  {
    icon: TrendingUp,
    value: "12M+",
    label: "Annual Growth",
  },
  {
    icon: Award,
    value: "98%",
    label: "Satisfied Customers",
  },
];

export default function StatsSection() {
  return (
    <section className="relative py-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="hero1.png"
          alt="Agriculture"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="bg-[#09B24C] rounded-[50px] lg:rounded-[80px] shadow-2xl overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex flex-col lg:flex-row items-center justify-center gap-5 px-8 py-10 text-center lg:text-left border-white/10 lg:border-r last:border-r-0"
                >
                  <div className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <div>
                    <h3 className="text-3xl md:text-5xl font-bold text-white">
                      {item.value}
                    </h3>

                    <p className="text-white/90 mt-2 text-sm md:text-base">
                      {item.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

