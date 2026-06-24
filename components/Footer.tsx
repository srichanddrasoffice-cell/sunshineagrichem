import Link from "next/link";
import {

  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-32">
      {/* ================= CTA SECTION ================= */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          className="relative overflow-hidden rounded-[40px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/footer-banner.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-slate-900/80" />

          <div className="relative px-8 py-10 lg:px-16 lg:py-14 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-green-500 font-semibold uppercase tracking-wider">
                  Get Free Contact For Services
                </span>
                <div className="h-[2px] w-14 bg-green-500" />
              </div>

              <h2 className="text-3xl lg:text-5xl font-bold text-white max-w-2xl">
                You Get Premium Sunshine Service From Us!
              </h2>
            </div>

            <form className="w-full lg:w-auto">
              <div className="flex flex-col sm:flex-row bg-green-500 rounded-full p-2 shadow-xl">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-transparent px-6 py-4 text-white placeholder:text-white/80 outline-none min-w-[280px]"
                />

                <button
                  type="submit"
                  className="bg-white text-slate-900 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition"
                >
                  GET YOUR SERVICES
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <div
        className="bg-[#021522] text-gray-300 pt-40 pb-0 -mt-16"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(0,255,100,0.04) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 pb-16">
            {/* About */}
            <div>
              <h3 className="text-white text-2xl font-semibold mb-3">
                About Us
              </h3>

              <div className="w-16 h-1 bg-green-500 mb-6" />

              <p className="leading-8 text-gray-400">
                At Sunshine Inc., we believe agriculture is the backbone
                of India&apos;s growth and our responsibility is to strengthen
                it through innovation, sustainability, and farmer-first
                solutions.
              </p>

              <div className="flex gap-4 mt-8">
                {[
                  FaFacebookF,
                  FaTwitter,
                  FaLinkedinIn,
                  FaInstagram,
                ].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-green-500 transition flex items-center justify-center"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-white text-2xl font-semibold mb-3">
                Our Products
              </h3>

              <div className="w-16 h-1 bg-green-500 mb-6" />

              <ul className="space-y-4">
                {[
                  "All Right",
                  "SunTop",
                  "Red Wing",
                  "WarS-Cart",
                  "Race",
                  "Sun Mite",
                  "Sun Cure",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="flex items-center gap-2 hover:text-green-500 transition"
                    >
                      <ArrowRight size={16} />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white text-2xl font-semibold mb-3">
                Quick Links
              </h3>

              <div className="w-16 h-1 bg-green-500 mb-6" />

              <ul className="space-y-4">
                {[
                  "Home",
                  "About Us",
                  "Products",
                  "Services",
                  "Contact Us",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="flex items-center gap-2 hover:text-green-500 transition"
                    >
                      <ArrowRight size={16} />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white text-2xl font-semibold mb-3">
                Contact Us
              </h3>

              <div className="w-16 h-1 bg-green-500 mb-6" />

              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin
                    size={20}
                    className="text-green-500 mt-1"
                  />
                  <p className="leading-7">
                    Plot No. 485, GPR Layout,
                    Bachupally, Hyderabad,
                    Telangana, India
                  </p>
                </div>

                <div className="flex gap-4">
                  <Phone
                    size={20}
                    className="text-green-500"
                  />
                  <p>
                    +91 7674086832
                    <br />
                    +91 7674086832
                  </p>
                </div>

                <div className="flex gap-4">
                  <Mail
                    size={20}
                    className="text-green-500"
                  />
                  <p>info@sunshine.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-green-500 py-5 text-center text-white">
          <p>
            © {new Date().getFullYear()} Sunshine. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

