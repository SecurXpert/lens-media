"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Syne } from "next/font/google";
import { FiMenu, FiX } from "react-icons/fi";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
  ];

  return (
    <div className="w-full flex justify-center sticky top-0 z-50 pt-4 sm:pt-6 px-4">
      <div className="w-full max-w-7xl flex items-center justify-between px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[rgba(17,16,16,0.20)] border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.6)] relative overflow-hidden">
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
              <Link
                key={link.name}
                href={link.href}
                className={`pb-1 transition ${
                  pathname === link.href
                    ? "border-b-2 text-[#ED8301]"
                    : "hover:text-white"
                }`}
                style={pathname === link.href ? { borderColor: "#ED8301" } : {}}
              >
                {link.name}
              </Link>
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
              <Link
                key={link.name}
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
