"use client";

import Image from "next/image";
import { FaTag } from "react-icons/fa";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });

export default function Projects() {
  const projects = [
    {
      tag: "REELS",
      title: "Luxury Fashion Brand",
      company: "VELOURA STUDIO",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
      link: "/projects/veloura",
    },
    {
      tag: "MID-LEVEL ADS",
      title: "Astrology App",
      company: "HYNDHAV",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      link: "/projects/hyndav",
    },
    {
      tag: "MID-LEVEL ADS",
      title: "Jewellery App",
      company: "MANYAVAR",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338",
      link: "/projects/manyavar",
    },
    {
      tag: "MID-LEVEL ADS",
      title: "Digital Marketing App",
      company: "SHOOT ORDER",
      image: "https://images.unsplash.com/photo-1559526324-593bc073d938",
      link: "/projects/shoot",
    },
    {
      tag: "MID-LEVEL ADS",
      title: "Water bottle company",
      company: "PURESIP",
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc",
      link: "/projects/pure",
    },
    {
      tag: "MID-LEVEL ADS",
      title: "Restaurant",
      company: "AROMA",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
      link: "/projects/aroma",
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

          <p
            className={
              montserrat.className + " text-gray-400 leading-relaxed max-w-md"
            }
          >
            At Lens & Light Media, we transform creative ideas into powerful
            visual experiences through professional photography, videography,
            branding and digital content creation. From concept to final
            production, our team focuses on creativity, quality and strategy to
            deliver visuals that capture attention and strengthen brand
            identity. Our projects include brand shoots, promotional videos,
            product photography, event coverage and social media content
            designed to create impactful visuals that support marketing and
            business growth.
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
            <Link href={item.link} key={index}>
              <div
                className="border border-gray-800 rounded-2xl overflow-hidden transition cursor-pointer hover:scale-[1.02] hover:border-[#FE9A00]/40 hover:shadow-[0_0_25px_rgba(254,154,0,0.15)]"
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

                  <h3
                    className={`${montserrat.className} text-lg font-semibold`}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
