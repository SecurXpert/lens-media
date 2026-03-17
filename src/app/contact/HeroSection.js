export default function HeroSection() {
  return (
    <section className="relative h-[520px] flex items-center justify-center text-center">
      <img
        src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      <div className="relative max-w-5xl px-6">
        <h1 className="text-5xl font-bold font-[Azonix] tracking-widest">
          CONNECT WITH <span className="text-[#FE9A00]">EXCELLENCE</span>
        </h1>

        <p className="mt-6 text-gray-300 text-lg leading-relaxed">
          We're here to assist you 24/7 with personalized attention and absolute
          discretion.
        </p>
      </div>
    </section>
  );
}
