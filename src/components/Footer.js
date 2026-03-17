import Link from "next/link";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-black text-gray-400 pt-16 pb-10 px-6 sm:px-10 lg:px-20">
      {/* Top Divider */}
      <div className="border-t border-gray-800 mb-12"></div>

      {/* Main Footer */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
        {/* LEFT */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img src="/logo.png" alt="logo" width={180} height={180} />
          </div>

          <p
            className={`${montserrat.className} max-w-md leading-relaxed text-sm sm:text-base`}
          >
            Where creativity meets technology. Crafting premium digital
            experiences that captivate, convert, and inspire.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-[#FE9A00] tracking-widest mb-6 font-semibold font-[Azonix] text-sm sm:text-base">
            QUICK LINKS
          </h4>

          <ul className="space-y-3 sm:space-y-4">
            {quickLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`${montserrat.className} hover:text-white cursor-pointer text-sm sm:text-base block`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-[#FE9A00] tracking-widest mb-6 font-semibold font-[Azonix] text-sm sm:text-base">
            GET IN TOUCH
          </h4>

          <div className="space-y-4 sm:space-y-5">
            <div
              className={`${montserrat.className} flex items-center gap-3 text-sm sm:text-base`}
            >
              <FiMail className="text-[#FE9A00] text-lg shrink-0" />
              hello@lenslight.media
            </div>

            <div
              className={`${montserrat.className} flex items-center gap-3 text-sm sm:text-base`}
            >
              <FiPhone className="text-[#FE9A00] text-lg shrink-0" />
              +1 (555) 000-1234
            </div>

            <div
              className={`${montserrat.className} flex items-start gap-3 text-sm sm:text-base`}
            >
              <FiMapPin className="text-[#FE9A00] text-lg mt-1 shrink-0" />
              <div>
                123 Creative Lane <br />
                Los Angeles, CA 90028
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-gray-500 text-center md:text-left">
          © 2026 Lens & Light Media. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4">
          <div className="w-9 h-9 sm:w-10 sm:h-10 text-white rounded-full bg-[#1c1c1c] flex items-center justify-center hover:bg-[#2a2a2a] cursor-pointer transition">
            <FiInstagram size={18} />
          </div>

          <div className="w-9 h-9 sm:w-10 sm:h-10 text-white rounded-full bg-[#1c1c1c] flex items-center justify-center hover:bg-[#2a2a2a] cursor-pointer transition">
            <FiLinkedin size={18} />
          </div>

          <div className="w-9 h-9 sm:w-10 sm:h-10 text-white rounded-full bg-[#1c1c1c] flex items-center justify-center hover:bg-[#2a2a2a] cursor-pointer transition">
            <FiTwitter size={18} />
          </div>
        </div>
      </div>
    </footer>
  );
}
