export default function ValuesSection() {
  const values = [
    {
      id: "01",
      title: "CREATIVE VISION",
      text: "At Lens & Light Media, we believe that the power of imagination is what truly drives a project forward. Creative thinking is at the heart of everything we do, and we constantly push ourselves to bring a sense of innovation and originality to every frame we capture. Our ultimate goal is to move beyond the ordinary, producing unique and captivating video content that truly stands out and leaves a lasting impression.",
      align: "left",
    },
    {
      id: "02",
      title: "OUR COMMITMENT TO QUALITY",
      text: "At Lens & Light Media, excellence is non-negotiable for us and we maintain a high standard that is never compromised. We are fully committed to delivering top-notch video production services that bring a premium feel to every project. From the very first concept to the final finished product, our goal is to consistently meet and exceed our clients' expectations throughout the entire process.",
      align: "right",
    },
    {
      id: "03",
      title: "GROWING TOGETHER",
      text: "We believe that the best results come from working together. Our team values teamwork and open collaboration because we know that your insights are key to a successful project. We take the time to work closely with you, making sure we fully understand your vision and goals from the start. This partnership ensures that every project we take on is a true collaboration that leads to a great final result.",
      align: "left",
    },
    {
      id: "04",
      title: "BUILDING TRUST",
      text: "Trust and honesty are at the very heart of our agency. We maintain the highest ethical standards in all our interactions, ensuring that transparency and reliability are part of everything we do. By staying true to these values, we focus on building strong, long-lasting relationships with our clients and partners.",
      align: "right",
    },
  ];

  return (
    <section className="bg-black text-gray-300 py-16 md:py-20 lg:py-24 px-4 sm:px-6">
      <div className="">
        {/* Title */}
        <h2
          className="font-['Azonix'] text-[20px] sm:text-[28px] md:text-[36px] lg:text-[40px] leading-[30px] sm:leading-[40px] md:leading-[45px] lg:leading-[50px] text-center pb-8 md:pb-12 lg:pb-15 max-w-7xl mx-auto
                     bg-[linear-gradient(99.87deg,#FFFFFF_10%,rgba(255,255,255,0)_140%)] 
                     bg-clip-text text-transparent 
                     px-4"
        >
          The Heart of Our Craft: The Story Behind Every Stream
        </h2>

        {/* Values */}
        <div className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32 pt-10 md:pt-12 lg:pt-15 px-4 sm:px-6 md:ml-37">
          {values.map((item) => (
            <div
              key={item.id}
              className={`relative w-full max-w-4xl ${
                item.align === "right" ? "md:ml-auto" : "md:mr-auto"
              }`}
            >
              {/* Big Background Number */}
              <span
                className={`absolute 
                           top-0 
                           text-[80px] sm:text-[120px] md:text-[120px] lg:text-[120px]
                           font-['Azonix']
                           text-white opacity-35
                           leading-none z-0 ${
                  item.align === "right" ? "left-0" : "left-0"
                } -translate-y-[50px]`}
              >
                {item.id}
              </span>

              {/* Title */}
              <h3
                className={`relative z-10 text-14px md:text-3xl lg:text-4xl font-[Azonix] tracking-widest text-white/80 mb-2 sm:mb-3 md:mb-4 font-bold text-left md:${item.align === "right" ? "text-right" : "text-left"}`}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className={`relative z-10 text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed font-light max-w-3xl text-left md:${item.align === "left" ? "text-left" : "text-right"} mb-8 sm:mb-10 md:mb-12 lg:mb-16`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
