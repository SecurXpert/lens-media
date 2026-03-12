"use client";

import { useParams } from "next/navigation";
import { getServiceData } from "@/utils/services";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { useState } from "react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });

export default function ServiceDetail() {
  const params = useParams();
  const slug = params.slug;
  const service = getServiceData(slug);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!service) {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-white mb-8">
            Service Not Found
          </h1>
          <p className="text-gray-400">
            The service you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Image for header section */}
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{
            backgroundImage: `url('${service.backgroundImage || "/service1.jpg"}')`,
            height: "600px",
          }}
        ></div>
        {/* Black gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.9) 100%)",
            height: "600px",
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          {/* Back Button */}
          <div className="mb-14">
            <Link
              href="/services"
              className="text-black  bg-[#E57600] hover:bg-[#FF9A00] p-2 rounded-lg transition-colors inline-block text-[10px] font-inter font-bold tracking-wider"
            >
              ← BACK TO SERVICES
            </Link>
          </div>

          {/* Service Header */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-md font-bold font-inter text-[#ED8301]">
                {String(
                  slug === "creative-production"
                    ? "01"
                    : slug === "branding-design"
                      ? "02"
                      : slug === "performance-marketing"
                        ? "03"
                        : slug === "digital-marketing"
                          ? "04"
                          : "05",
                ).padStart(2, "0")}
              </div>
              <div
                className="w-10 h-px"
                style={{ backgroundColor: "rgba(245, 166, 35, 0.5)" }}
              ></div>
              <div
                className="text-md font-semibold text-[#E57600] uppercase tracking-wider px-4 py-2 rounded-full"
                style={{
                  backgroundColor: "#F5A6230F",
                  border: "1.32px solid #F5A62366",
                }}
              >
                {slug === "creative-production"
                  ? "Creative Production"
                  : slug === "branding-design"
                    ? "Branding Design"
                    : slug === "performance-marketing"
                      ? "Performance Marketing"
                      : slug === "digital-marketing"
                        ? "Digital Marketing"
                        : "Conversion & Funnel"}
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight font-[Azonix]">
              {(() => {
                const title = service.title.toUpperCase();
                const words = title.split(" ");
                const midPoint = Math.ceil(words.length / 2);
                const firstHalf = words.slice(0, midPoint).join(" ");
                const secondHalf = words.slice(midPoint).join(" ");
                return (
                  <>
                    <span className="text-white">{firstHalf} </span>
                    <span className="text-[#ED8301]">{secondHalf}</span>
                  </>
                );
              })()}
            </h1>
            <p
              className={`text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl ${montserrat.className}`}
            >
              {service.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <button
                className="text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:scale-105 transition-transform font-[Azonix] text-sm sm:text-base"
                style={{
                  background:
                    "linear-gradient(90deg, #FE9A00 0%, #E17100 100%)",
                  boxShadow:
                    "0px 4px 6px -4px #E171004D, 0px 10px 15px -3px #E171004D",
                }}
              >
                START THIS SERVICE →
              </button>
              <button
                className="text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#ED8301] hover:text-black transition-colors font-[Azonix] text-sm sm:text-base"
                style={{
                  border: "1.32px solid #F5A62366",
                }}
              >
                BOOK A STRATEGY CALL
              </button>
            </div>

            {/* Statistics */}
            <section className="w-screen bg-[#111111] py-8 sm:py-12 lg:py-16 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                  {service.keyMetrics?.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#ED8301] mb-2 font-inter">
                        {stat.value}
                      </div>
                      <div
                        className={`text-xs sm:text-sm text-gray-400 uppercase tracking-wider ${montserrat.className}`}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Rest of the content without background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* What's Included Badge */}
        <div className="mb-8">
          <div
            className="text-sm  text-[#E57600] uppercase tracking-wider px-4 py-2 rounded-full inline-block"
            style={{
              backgroundColor: "#F5A6230F",
              border: "1.32px solid #F5A62366",
            }}
          >
            What's Included
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 text-start font-[Azonix]">
            <p className="text-white">
              {service.serviceExcellenceHeading?.line1 || "Service"}{" "}
            </p>
            <p className="text-[#ED8301]">
              {service.serviceExcellenceHeading?.line2 || "Excellence"}
            </p>
          </h2>
          <div className=" p-4 sm:p-6 lg:p-8 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {service.whatWeOffer
                ? service.whatWeOffer.map((item, index) => (
                    <div
                      key={index}
                      className="border border-[#1C1C1C] p-4 sm:p-6 rounded-xl"
                    >
                      <h3
                        className={`text-lg sm:text-xl lg:text-2xl font-extrabold text-white mb-3 sm:mb-4 ${montserrat.className}`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`text-sm sm:text-base text-gray-400 leading-relaxed ${montserrat.className}`}
                      >
                        {item.description}
                      </p>
                    </div>
                  ))
                : service.details.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-[#ED8301] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-black"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-lg">{item}</span>
                    </div>
                  ))}
            </div>
          </div>
        </div>

        {/* Our Work Section */}
        <section className="w-screen bg-[#111111] py-16 sm:py-20 lg:py-28 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Badge */}
            <div className="mb-4 sm:mb-6">
              <span
                className="text-xs sm:text-sm text-[#E57600] uppercase tracking-wider px-3 sm:px-4 py-2 rounded-full"
                style={{
                  backgroundColor: "#F5A6230F",
                  border: "1.32px solid #F5A62366",
                }}
              >
                Our Work
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-[Azonix] leading-tight mb-8 sm:mb-12 lg:mb-14">
              <span className="text-white">WHAT EXCELLENCE</span>
              <br />
              <span className="text-[#ED8301]">LOOKS LIKE</span>
            </h2>

            {/* Work Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {service.ourWork?.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl overflow-hidden border border-[#1C1C1C] hover:scale-[1.03] transition-transform duration-300"
                >
                  <img
                    src={item.image}
                    alt="work"
                    className="w-full h-48 sm:h-64 lg:h-80 xl:h-96 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <div className="mb-16 sm:mb-20 lg:mb-28 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start mt-20">
          {/* Left Content */}
          <div>
            <div className="mb-4 sm:mb-6">
              <span
                className="text-xs sm:text-sm text-[#E57600] uppercase tracking-wider px-3 sm:px-4 py-2 rounded-full"
                style={{
                  backgroundColor: "#F5A6230F",
                  border: "1.32px solid #F5A62366",
                }}
              >
                Our Process
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-[Azonix] leading-tight mb-4 sm:mb-6">
              <span className="text-white">HOW WE</span>
              <br />
              <span className="text-[#ED8301]">DELIVER</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-400 max-w-lg lg:max-w-md leading-relaxed">
              {service.processDescription ||
                "A structured, proven framework that eliminates guesswork and drives consistent, measurable outcomes for every client engagement."}
            </p>

            {/* Decorative line */}
            <div className="flex gap-2 sm:gap-3 mt-4 sm:mt-6">
              <div
                className="w-6 sm:w-8 h-[2px] sm:h-[3px] rounded"
                style={{ backgroundColor: "#E57600" }}
              ></div>
              <div
                className="w-6 sm:w-8 h-[2px] sm:h-[3px] rounded"
                style={{ backgroundColor: "#E57600", opacity: "0.85" }}
              ></div>
              <div
                className="w-6 sm:w-8 h-[2px] sm:h-[3px] rounded"
                style={{ backgroundColor: "#E57600", opacity: "0.7" }}
              ></div>
              <div
                className="w-6 sm:w-8 h-[2px] sm:h-[3px] rounded"
                style={{ backgroundColor: "#E57600", opacity: "0.55" }}
              ></div>
            </div>
          </div>

          {/* Process Steps */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {service.process?.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-4 sm:gap-6 border-b border-[#1C1C1C] pb-4 sm:pb-6 lg:pb-8"
              >
                {/* Step Number */}
                <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#ED8301] text-[#ED8301] font-semibold text-xs sm:text-sm flex-shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Step Content */}
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <section className="w-screen bg-[#111111] py-16 sm:py-20 lg:py-28 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
            {/* Left Side */}
            <div>
              <div className="mb-4 sm:mb-6">
                <span
                  className="text-xs sm:text-sm text-[#E57600] uppercase tracking-wider px-3 sm:px-4 py-2 rounded-full"
                  style={{
                    backgroundColor: "#F5A6230F",
                    border: "1.32px solid #F5A62366",
                  }}
                >
                  FAQ
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-[Azonix] leading-tight">
                <span className="text-white">COMMON</span>
                <br />
                <span className="text-[#ED8301]">QUESTIONS</span>
              </h2>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4 sm:space-y-6">
              {service.faq?.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-[#1C1C1C] pb-4 sm:pb-6 cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex justify-between items-start sm:items-center">
                    <h3 className="text-sm sm:text-base text-white font-medium pr-4">
                      {item.question}
                    </h3>

                    <span className="text-[#ED8301] text-lg sm:text-xl flex-shrink-0">
                      {openIndex === index ? "−" : "⌄"}
                    </span>
                  </div>

                  {openIndex === index && (
                    <p className="text-xs sm:text-sm text-gray-400 mt-3 sm:mt-4 leading-relaxed max-w-lg">
                      {item.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Services Section */}
        <div className="mb-16 sm:mb-20 lg:mb-28 mt-20">
          {/* Header */}
          <div className="mb-8 sm:mb-12 lg:mb-14">
            <span
              className="text-xs sm:text-sm text-[#E57600] uppercase tracking-wider px-3 sm:px-4 py-2 rounded-full"
              style={{
                backgroundColor: "#F5A6230F",
                border: "1.32px solid #F5A62366",
              }}
            >
              Explore More
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-[Azonix] leading-tight mt-4 sm:mt-6">
              <span className="text-white">OTHER</span>
              <br />
              <span className="text-[#ED8301]">SERVICES</span>
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {service.otherServices?.map((item) => (
              <Link key={item.slug} href={`/services/${item.slug}`}>
                <div className="relative rounded-2xl overflow-hidden group cursor-pointer border border-[#1C1C1C]">
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 sm:h-56 lg:h-64 xl:h-72 object-cover group-hover:scale-110 transition duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                  {/* Text */}
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                    <div className="text-[#ED8301] text-xs sm:text-sm mb-1 font-semibold">
                      {item.id}
                    </div>

                    <h3 className="text-white text-base sm:text-lg font-semibold">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <section
        className="w-full py-16 sm:py-20 lg:py-28 text-center mb-16 sm:mb-20"
        style={{
          background:
            "linear-gradient(135deg, #FF6B00 0%, #FF8C00 50%, #FF6B00 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs sm:text-sm tracking-[4px] sm:tracking-[6px] text-black/70 mb-4 sm:mb-6 uppercase">
            Ready To Get Started?
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-[Azonix] text-black leading-tight mb-4 sm:mb-6">
            LET'S BUILD YOUR
            <br />
            <span className="text-white">BRANDING & DESIGN</span>
            <br />
            STRATEGY
          </h2>

          <p className="text-sm sm:text-base text-black/80 max-w-lg sm:max-w-xl mx-auto mb-6 sm:mb-8 lg:mb-10">
            Book a free strategy call and discover exactly how we'll drive
            growth for your brand.
          </p>

          <Link href="/contact">
            <button className="bg-black text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full font-semibold flex items-center gap-2 mx-auto hover:scale-105 transition-transform shadow-lg text-sm sm:text-base">
              Work With Us →
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
