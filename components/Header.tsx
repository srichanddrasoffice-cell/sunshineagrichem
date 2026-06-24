"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { id: "service-1", name: "Organic Fertilizers", href: "/Services" },
  { id: "service-2", name: "Crop Nutrition", href: "/Services" },
  { id: "service-3", name: "Soil Solutions", href: "/Services" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleActivity = () => {
      setShowHeader(true);
      clearTimeout(timeout);
      if (window.scrollY > window.innerHeight * 0.8) {
        timeout = setTimeout(() => {
          setShowHeader(false);
        }, 4000);
      }
    };

    handleActivity();
    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("scroll", handleActivity);
    window.addEventListener("touchstart", handleActivity);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("scroll", handleActivity);
      window.removeEventListener("touchstart", handleActivity);
    };
  }, []);

  return (
    <header className={`
      fixed top-0 left-0 w-full z-50
      transition-all duration-500
      ${showHeader
        ? "translate-y-0 opacity-100"
        : "-translate-y-full opacity-0"
      }
    `}>

      <div
        className="
    max-w-7xl
    mx-auto
    mt-3
    px-8
    py-2
    flex
    items-center
    justify-between
    bg-blue/10
    backdrop-blur-xl
    border
    border-white/20
    rounded-2xl
    min-h-[80px]
  "
      >

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/SunshineLogo.png"
            alt="Sunshine"
            width={180}
            height={80}
            className="w-full object-contain" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 font-medium text-black">

          <Link href="/">Home</Link>

          <Link href="/Aboutus">About Us</Link>

          {/* Products */}
          <div className="relative group">
            <button type="button" className="flex items-center gap-1">
              Products
              <ChevronDown size={16} />
            </button>

            <div className="absolute top-full left-0 mt-3 w-60 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

              <Link
                href="/Products/biofertilizers"
                className="block px-5 py-3 text-gray-700 hover:bg-gray-100"
              >
                Bio-Fertilizers
              </Link>

              <Link
                href="/Products/bioenzymes"
                className="block px-5 py-3 text-gray-700 hover:bg-gray-100"
              >
                Bio-Enzymes
              </Link>

              <Link
                href="/Products/pestcontrollers"
                className="block px-5 py-3 text-gray-700 hover:bg-gray-100"
              >
                Pest Controllers
              </Link>

            </div>
          </div>

          {/* Services */}
          <div className="relative group">
            <button type="button" className="flex items-center gap-1">
              Services
              <ChevronDown size={16} />
            </button>

            <div className="absolute top-full left-0 mt-3 w-60 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

              {services.map((service) => (
                <Link
                  key={service.id}
                  href={service.href}
                  className="block px-5 py-3 text-gray-700 hover:bg-gray-100"
                >
                  {service.name}
                </Link>
              ))}

            </div>
          </div>

          <Link href="/Gallery">Gallery</Link>

          <Link href="/Contactus">Contact Us</Link>
        </nav>

        {/* CTA */}
        <Link
          href="/Contactus"
          className="
            hidden lg:flex
            items-center
            bg-green-600
            hover:bg-green-700
            text-white
            px-6
            py-3
            rounded-full
            font-semibold
            transition
          "
        >
          Contact Us
        </Link>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => {
            setMenuOpen((prev) => {
              if (prev) {
                setProductOpen(false);
                setServiceOpen(false);
              }
              return !prev;
            });
          }}
          className="lg:hidden text-white"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-screen" : "max-h-0"
          }`}
      >
        <div className="px-6 py-4">

          <Link
            href="/"
            className="block py-3 border-b"
            onClick={() => {
              setMenuOpen(false);
              setProductOpen(false);
              setServiceOpen(false);
            }}
          >
            Home
          </Link>

          <Link
            href="/Aboutus"
            className="block py-3 border-b"
            onClick={() => {
              setMenuOpen(false);
              setProductOpen(false);
              setServiceOpen(false);
            }}
          >
            About Us
          </Link>

          {/* Products */}
          <button
            type="button"
            className="w-full py-3 border-b flex justify-between items-center"
            onClick={() => {
              setProductOpen((prev) => !prev);
              setServiceOpen(false);
            }}
          >
            Products
            <ChevronDown
              className={`transition ${productOpen ? "rotate-180" : ""}`}
            />
          </button>

          {productOpen && (
            <div className="bg-gray-50">

              <Link
                href="/Products/biofertilizers"
                className="block px-5 py-3"
                onClick={() => {
                  setMenuOpen(false);
                  setProductOpen(false);
                  setServiceOpen(false);
                }}
              >
                Bio-Fertilizers
              </Link>

              <Link
                href="/Products/bioenzymes"
                className="block px-5 py-3"
                onClick={() => {
                  setMenuOpen(false);
                  setProductOpen(false);
                  setServiceOpen(false);
                }}
              >
                Bio-Enzymes
              </Link>

              <Link
                href="/Products/pestcontrollers"
                className="block px-5 py-3"
                onClick={() => {
                  setMenuOpen(false);
                  setProductOpen(false);
                  setServiceOpen(false);
                }}
              >
                Pest Controllers
              </Link>

            </div>
          )}

          {/* Services */}
          <button
            type="button"
            className="w-full py-3 border-b flex justify-between items-center"
            onClick={() => {
              setServiceOpen((prev) => !prev);
              setProductOpen(false);
            }}
          >
            Services
            <ChevronDown
              className={`transition ${serviceOpen ? "rotate-180" : ""}`}
            />
          </button>

          {serviceOpen && (
            <div className="bg-gray-50">

              {services.map((service) => (
                <Link
                  key={service.id}
                  href={service.href}
                  className="block px-5 py-3"
                  onClick={() => {
                    setMenuOpen(false);
                    setProductOpen(false);
                    setServiceOpen(false);
                  }}
                >
                  {service.name}
                </Link>
              ))}

            </div>
          )}

          <Link
            href="/Gallery"
            className="block py-3 border-b"
            onClick={() => setMenuOpen(false)}
          >
            Gallery
          </Link>

          <Link
            href="/Contactus"
            className="block py-3"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>

          <Link
            href="/Contactus"
            className="mt-5 block text-center bg-green-600 text-white py-3 rounded-xl font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Get Quote
          </Link>

        </div>
      </div>
    </header>
  );
}