"use client";

import { useState } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Client() {
  return (
    <section className="relative w-full py-20 sm:py-28 lg:py-32 bg-black text-white overflow-hidden min-h-screen">
      {/* Background */}
      <img
        src="/camera.jpg"
        alt="camera background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 px-6">
        {/* Title */}
        <h2 className="text-center text-gray-300 text-sm sm:text-lg md:text-xl tracking-[0.2em] sm:tracking-[0.25em] mb-16 font-[Azonix]">
          WHAT DO CLIENTS HAVE TO SAY:
        </h2>

        <TestimonialSlider />
      </div>
    </section>
  );
}

function TestimonialSlider() {
  const testimonials = [
    {
      // company: "REBEL",
      // sub: "FOODS",
      name: "— The PureSipp Team",
      // role: "General Manager Marketing",
      text: `We chose Lens & Light Media to launch our brand, and it was the best decision we made. Their ability to blend AI-generated video ads with professional cinematography took our product to the next level. The digital marketing strategy they executed resulted in a huge flow of orders immediately after the ads went live. Lens & Light Media didn't just create content; they created a success story for PureSipp. Highly recommended for any new brand looking for impact!`,
    },
    {
      // company: "REBEL",
      // sub: "FOODS",
      name: "— The Hyndav Management Team",
      // role: "General Manager Marketing",
      text: `Developing a platform for sacred services required a deep understanding of tradition and technology, and Lens & Light Media delivered exactly that. They transformed the complex process of Purohit onboarding into a seamless, high-end digital experience. The visual language they created blending celestial aesthetics with modern UI has built immense trust within our community. Since the launch, our booking efficiency has skyrocketed and the feedback from both devotees and Pujaris has been overwhelming. Lens & Light Media is truly at the forefront of digital innovation for spiritual tech.`,
    },
    {
      //  company: "REBEL",
      // sub: "FOODS",
      name: "— The Management, Aroma Multi Cuisine Restaurant",
      // role: "General Manager Marketing",
      text: `The transformation of our digital presence has been nothing short of extraordinary since we partnered with Lens & Light Media. Their cinematic food videography didn't just showcase our menu; it made our audience 'feel' the flavor. By capturing the sizzle and spice of our kitchen and pairing it with a brilliant social media marketing strategy, Lens & Light Media helped us reach more customers than ever before. We've seen a massive surge in table bookings and our social media has become a community of food lovers. They truly know how to turn a viewer into a diner.`,
    },
  ];

  const [index, setIndex] = useState(1);

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const left =
    testimonials[(index - 1 + testimonials.length) % testimonials.length];
  const center = testimonials[index];
  const right = testimonials[(index + 1) % testimonials.length];

  return (
    <div className="relative flex justify-center items-center gap-6 lg:gap-10 flex-col lg:flex-row">
      {/* Left Card */}
      <div className="hidden lg:block w-[500px] opacity-40 scale-95 backdrop-blur-[1px] bg-white/5 border border-white/20 rounded-[30px] p-10">
        <h3 className="text-3xl font-bold mb-6">
          {left.company}
          <span className="text-xs tracking-[0.4em] block text-center">
            {left.sub}
          </span>
        </h3>
        <p
          className={`${montserrat.className} text-gray-200 text-sm leading-relaxed`}
        >
          {left.text.substring(0, 150)}...
        </p>
        <div className="mt-4 text-sm text-gray-300">
          <p className="font-semibold">{left.name}</p>
        </div>
      </div>

      {/* Center Card */}
      <div className="relative w-full max-w-[900px]">
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 z-10"
        >
          ‹
        </button>

        {/* Main Card */}
        <div className="relative backdrop-blur-[1px] bg-white/5 border border-white/20 rounded-[30px] p-8 sm:p-12">
          <h3 className="text-3xl sm:text-4xl font-bold mb-6">
            {center.company}
            <span className="text-xs tracking-[0.4em] block text-center">
              {center.sub}
            </span>
          </h3>

          <p
            className={`${montserrat.className} text-gray-200 text-base sm:text-lg leading-relaxed max-w-3xl`}
          >
            {center.text}
          </p>

          <div className="flex items-center gap-4 mt-2">
            <div className="w-10 h-10  overflow-hidden flex-shrink-0">
              <img
                src="/SVG.png"
                alt="Testimonial avatar"
                width={30}
                height={30}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          <div className="mt-2 text-sm text-gray-300">
            <p className="font-semibold">{center.name}</p>
            <p className="text-gray-400">{center.role}</p>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 z-10"
        >
          ›
        </button>
      </div>

      {/* Right Card */}
      <div className="hidden lg:block w-[500px] opacity-40 scale-95 backdrop-blur-[1px] bg-white/5 border border-white/20 rounded-[30px] p-10">
        <h3 className="text-3xl font-bold mb-6">
          {right.company}
          <span className="text-xs tracking-[0.4em] block text-center">
            {right.sub}
          </span>
        </h3>
        <p
          className={`${montserrat.className} text-gray-200 text-sm leading-relaxed`}
        >
          {right.text.substring(0, 150)}...
        </p>
        <div className="mt-4 text-sm text-gray-300">
          <p className="font-semibold">{right.name}</p>
        </div>
      </div>
    </div>
  );
}
