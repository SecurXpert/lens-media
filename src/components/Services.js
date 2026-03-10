import Image from "next/image";

export default function Services() {
  const cards = [1, 2, 3, 4, 5];

  const cardShape =
    "path('M26.9565 65.8697C79.1947 39.9276 131.815 26.9565 184.829 26.9565C237.843 26.9565 291.239 39.9276 345.017 65.8697C345.017 230.108 345.017 394.359 345.017 558.598C289.7 543.101 235.528 535.365 182.513 535.365C129.512 535.365 77.6553 543.101 26.9565 558.598C26.9565 394.359 26.9565 230.108 26.9565 65.8697Z')";

  return (
    <section className="w-full bg-black py-20 flex justify-center">
      <div className="flex items-center justify-center gap-1">
        {cards.map((_, index) => {
          let size = "w-[320px] h-[520px]";

          if (index === 0 || index === 4) {
            size = "w-[220px] h-[380px]";
          } else if (index === 1 || index === 3) {
            size = "w-[280px] h-[450px]";
          }

          return (
            <div
              key={index}
              className={`relative flex-shrink-0 ${size} bg-black/60 shadow-[0px_0px_30px_#E57600]`}
              style={{ clipPath: cardShape }}
            >
              {index === 2 && (
                <Image
                  src="/services1.jpg"
                  alt="service"
                  fill
                  className="object-cover"
                />
              )}

              <div className="absolute inset-0 bg-black/50" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
