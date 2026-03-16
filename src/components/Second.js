"use client";

export default function Second() {
  return (
    <section className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Heading */}
      <h2 className="font-[Azonix] font-bold text-center text-[24px] sm:text-[32px] md:text-[48px] lg:text-[64px] xl:text-[77px] leading-tight sm:leading-tight md:leading-[72px] lg:leading-[84px] px-2 sm:px-0 bg-[linear-gradient(99.87deg,#FFFFFF_11.68%,rgba(255,255,255,0.15)_100%)] bg-clip-text text-transparent">
        Visuals That Capture Attention
      </h2>

      {/* Video Section */}
      <div className="flex justify-center mt-8 sm:mt-10 md:mt-14 lg:mt-16 px-2 sm:px-0">
        <div className="w-full max-w-[320px] sm:max-w-[640px] md:max-w-[960px] lg:max-w-[1200px]">
          <video
            src="/Preview.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full aspect-video object-cover rounded-[12px] sm:rounded-[20px] md:rounded-[30px] lg:rounded-[42px] shadow-lg sm:shadow-xl h-[200px] sm:h-[300px] md:h-[400px] lg:h-[550px]"
          />
        </div>
      </div>
    </section>
  );
}
