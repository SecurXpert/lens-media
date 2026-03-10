"use client";

import Image from "next/image";

export default function Fan() {
  const cards = [
    { src: "/fan1.png", rotate: "-65deg", translate: "-300px" },
    { src: "/fan2.png", rotate: "-40deg", translate: "-280px" },
    { src: "/fan3.png", rotate: "-18deg", translate: "-240px" },
    { src: "/fan4.png", rotate: "-8deg", translate: "-120px" },
    { src: "/fan5.png", rotate: "0deg", translate: "0px", center: true },
    { src: "/fan6.png", rotate: "8deg", translate: "120px" },
    { src: "/fan7.png", rotate: "18deg", translate: "240px" },
    { src: "/fan8.png", rotate: "40deg", translate: "280px" },
    { src: "/fan9.png", rotate: "65deg", translate: "300px" },
  ];

  return (
    <section className="bg-black text-white relative overflow-hidden px-6 sm:px-10 lg:px-10 py-10">
      {/* Fan Cards */}
      <div className="relative w-full flex justify-center items-center h-[380px] sm:h-[450px] lg:h-[520px]">
        <div className="relative w-full max-w-[1100px] h-[300px] sm:h-[380px] lg:h-[420px] flex justify-center items-center">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`absolute origin-bottom ${
                card.center ? "z-10" : ""
              } hidden sm:block`}
              style={{
                transform: `translateX(${card.translate}) rotate(${card.rotate})`,
              }}
            >
              <Image
                src={card.src}
                alt={`fan${i}`}
                width={180}
                height={320}
                className="rounded-[20px] sm:rounded-[30px] shadow-xl object-cover"
              />
            </div>
          ))}

          {/* Mobile Center Card */}
          <div className="sm:hidden">
            <Image
              src="/fan5.png"
              alt="fan5"
              width={200}
              height={360}
              className="rounded-[25px] shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="text-center ">
        <h2 className="font-[Azonix] text-[26px] sm:text-[32px] lg:text-[40px] bg-[linear-gradient(99.87deg,#FFFFFF_11.68%,rgba(255,255,255,0.2)_90%)] bg-clip-text text-transparent">
          FROM CONCEPT
        </h2>

        <h2 className="font-[Azonix] text-[26px] sm:text-[32px] lg:text-[40px] bg-[linear-gradient(99.87deg,#FFFFFF_11.68%,rgba(255,255,255,0.2)_90%)] bg-clip-text text-transparent">
          TO CONVERSION
        </h2>
      </div>
    </section>
  );
}
