export default function HeroSection() {
  return (
    <div className="">
      <div className="text-center">
        <h1
          className="text-[50px] sm:text-[50px] md:text-[50px] lg:text-[80px] font-[Azonix] leading-[80px] sm:leading-[100px] md:leading-[130px] lg:leading-[156.2px] text-center align-middle   
                     bg-[linear-gradient(99.87deg,#FFFFFF_30%,rgba(255,255,255,0)_100%)] 
                     bg-clip-text text-transparent"
        >
          About Us
        </h1>
        <p className="text-[#f1f4fc] text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-Montserrat max-w-2xl mx-auto px-4">
         Transforming visions into cinematic reality through high-impact production.
        </p>
      </div>
      <div className="">
        <img
          src="/aboutimg1.png"
          alt="About Us"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}
