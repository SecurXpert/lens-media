export default function AboutAgencySection() {
  return (
    <section className="py-8 md:py-10 lg:py-12 px-4 sm:px-6 lg:px-10">
      <div className="flex flex-col md:flex-row">
        {/* Left Title */}
        <div className="flex-1 text-left md:pl-8  max-w-xl">
          <h2 className="font-[Azonix] text-2xl sm:text-3xl text-white py-4">
            ABOUT OUR AGENCY
          </h2>
        </div>

        {/* Right Content */}
        <div className="flex-1 space-y-6 md:space-y-8">
          <p className="uppercase text-[14px] sm:text-[16px] lg:text-[18px] text-gray-200 font-[Azonix] leading-4.5 sm:leading-5 lg:leading-7.5 text-left wrap-break-word">
            We are a top-tier production house and social media content agency.
            As storytellers and strategists, we bring your vision to life with
            high-quality production and engaging digital content.
          </p>

          <p className="text-gray-400 text-[13px] sm:text-[15px] md:text-[16px] leading-4.5 sm:leading-5 md:leading-5.5 lg:leading-7 tracking-[-0.40px] font-light text-left wrap-break-word">
            Our mission is simple to transform your ideas into compelling visual
            stories. We believe every project is an opportunity to create
            something extraordinary. Whether it's a corporate video, a
            commercial, event coverage or animation, we approach every task with
            creativity, enthusiasm and a total commitment to exceeding your
            expectations.
          </p>
        </div>
      </div>
    </section>
  );
}
