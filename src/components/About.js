"use client";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });

export default function About() {
  return (
    <div className="flex items-center justify-center pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 bg-black font-sans overflow-hidden">
      {/* Perspective Stage */}
      <div className="w-full max-w-[1200px] flex justify-center [perspective:1500px]">
        {/* Card Stack */}
        <div className="flex flex-col lg:flex-row items-center justify-center [transform-style:preserve-3d]">
          {/* Card 1 - Image */}
          <div className="relative w-full max-w-[320px] sm:max-w-[420px] md:max-w-[650px] lg:w-[700px] h-[240px] sm:h-[300px] md:h-[360px] lg:h-[460px] rounded-[28px] overflow-hidden z-[2] lg:mr-[-150px] mb-10 lg:mb-0 shadow-[25px_15px_60px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-in-out [transform:rotateY(38deg)_rotateX(0deg)]">
            <Image
              src="/about.jpg"
              alt="About"
              fill
              className="object-cover scale-x-[-1]"
            />
          </div>

          {/* Card 2 - Text */}
          <div className="relative w-full max-w-[340px] sm:max-w-[440px] md:max-w-[540px] lg:w-[650px] h-auto lg:h-[450px] rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-[40px] text-[#94a3b8] z-[1] transition-transform duration-500 ease-in-out [transform:rotateY(-15deg)_rotateX(4deg)_translateZ(-10px)] sm:[transform:rotateY(-5deg)_rotateX(4deg)_translateZ(-10px)]">
            <div className="flex flex-col justify-center h-full text-center lg:text-left">
              <div className="lg:pl-24">
                <h2 className="font-[Azonix] font-bold text-[24px] sm:text-[32px] md:text-[40px] lg:text-[55px] leading-tight lg:leading-[65px] bg-[linear-gradient(99.87deg,#FFFFFF_11.68%,rgba(255,255,255,0.25)_60%)] bg-clip-text text-transparent mb-2">
                  ABOUT US
                </h2>

                <p
                  className={`${montserrat.className}
                 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[14px]
                  leading-[160%] text-gray-400`}
                >
                  At Lens & Light Media, we don’t just capture moments, we craft
                  experiences. As a premium digital agency, we specialize in
                  high-end photography, cinematic videography, cutting-edge AI
                  video generation and results-driven digital marketing. By
                  merging traditional artistry with next-generation technology
                  we help brands command attention, transforming your vision
                  into a powerful, measurable digital reality that drives the
                  future of your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
