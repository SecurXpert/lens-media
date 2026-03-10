import { AiOutlineCompress } from "react-icons/ai";
import { PiHandFistBold } from "react-icons/pi";
import { FaRegHandshake } from "react-icons/fa";
import { PiLightbulb } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";
import { PiMagnifyingGlass } from "react-icons/pi";

export default function WhyChooseUsSection() {
  const advantages = [
    {
      icon: <AiOutlineCompress className="text-orange-500 text-xl sm:text-2xl mt-1 flex-shrink-0"/>,
      title: "Creative Excellence",
      description: "We transform abstract concepts into vivid reality, crafting visually captivating videos that leave a lasting impression."
    },
    {
      icon: <PiHandFistBold className="text-orange-500 text-xl sm:text-2xl mt-1 flex-shrink-0 " />,
      title: "Demonstrated Success",
      description: "Our extensive portfolio reflects a history of high-level results and long-standing client trust."
    },
    {
      icon: <FaRegHandshake className="text-orange-500 text-xl sm:text-2xl mt-1 flex-shrink-0" />,
      title: "True Partnership",
      description: "We operate as an extension of your team, ensuring our collaborative process brings your specific vision to the screen."
    },
    {
      icon: <PiLightbulb className="text-orange-500 text-xl sm:text-2xl mt-1 flex-shrink-0" />,
      title: "Forward-Thinking Strategy",
      description: "We are recognized for challenging the status quo and delivering unique solutions that exceed standard industry expectations."
    },
    {
      icon: <FaUsers className="text-orange-500 text-xl sm:text-2xl mt-1 flex-shrink-0" />,
      title: "Elite Expertise",
      description: "Our agency is powered by a dedicated team of specialists who bring deep industry knowledge and passion to every frame."
    },
    {
      icon: <PiMagnifyingGlass className="text-orange-500 text-xl sm:text-2xl mt-1 flex-shrink-0" />,
      title: "Meticulous Craftsmanship",
      description: "From the initial cut to the final sound mix, we obsess over every technical detail to ensure maximum audience impact."
    }
  ];

  return (
    <section className="bg-black px-4 sm:px-6 lg:px-6 pb-12 md:pb-16 lg:pb-20">
      <div className="max-w-[1400px] mx-auto border border-gray-700/100 rounded-[20px] md:rounded-[18px] lg:rounded-[25px] px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10">
        {/* WHY US */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-14 items-center mb-10 md:mb-14 lg:mb-20">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              src="/aboutimg3.png"
              alt="Why Us"
              className="w-full h-[180px] sm:h-[250px] md:h-[300px] lg:h-[310px] object-cover rounded-lg"
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-[Azonix] tracking-wide mb-3 md:mb-4 lg:mb-6">
             Why Choose Us?
            </h2>

            <p className="text-gray-400 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[26px] mb-2">
              Clients choose Lens & Light Media because we bring a unique wow factor to every project. 
              We are not a typical suit and tie video crew, we are a hands-on team that brings an extra spark of excitement to our work. 
              We believe in making the production process just as enjoyable as the final product, acting as your partners in turning dreams into reality.
            </p>
          </div>
        </div>

        {/* ADVANTAGE SECTION */}
        <div>
          <h2 className="text-center text-white text-xl md:text-2xl lg:text-3xl font-[Azonix] mb-8 md:mb-12 lg:mb-16 tracking-wide px-4">
            The Lens & Light Media Advantage
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-2 sm:px-4">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="">
                  {advantage.icon}
                </div>
                <div>
                  <h3 className="text-white text-[14px] sm:text-[15px] md:text-[16px] mb-1">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-400 text-[12px] sm:text-[13px] md:text-[14px] leading-[18px] sm:leading-[20px] md:leading-[22px]">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
