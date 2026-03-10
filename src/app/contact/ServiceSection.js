import { FaCheckCircle, FaShieldAlt, FaGlobe } from "react-icons/fa";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });
export default function ServiceSection() {
  return (
    <section className="py-16 px-6 text-center">
      <h2
        className="font-[Azonix]
          font-bold
          text-[20px]
          sm:text-[15px]
          md:text-[25px]
          lg:text-[30px]
          leading-tight
          lg:leading-[34px]
          text-center
          bg-[linear-gradient(99.87deg,#FFFFFF_11.68%,rgba(255,255,255,0)_100%)]
          bg-clip-text
          text-transparent
          mb-5"
      >
        CERTIFIED SERVICE, TRUSTED WORLDWIDE
      </h2>

      <p
        className={`text-gray-400 mb-14 max-w-2xl mx-auto ${montserrat.className}`}
      >
        We pride ourselves on quick responses, absolute confidentiality, and
        world-class service from the first message to your final
        destination.{" "}
      </p>

      <div className="grid md:grid-cols-3 gap-5 max-w-7xl mx-auto">
        <div className="p-8 rounded-xl bg-[linear-gradient(135deg,rgba(251,244,237,0.2)_0%,rgba(75,71,68,0.2)_100%)] flex flex-col h-full">
          <FaCheckCircle size={38} className="text-[#FE9A00] mx-auto mb-4" />
          <h3 className="text-[#FE9A00] font-[Azonix] mb-5 text-2xl">
            QUICK RESPONSE
          </h3>
          <p className={`text-[#D1D5DC]${montserrat.className} mt-auto`}>
            Professional team responds within minutes, 24/7
          </p>
        </div>

        <div className="py-8 rounded-xl bg-[linear-gradient(135deg,rgba(251,244,237,0.2)_0%,rgba(75,71,68,0.2)_100%)] flex flex-col h-full">
          <FaShieldAlt size={38} className="text-[#FE9A00] mx-auto mb-4" />
          <h3 className="text-[#FE9A00] font-[Azonix] mb-5 text-2xl">
            ABSOLUTE CONFIDENTIALITY
          </h3>
          <p className={`text-[#D1D5DC]${montserrat.className} mt-auto`}>
            Military-grade privacy protection for all communications
          </p>
        </div>

        <div className="p-8 rounded-xl bg-[linear-gradient(135deg,rgba(251,244,237,0.2)_0%,rgba(75,71,68,0.2)_100%)] flex flex-col h-full">
          <FaGlobe size={38} className="text-[#FE9A00] mx-auto mb-4" />
          <h3 className="text-[#FE9A00] font-[Azonix] mb-5 text-2xl">
            WORLD-CLASS SERVICE
          </h3>
          <p className={`text-[#D1D5DC]${montserrat.className} mt-auto`}>
            International standards of luxury and excellence
          </p>
        </div>
      </div>
    </section>
  );
}
