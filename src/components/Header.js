"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Syne } from "next/font/google";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/Projects" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
  ];

  const services = [
    { name: "Creative Production", href: "/services/creative-production" },
    { name: "Branding & Design", href: "/services/branding-design" },
    { name: "Performance Marketing", href: "/services/performance-marketing" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "Conversion & Funnel", href: "/services/conversion-funnel" },
  ];

  return (
    <div className="w-full flex justify-center sticky top-0 z-50 pt-4 sm:pt-6 px-4">
      <div className="w-full max-w-7xl flex items-center justify-between px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[rgba(17,16,16,0.20)] border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.6)] relative">
        {/* Glass shine */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-30 pointer-events-none rounded-full" />

        {/* Logo */}
        <div className="relative z-10">
          <Image
            src="/logo.png"
            alt="logo"
            width={160}
            height={160}
            className="w-[120px] sm:w-[150px] md:w-[180px]"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 relative z-10">
          <div
            className={`flex items-center gap-8 text-md ${syne.className}`}
            style={{ color: "#cfcfcf" }}
          >
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.hasDropdown ? (
                  <div>
                    {pathname.startsWith("/services") ? (
                      <>
                        <button
                          onClick={() =>
                            setServicesDropdownOpen(!servicesDropdownOpen)
                          }
                          className={` transition flex items-center gap-1 ${
                            pathname.startsWith("/services")
                              ? "border-b-2 text-[#ED8301]"
                              : "hover:text-white"
                          }`}
                          style={
                            pathname.startsWith("/services")
                              ? { borderColor: "#ED8301" }
                              : {}
                          }
                        >
                          {link.name}
                          <FiChevronDown
                            className={`transition-transform ${
                              servicesDropdownOpen ? "rotate-180" : ""
                            }`}
                            size={14}
                          />
                        </button>

                        {servicesDropdownOpen && (
                          <div className="absolute top-full left-0 mt-2 w-64 bg-[#111010]/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-lg z-50">
                            {services.map((service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                onClick={() => setServicesDropdownOpen(false)}
                                className={`block px-4 py-3 text-sm transition ${
                                  pathname === service.href
                                    ? "text-[#ED8301] bg-white/5"
                                    : "text-gray-300 hover:text-white hover:bg-white/10"
                                }`}
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className={`pb-1 transition ${
                          pathname === link.href
                            ? "border-b-2 text-[#ED8301]"
                            : "hover:text-white"
                        }`}
                        style={
                          pathname === link.href
                            ? { borderColor: "#ED8301" }
                            : {}
                        }
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`pb-1 transition ${
                      pathname === link.href
                        ? "border-b-2 text-[#ED8301]"
                        : "hover:text-white"
                    }`}
                    style={
                      pathname === link.href ? { borderColor: "#ED8301" } : {}
                    }
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link href="/contact">
            <button
              className={`text-black font-semibold text-lg shadow-lg hover:scale-105 transition ${syne.className}`}
              style={{
                background: "linear-gradient(90deg, #FE9A00 0%, #E17100 100%)",
                borderRadius: "30px",
                padding: "6px 30px",
              }}
            >
              Let's Talk
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-white text-2xl relative z-10 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 w-[90%] max-w-7xl bg-[#111010]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:hidden">
          <div className={`flex flex-col gap-6 ${syne.className}`}>
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.hasDropdown ? (
                  <div>
                    {pathname.startsWith("/services") ? (
                      <>
                        <button
                          onClick={() =>
                            setServicesDropdownOpen(!servicesDropdownOpen)
                          }
                          className={`transition flex items-center justify-between w-full ${
                            pathname.startsWith("/services")
                              ? "text-[#ED8301]"
                              : "text-gray-300 hover:text-white"
                          }`}
                        >
                          {link.name}
                          <FiChevronDown
                            className={`transition-transform ${
                              servicesDropdownOpen ? "rotate-180" : ""
                            }`}
                            size={14}
                          />
                        </button>

                        {servicesDropdownOpen && (
                          <div className="mt-2 ml-4 space-y-2">
                            {services.map((service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                onClick={() => {
                                  setMenuOpen(false);
                                  setServicesDropdownOpen(false);
                                }}
                                className={`block py-2 text-sm transition ${
                                  pathname === service.href
                                    ? "text-[#ED8301]"
                                    : "text-gray-400 hover:text-white"
                                }`}
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={`transition ${
                          pathname === link.href
                            ? "text-[#ED8301]"
                            : "text-gray-300 hover:text-white"
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`transition ${
                      pathname === link.href
                        ? "text-[#ED8301]"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile CTA */}
            <Link href="/contact">
              <button
                className="text-black font-semibold mt-2"
                style={{
                  background:
                    "linear-gradient(90deg, #FE9A00 0%, #E17100 100%)",
                  borderRadius: "30px",
                  padding: "10px 25px",
                }}
              >
                Let's Talk
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
