import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function ContactCards() {
  return (
    <section className="py-20 px-6 text-center">
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
          bg-[linear-gradient(99.87deg,#FFFFFF_11.68%,rgba(255,255,255,0.15)_100%)]
          bg-clip-text
          text-transparent
          mb-10"
      >
        REACH US <span>DIRECTLY</span>
      </h2>

      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div className="p-8 rounded-xl bg-[#1D293D80] border border-[#314158]">
          <FaEnvelope className="mx-auto text-[#FE9A00] mb-4" size={38} />
          <p className="text-[#FE9A00] font-inter font-medium">Email</p>
          <p className="text-gray-400 mt-2 text-sm font-inter">
            concierge@vipmyconcierge.com
          </p>
        </div>

        <div className="p-8 rounded-xl bg-[#1D293D80] border border-[#314158]">
          <FaPhone className="mx-auto text-[#FE9A00] mb-4" size={38} />
          <p className="text-[#FE9A00] font-inter font-medium">Phone</p>
          <p className="text-gray-400 mt-2 font-inter">+33 7 68 57 02 49</p>
        </div>

        <div className="p-8 rounded-xl bg-[#1D293D80] border border-[#314158]">
          <FaMapMarkerAlt className="mx-auto text-[#FE9A00] mb-4" size={38} />
          <p className="text-[#FE9A00] font-inter font-medium">Address</p>
          <p className="text-gray-400 mt-2 font-inter">
            78 Avenue des Champs-Élysées <br />
            Paris, France
          </p>
        </div>

        <div className="p-8 rounded-xl bg-[#1D293D80] border border-[#314158]">
          <FaClock className="mx-auto text-[#FE9A00] mb-4" size={38} />
          <p className="text-[#FE9A00] font-inter font-medium">
            Service Availability
          </p>
          <p className="text-gray-400 mt-2 font-inter">24/7 Premium Response</p>
        </div>
      </div>
    </section>
  );
}
