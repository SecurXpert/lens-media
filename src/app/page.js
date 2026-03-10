"use client";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Second from "../components/Second";
import About from "../components/About";
import Services from "../components/Services";
import Client from "../components/Client";
import Fan from "../components/Fan";
import Type from "../components/Type";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});

export default function HeroSection() {
  return (
    <section className="bg-black text-white pt-16 sm:pt-20 pb-20 overflow-hidden">
      {/* Heading */}
      <div className="text-center max-w-6xl mx-auto px-6">
        <h1 className="font-[Azonix] font-bold text-[34px] sm:text-[48px] md:text-[60px] lg:text-[77px] leading-tight lg:leading-[84px] text-center bg-[linear-gradient(99.87deg,#FFFFFF_11.68%,rgba(255,255,255,0.15)_100%)] bg-clip-text text-transparent">
          Elevate Your Brand with Creative Media
        </h1>

        <p
          className={`${montserrat.className} mt-6 max-w-2xl mx-auto text-center text-[16px] sm:text-[18px] md:text-[20px] lg:text-[25px] leading-[126%] tracking-[-0.02em] text-gray-400`}
        >
          We create marketing and media solutions that help your brand grow,
          engage customers and stand out online.
        </p>
      </div>

      {/* Curved Image Section */}
      <div className="relative mt-16 sm:mt-20 lg:mt-24">
        <div
          className="absolute top-0 left-0 w-full h-[60px] bg-black z-10"
          style={{
            borderBottomLeftRadius: "50% 100%",
            borderBottomRightRadius: "50% 100%",
          }}
        />

        <div className="flex justify-center overflow-hidden">
          <div className="flex gap-[15px] sm:gap-[20px] lg:gap-[25px] animate-scroll">
            {[1, 2, 3, 4].map((num, i) => (
              <Image
                key={`first-${i}`}
                src={`/img${num}.jpg`}
                alt={`img${num}`}
                width={350}
                height={370}
                className="h-[300px] sm:h-[420px] md:h-[300px] lg:h-[410px] w-[180px] sm:w-[250px] md:w-[300px] lg:w-[350px] object-cover rounded-xl lg:rounded-2xl flex-shrink-0"
              />
            ))}
            {[1, 2, 3, 4].map((num, i) => (
              <Image
                key={`second-${i}`}
                src={`/img${num}.jpg`}
                alt={`img${num}`}
                width={350}
                height={370}
                className="h-[300px] sm:h-[420px] md:h-[300px] lg:h-[410px] w-[180px] sm:w-[250px] md:w-[300px] lg:w-[350px] object-cover rounded-xl lg:rounded-2xl flex-shrink-0"
              />
            ))}
            {[1, 2, 3, 4].map((num, i) => (
              <Image
                key={`third-${i}`}
                src={`/img${num}.jpg`}
                alt={`img${num}`}
                width={350}
                height={370}
                className="h-[300px] sm:h-[420px] md:h-[300px] lg:h-[410px] w-[180px] sm:w-[250px] md:w-[300px] lg:w-[350px] object-cover rounded-xl lg:rounded-2xl flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Other Sections (unchanged) */}
      <Second />
      <About />
      <Services />
      <Client />
      <Fan />
      <Type />
    </section>
  );
}
