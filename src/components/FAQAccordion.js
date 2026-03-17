"use client";

import { useState } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });

export default function FAQAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs?.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-800 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-900/50 transition-colors"
          >
            <span className={`${montserrat.className} text-white font-medium`}>
              {faq.question}
            </span>
            <span className="text-[#ED8301] text-xl">
              {openIndex === index ? "−" : "+"}
            </span>
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 border-t border-gray-800">
              <p className={`${montserrat.className} text-gray-400`}>
                {faq.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
