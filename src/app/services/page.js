import React from "react";
export default function Services() {
  return (
    <section className="bg-black">
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <img
          src="/ourservicebg.png"
          alt="background"
          className=""
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0"></div>

        {/* Title */}
        <h1 className="font-[Azonix] absolute top-16 left-1/2 -translate-x-1/2 text-center text-5xl md:text-7xl tracking-[12px] text-white z-30">
          OUR SERVICES
        </h1>

        {/* Model Image */}
        <div className="absolute inset-0 flex items-end justify-center z-20">
          <img
            src="/ourserviceimg1.png"
            alt="model"
            className="h-[70vh] md:h-[70vh] object-contain translate-x-[-20%]"
          />
        </div>

        {/* LEFT TEXT */}
        <div className="absolute left-20 top-1/2 -translate-y-1/2 max-w-[220px] text-white z-30">
          <p className="text-sm leading-relaxed text-white/90">
            On This Website You Are Going To Discover Everything About..well,
            Me.
          </p>
        </div>

        {/* RIGHT TEXT */}
        <div className="absolute right-20 top-1/2 -translate-y-1/2 max-w-[260px] text-white z-30">
          <h3 className="font-bold tracking-widest mb-2">DEREK</h3>

          <p className="text-sm text-white/80 leading-relaxed">
            Fashion Tips Can Help Push You Towards The Life That You Want To
            Create For Yourself.
          </p>
        </div>

        {/* Bottom Curved Lines */}
        <div className="absolute top-[90%] w-full flex justify-center z-20">
          <div className="relative w-[120%] h-40">
            <div className="absolute inset-0 border-t border-orange-500/50 rounded-t-full"></div>
            <div className="absolute inset-4 border-t border-orange-500/50 rounded-t-full"></div>
            <div className="absolute inset-8 border-t border-orange-500/50 rounded-t-full"></div>
            <div className="absolute inset-12 border-t border-orange-500/50 rounded-t-full"></div>
          </div>
        </div>
      </section>









      <section className="w-full min-h-screen text-white">
        <div className="grid md:grid-cols-2 grid-cols-1">
          {/* 1 TOP LEFT IMAGE */}
          <div className="relative">
            <img
              src="/ourserviceimg2.png"
              alt="creative production"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-6 left-6 text-7xl font-bold text-white/10">
              01
            </span>
          </div>

          {/* TOP RIGHT CONTENT */}
          <div className="flex flex-col justify-center px-10 md:px-16 py-12 bg-[#0b0b0b]">
            <span className="text-yellow-500 text-sm mb-3">01</span>

            <h2 className="text-3xl md:text-4xl font-[Azonix] mb-4 tracking-wide">
              CREATIVE PRODUCTION
            </h2>

            <p className="text-gray-400 font-Montserrat mb-8 max-w-lg">
              We craft cinematic visuals that transcend ordinary content — from
              high-end photography to AI-powered video generation built for
              scale.
            </p>

            {/* SERVICES BUTTONS */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button className="bg-[#1a1a1a] px-4 py-3 font-Montserrat rounded-lg text-sm hover:bg-[#222]">
                📷 Photography
              </button>

              <button className="bg-[#1a1a1a] px-4 py-3 font-Montserrat rounded-lg text-sm hover:bg-[#222]">
                ▶ Videography
              </button>

              <button className="bg-[#1a1a1a] px-4 py-3 font-Montserrat rounded-lg text-sm hover:bg-[#222]">
                ⚡ AI Video Generation
              </button>

              <button className="bg-[#1a1a1a] px-4 py-3 font-Montserrat rounded-lg text-sm hover:bg-[#222]">
                🔗 Bulk Social Media Content
              </button>
            </div>

            <a
              href="#"
              className="text-yellow-500 text-sm tracking-wider hover:underline"
            >
              EXPLORE SERVICE →
            </a>
          </div>

          {/* BOTTOM LEFT CONTENT */}
          <div className="flex flex-col justify-center px-10 md:px-16 py-12 bg-[#0b0b0b]">
            <span className="text-yellow-500 text-sm mb-3">02</span>

            <h2 className="text-3xl md:text-4xl font-[Azonix] mb-4 tracking-wide">
              BRANDING & DESIGN
            </h2>

            <p className="text-gray-400 font-Montserrat mb-8 max-w-lg">
              We build brand identities that command attention, instill trust,
              and position you as the definitive leader in your market.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <button className="bg-[#1a1a1a] px-4 py-3 font-Montserrat rounded-lg text-sm hover:bg-[#222]">
                💡 Brand Design
              </button>

              <button className="bg-[#1a1a1a] px-4 py-3 font-Montserrat rounded-lg text-sm hover:bg-[#222]">
                🔄 Brand Management
              </button>

              <button className="bg-[#1a1a1a] px-4 py-3 font-Montserrat rounded-lg text-sm hover:bg-[#222]">
                🖱 UI/UX Design
              </button>

              <button className="bg-[#1a1a1a] px-4 py-3 font-Montserrat rounded-lg text-sm hover:bg-[#222]">
                🌐 Web Design
              </button>
            </div>

            <a
              href="#"
              className="text-yellow-500 text-sm tracking-wider hover:underline"
            >
              EXPLORE SERVICE →
            </a>
          </div>

          {/*  2 BOTTOM RIGHT IMAGE */}
          <div className="relative">
            <img
              src="/ourserviceimg3.png"
              alt="branding design"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-6 left-6 text-7xl font-bold text-white/10">
              02
            </span>
          </div>
          {/* TOP LEFT IMAGE */}
          <div className="relative">
            <img
              src="/ourserviceimg4.png"
              alt="creative production"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-6 left-6 text-7xl font-bold text-white/10">
              03
            </span>
          </div>

          {/* TOP RIGHT CONTENT */}
          <div className="flex flex-col justify-center px-10 md:px-16 py-12 bg-[#0b0b0b]">
            <span className="text-yellow-500 text-sm mb-3">01</span>

            <h2 className="text-3xl md:text-4xl font-[Azonix] mb-4 tracking-wide">
              CREATIVE PRODUCTION
            </h2>

            <p className="text-gray-400 font-Montserrat mb-8 max-w-lg">
              We craft cinematic visuals that transcend ordinary content — from
              high-end photography to AI-powered video generation built for
              scale.
            </p>

            {/* SERVICES BUTTONS */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button className="bg-[#1a1a1a] px-4 py-3 font-Montserrat rounded-lg text-sm hover:bg-[#222]">
                📷 Photography
              </button>

              <button className="bg-[#1a1a1a] px-4 py-3 font-Montserrat rounded-lg text-sm hover:bg-[#222]">
                ▶ Videography
              </button>

              <button className="bg-[#1a1a1a] px-4 py-3 font-Montserrat rounded-lg text-sm hover:bg-[#222]">
                ⚡ AI Video Generation
              </button>

              <button className="bg-[#1a1a1a] px-4 py-3 font-Montserrat rounded-lg text-sm hover:bg-[#222]">
                🔗 Bulk Social Media Content
              </button>
            </div>

            <a
              href="#"
              className="text-yellow-500 text-sm tracking-wider hover:underline"
            >
              EXPLORE SERVICE →
            </a>
          </div>

          {/* BOTTOM LEFT CONTENT */}
          <div className="flex flex-col justify-center px-10 md:px-16 py-12 bg-[#0b0b0b]">
            <span className="text-yellow-500 text-sm mb-3">02</span>

            <h2 className="text-3xl md:text-4xl font-[Azonix] mb-4 tracking-wide">
              BRANDING & DESIGN
            </h2>

            <p className="text-gray-400 font-Montserrat mb-8 max-w-lg ">
              We build brand identities that command attention, instill trust,
              and position you as the definitive leader in your market.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <button className="bg-[#1a1a1a] px-4 py-3 font-Montserrat rounded-lg text-sm hover:bg-[#222]">
                💡 Brand Design
              </button>

              <button className="bg-[#1a1a1a] px-4 py-3 font-Montserrat rounded-lg text-sm hover:bg-[#222]">
                🔄 Brand Management
              </button>

              <button className="bg-[#1a1a1a] px-4 py-3 font-Montserrat rounded-lg text-sm hover:bg-[#222]">
                🖱 UI/UX Design
              </button>

              <button className="bg-[#1a1a1a] px-4 py-3 font-Montserrat rounded-lg text-sm hover:bg-[#222]">
                🌐 Web Design
              </button>
            </div>

            <a
              href="#"
              className="text-yellow-500 text-sm tracking-wider hover:underline"
            >
              EXPLORE SERVICE →
            </a>
          </div>

          {/* BOTTOM RIGHT IMAGE */}
          <div className="relative">
            <img
              src="/ourserviceimg5.png"
              alt="branding design"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-6 left-6 text-7xl font-bold text-white/10">
              04
            </span>
          </div>
        </div>
      </section>
    </section>
  );
}
