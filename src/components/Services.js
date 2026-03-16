import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Performance Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      height: "h-[220px]",
      link: "/services/performance-marketing",
    },
    {
      title: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      height: "h-[260px]",
      link: "/services/digital-marketing",
    },
    {
      title: "Creative Production",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      height: "h-[320px]",
      link: "/services/creative-production",
    },
    {
      title: "Branding and Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
      height: "h-[260px]",
      link: "/services/branding-design",
    },
    {
      title: "Conversion & Funnel Optimization",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      height: "h-[220px]",
      link: "/services/conversion-funnel",
    },
  ];

  const sizeClasses = {
    small: "w-[250px], h-[250px]",
    medium: "w-[250px], h-[350px]",
    large: "w-[250px], h-[400px]",
  };

  return (
    <section>
      {/* Heading */}
      <h2 className="font-[Azonix] font-bold text-center text-[24px] sm:text-[32px] md:text-[48px] lg:text-[64px] xl:text-[77px] leading-tight md:leading-[72px] lg:leading-[84px] bg-[linear-gradient(99.87deg,#FFFFFF_11.68%,rgba(255,255,255,0.15)_100%)] bg-clip-text text-transparent mt-6 sm:mt-8 md:mt-10 px-4">
        Our Services
      </h2>

      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-black">
        {/* Responsive Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 place-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group w-full max-w-[220px] sm:max-w-[240px] md:max-w-[260px] lg:max-w-[280px] xl:max-w-[220px]
                ${service.height.replace("h-[220px]", "h-[180px] sm:h-[200px] md:h-[220px]").replace("h-[260px]", "h-[200px] sm:h-[230px] md:h-[260px]").replace("h-[320px]", "h-[240px] sm:h-[280px] md:h-[320px]")}
  bg-[#00000099] rounded-xl overflow-hidden
  shadow-[0_0_25px_rgba(254,154,0,0.45)]
  hover:shadow-[0_0_45px_rgba(254,154,0,0.8)]
  transition duration-300 flex flex-col`}
            >
              {/* Image Container */}
              <div className="flex-1 relative overflow-hidden">
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110 opacity-80"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80" />

                {/* Title */}
                <h3
                  className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2
      text-white text-sm sm:text-base md:text-lg font-semibold font-[Azonix] text-center px-2 sm:px-3"
                >
                  {service.title}
                </h3>

                {/* Explore Button */}
                <Link
                  href={service.link}
                  className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2
  text-[#FE9A00] font-semibold text-sm sm:text-base opacity-0
  group-hover:opacity-100 transition duration-300
  hover:text-orange-400"
                >
                  Explore Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
