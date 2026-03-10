import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });

export default function ContactHeader() {
  return (
    <section className=" py-10 px-6 text-center">
      <h2
        className="font-[Azonix]
          font-bold
          text-[30px]
          sm:text-[35px]
          md:text-[45px]
          lg:text-[60px]
          leading-tight
          lg:leading-[84px]
          text-center
          bg-[linear-gradient(99.87deg,#FFFFFF_11.68%,rgba(255,255,255,0)_100%)]
          bg-clip-text
          text-transparent"
      >
        LET'S TALK
      </h2>

      <p className={`text-gray-400 max-w-2xl mx-auto ${montserrat.className}`}>
        Have a question or special request? Fill out the form below and a member
        of our concierge team will contact you promptly.
      </p>
    </section>
  );
}
