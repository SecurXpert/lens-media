"use client";

import { useState, useEffect } from "react";

const items = [
  "INTRODUCTION",
  "The Strategy",
  "What It Actually Looks Like",
  "What Clients Are Achieving",
  "What's Shaping Digital Marketing in 2026",
];

const sectionIds = [
  "introduction",
  "process",
  "What It Actually Looks Like",
  "results",
  "looking-forward",
];

const azonix = {
  fontFamily: "Azonix, sans-serif",
};

export default function BlogNavigation() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isManualClick, setIsManualClick] = useState(false);

  // Intersection Observer to detect which section is visible
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      if (isManualClick) return; // Skip if user just clicked

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionIds.indexOf(entry.target.id);
          if (index !== -1) {
            setSelectedIndex(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [isManualClick]);

  // Handle navigation click - scroll to section with offset
  const handleNavClick = (index) => {
    setIsManualClick(true);
    setSelectedIndex(index);

    const element = document.getElementById(sectionIds[index]);
    if (element) {
      const offset = 80; // Offset from top (navbar space)
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    // Reset manual click flag after animation
    setTimeout(() => setIsManualClick(false), 1000);
  };

  return (
    <div className="hidden lg:block fixed left-0 top-2/3 -translate-y-1/2 z-50 pl-4 pr-4 py-8">
      <div
        className="
          w-48 sm:w-56 md:w-73
          rounded-4xl border border-white/10
          backdrop-blur-xs bg-white/5
          p-3 sm:p-6
        "
      >
        <ul className="space-y-2 sm:space-y-3">
          {items.map((item, index) => (
            <li
              key={index}
              onClick={() => handleNavClick(index)}
              className={`relative text-[10px] sm:text-xs tracking-widest cursor-pointer transition-all duration-300 ${
                index === selectedIndex
                  ? "text-[#E37400]"
                  : "text-[#FFFFFF66] hover:text-white"
              }`}
              style={azonix}
            >
              {/* Selected Background */}
              {index === selectedIndex && (
                <div
                  className="absolute inset-0 rounded-xl sm:rounded-2xl
                    bg-gradient-to-r from-[#FE9A001A] to-transparent
                    backdrop-blur-xl"
                ></div>
              )}

              {/* Left Glow */}
              {index === selectedIndex && (
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2
                    w-1.5 sm:w-2 h-6 sm:h-8 rounded-full
                    bg-gradient-to-b from-orange-400 to-orange-600
                    blur-md"
                ></div>
              )}

              {/* Content */}
              <span className="relative z-10 block px-3 sm:px-4 py-2 sm:py-3">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
