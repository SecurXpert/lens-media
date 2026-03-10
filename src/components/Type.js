"use client";

import Image from "next/image";

export default function Type() {
  const items = [
    {
      title: "YOUTUBE VIDEOS",
      img: "/yt.jpg",
      className: "md:col-span-2",
    },
    {
      title: "DOCUMENTARIES",
      img: "/doc.jpg",
    },
    {
      title: "MID-LEVEL ADS",
      img: "/ads.jpg",
    },
    {
      title: "DRONE SHOOTING",
      img: "/drone.jpg",
    },
    {
      title: "COMMERCIALS AND ADVERTISEMENTS",
      img: "/commercial.jpg",
      className: "md:row-span-2",
    },
    {
      title: "SHORTS & REELS",
      img: "/shorts.jpg",
      className: "md:col-span-2 md:row-span-2",
    },
    {
      title: "USER GENERATED CONTENT",
      img: "/ugc.jpg",
    },
  ];

  return (
    <section className="bg-black py-16 sm:py-20 lg:py-28 px-6 sm:px-10 lg:px-20 text-white">
      {/* Heading */}
      <h2 className="text-center font-[Azonix] text-[28px] sm:text-[36px] lg:text-[48px] mb-12 lg:mb-16 bg-[linear-gradient(99.87deg,#FFFFFF_11.68%,rgba(255,255,255,0.2)_100%)] bg-clip-text text-transparent">
        EXPERTS IN MULTI-PLATFORM CONTENT STRATEGY
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 auto-rows-[200px]">
        {items.map((item, i) => (
          <div
            key={i}
            className={`relative rounded-[25px] lg:rounded-[30px] overflow-hidden group ${item.className}`}
          >
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />

            {/* Text */}
            <p className="absolute top-4 left-4 sm:top-6 sm:left-6 font-[Azonix] text-xs sm:text-sm tracking-widest max-w-[80%]">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
