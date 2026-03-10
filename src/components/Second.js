"use client";

export default function Second() {
  return (
    <section className="pt-16 sm:pt-20 px-6">
      {/* Heading */}
      <h2 className="font-[Azonix] font-bold text-center text-[32px] sm:text-[48px] md:text-[64px] lg:text-[77px] leading-tight md:leading-[72px] lg:leading-[84px] bg-[linear-gradient(99.87deg,#FFFFFF_11.68%,rgba(255,255,255,0.15)_100%)] bg-clip-text text-transparent">
        Visuals That Capture Attention
      </h2>

      {/* Video Section */}
      <div className="flex justify-center mt-10 sm:mt-14 lg:mt-16">
        <video
          src="/Preview.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full max-w-[1200px] aspect-video object-cover rounded-[20px] sm:rounded-[30px] lg:rounded-[42px]"
        />
      </div>
    </section>
  );
}
