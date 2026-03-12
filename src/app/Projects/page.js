"use client";

import Image from "next/image";
import { FaTag } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      tag: "REELS",
      title: "Luxury Fashion Brand",
      company: "VELOURA STUDIO",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    },
    {
      tag: "MID-LEVEL ADS",
      title: "Astrology App",
      company: "HYNDHAV",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    {
      tag: "MID-LEVEL ADS",
      title: "Jewellery App",
      company: "MANYAVAR",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338",
    },
    {
      tag: "MID-LEVEL ADS",
      title: "Digital Marketing App",
      company: "SHOOT ORDER",
      image: "https://images.unsplash.com/photo-1559526324-593bc073d938",
    },
    {
      tag: "MID-LEVEL ADS",
      title: "Water bottle company",
      company: "PURESIP",
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc",
    },
    {
      tag: "MID-LEVEL ADS",
      title: "Restaurant",
      company: "AROMA",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-8 py-8 grid md:grid-cols-2 items-center">
        {/* LEFT TEXT */}
        <div>
          <h1 className="text-left font-[Azonix] text-[28px] sm:text-[36px] lg:text-[50px] mb-2 bg-[linear-gradient(99.87deg,#FFFFFF_11.68%,rgba(255,255,255,0.2)_100%)] bg-clip-text text-transparent">
            OUR <span>PROJECTS</span>
          </h1>

          <p className="font-['DM_Sans'] text-gray-400 leading-relaxed max-w-md">
            From bold ideas to powerful execution, we craft campaigns that don't
            just look good — they perform. We're a passionate team of creators,
            strategists, and storytellers dedicated to turning your brand vision
            into measurable success.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center mt-16">
          <Image
            src="/go1.png"
            alt="photographer"
            width={400}
            height={575}
            className="relative h-[575px] object-contain drop-shadow-2xl"
          />
        </div>
      </section>

      {/* PROJECT GRID */}

      <section className="max-w-7xl mx-auto px-6 pb-20 mt-20">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {projects.map((item, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-2xl overflow-hidden hover:scale-[1.02] transition"
              style={{
                background:
                  "linear-gradient(93.66deg, rgba(255,255,255,0.08) 2.21%, rgba(255,255,255,0) 100%)",
              }}
            >
              {/* IMAGE */}

              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="h-52 w-full object-cover"
                />

                <span className="absolute top-3 left-3 text-xs bg-gray-700 px-3 py-1 rounded-full flex items-center gap-1">
                  <FaTag className="text-[10px]" />
                  {item.tag}
                </span>
              </div>

              {/* CONTENT */}

              <div className="p-5">
                <p className="text-xs text-gray-400 mb-1">{item.company}</p>

                <h3 className="text-lg font-semibold font-montserrat">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
