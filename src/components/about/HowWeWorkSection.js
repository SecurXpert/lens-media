export default function HowWeWorkSection() {
  return (
    <div className="py-8 sm:py-10 px-4 sm:px-6">
      <div className="border border-gray-700/100 rounded-[20px] px-4 sm:px-6 py-6 sm:py-8 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* LEFT CONTENT */}
          <div className="text-gray-300">
            <h2 className="text-white text-2xl sm:text-3xl font-[Azonix] mb-4 px-2">
              HOW WE WORK
            </h2>

            <p className="font-light text-[15px] sm:text-[16px] leading-[22px] sm:leading-[24px] text-gray-400 mb-4 px-2">
              At StoryStream, we have refined the creative process to be seamless and efficient.
              We begin by thoroughly analyzing your ideas and applying professional expertise to bring them to fruition. 
              Communication is a priority. We ensure you remain informed at every stage of production to ensure the final product 
              aligns perfectly with your vision. Our team is committed to delivering high-impact results that turn standard projects 
              into unforgettable visual experiences.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end mt-6 md:mt-0">
            <img
              src="/aboutimg2.png"
              alt="How We Work"
              className="w-full max-w-[600px] h-[180px] sm:h-[220px] md:h-[260px] lg:h-[310px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
