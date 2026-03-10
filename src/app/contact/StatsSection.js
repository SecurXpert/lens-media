export default function StatsSection() {
  return (
    <section className="text-center px-20 py-10">
      <div className="bg-[linear-gradient(90deg,#2C2B2B_0%,#272626_100%)] rounded-2xl p-10 mb-10">
        <p className="text-[#FE9A00] mb-4 text-3xl">
          Experience the pinnacle of personalized service.
        </p>

        <p className="text-white text-3xl">Contact VipMyConcierge today.</p>
      </div>

      <div className="flex justify-center gap-24 flex-wrap">
        <div>
          <h1 className="text-9xl text-[#FE9A00] font-inter">24/7</h1>
          <p className="text-white mt-2 font-inter text-4xl mt-7">
            Excellence Support
          </p>
        </div>

        <div>
          <h1 className="text-9xl text-[#FE9A00] font-inter">100%</h1>
          <p className="text-white mt-2 font-inter text-4xl mt-7">
            Client Satisfaction
          </p>
        </div>
      </div>
    </section>
  );
}
