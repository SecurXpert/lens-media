export default function Services() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="/ourservicebg.png"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Title */}
      <h1 className="absolute top-8 sm:top-15 md:top-16 left-1/2 -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[Azonix] tracking-widest text-white z-0">
        OUR SERVICES
      </h1>

      {/* Person Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="/ourserviceimg1.png"
          alt="model with camera"
          className="h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] object-contain z-10"
        />
      </div>

      {/* Left Content Card */}
      <div className="absolute left-4 sm:left-8 md:left-16 lg:left-24 top-1/2 -translate-y-1/2 max-w-[200px] sm:max-w-[250px] z-20">
        <div className=" backdrop-blur-sm p-4 sm:p-6 rounded-lg">
         
          {/* Text */}
          <p className="text-xs sm:text-sm text-white leading-relaxed">
            On This Website You Are Going
            To Discover Everything
            About..well, Me.
          </p>
        </div>
      </div>

      {/* Right Content Card */}
      <div className="absolute right-4 sm:right-8 md:right-16 lg:right-24 top-1/2 -translate-y-1/2 max-w-[220px] sm:max-w-[280px] z-20">
        <div className=" backdrop-blur-sm p-4 sm:p-6 rounded-lg">
          <h3 className="text-sm sm:text-base md:text-lg font-bold tracking-widest mb-2 sm:mb-3 text-white">
            DEREK
          </h3>
          <p className="text-xs sm:text-sm text-white leading-relaxed">
            Fashion Tips Can Help Push You
            Towards The Life That You Want
            To Create For Yourself.
          </p>
        </div>
      </div>

      {/* Decorative Orange Lines */}
      <div className="absolute left-0 top-24 sm:top-28 md:top-32 w-24 sm:w-32 h-0.5 sm:h-1 bg-orange-500 z-30"></div>
      <div className="absolute right-0 top-24 sm:top-28 md:top-32 w-24 sm:w-32 h-0.5 sm:h-1 bg-orange-500 z-30"></div>
      {/* Bottom Curved Decoration */}
      <div className="absolute bottom-0 w-full flex justify-center z-10">
        <div className="w-[100%] sm:w-[120%] h-16 sm:h-20 md:h-24 lg:h-32 border-t-2 sm:border-t-4 border-orange-500/40 rounded-t-full"></div>
      </div>
    </section>
  );
}