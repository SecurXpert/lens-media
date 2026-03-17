import React from "react";
import { getProjectData } from "@/utils/project";
import Link from "next/link";
import {
  FaBuilding,
  FaCube,
  FaChartLine,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });

// Generate static params for static export
export function generateStaticParams() {
  return [
    { slug: "veloura" },
    { slug: "hyndav" },
    { slug: "manyavar" },
    { slug: "shoot" },
    { slug: "pure" },
    { slug: "aroma" },
  ];
}

/**
 * @param {{ params: Promise<{ slug: string }> }} props
 */
export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const project = getProjectData(slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Project Not Found
          </h1>
          <p className="text-gray-400">
            The project "{slug}" could not be found.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Available projects: veloura, hyndav, manyavar, shoot, pure, aroma
          </p>
        </div>
      </div>
    );
  }

  const DetailItem = ({ Icon, label, value }) => (
    <div className="flex items-start gap-3">
      <Icon className="text-[#FE9A00] text-lg mt-1" />
      <div>
        <p className="text-gray-500 text-xs">{label}</p>
        <p>{value}</p>
      </div>
    </div>
  );

  return (
    <section className="bg-black text-white">
      {/* TOP SECTION */}
      <section className="relative py-5 md:py-5 px-5 md:px-10">
        {/* BACK BUTTON */}
        <div className="mb-5 md:mb-10">
          <Link
            href="/projects"
            className="inline-block w-[100px] h-[40px] text-black font-semibold bg-gradient-to-r from-[#FE9A00] to-[#E17100] flex items-center justify-center shadow-[0px_10px_25px_rgba(254,154,0,0.4)] hover:scale-105 rounded-full font-[Azonix] text-sm text-center pt-3"
          >
            BACK
          </Link>
        </div>

        {/* VIDEO */}
        <div className="flex justify-center">
          <video
            src={project.video}
            className="w-full max-w-[1200px] h-auto md:h-[300px] lg:h-[550px] rounded-xl object-cover"
            controls
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Project preview video"
          />
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 px-6 md:px-10 pb-16">
        {/* LEFT SIDE */}
        <div className="flex-1 space-y-14">
          {/* STORY */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-[Azonix] tracking-[4px] md:tracking-[6px] mb-6 pt-10">
              {project.storyTitle}
            </h2>

            <p
              className={
                montserrat.className +
                " text-gray-400 leading-7 md:leading-8 text-sm md:text-lg"
              }
            >
              {project.storyText}
            </p>
          </div>

          {/* STRATEGY */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-[Azonix] tracking-[4px] md:tracking-[6px] mb-6">
              {project.strategyTitle}
            </h2>

            <p
              className={
                montserrat.className +
                " text-gray-400 leading-7 md:leading-8 text-sm md:text-lg mb-6"
              }
            >
              {project.strategyText}
            </p>

            {/* STRATEGY POINTS */}
            <ul
              className={
                montserrat.className +
                " space-y-3 text-gray-400 text-sm md:text-lg"
              }
            >
              {project.strategyPoints?.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#ED8301]">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE PROJECT DETAILS */}
        <div
          className="w-full lg:w-[420px] rounded-xl p-6 md:p-8 h-fit"
          style={{
            background: "linear-gradient(135deg, #181b1aff 0%, #000000 100%)",
            border: "1.35px solid #FE9A0033",
          }}
        >
          <h3 className="text-[#FFB900] text-lg font-semibold mb-6 font-[Azonix]">
            PROJECT DETAILS
          </h3>

          <div className={montserrat.className + " space-y-6 text-sm"}>
            {/* CLIENT */}
            <DetailItem
              Icon={FaBuilding}
              label="CLIENT"
              value={project.projectDetails.client}
            />

            <hr className="border-gray-800" />

            {/* SERVICE TYPE */}
            <DetailItem
              Icon={FaCube}
              label="SERVICE TYPE"
              value={project.projectDetails.serviceType}
            />

            <hr className="border-gray-800" />

            {/* INDUSTRY */}
            <DetailItem
              Icon={FaChartLine}
              label="INDUSTRY"
              value={project.projectDetails.industry}
            />

            <hr className="border-gray-800" />

            {/* DURATION */}
            <DetailItem
              Icon={FaClock}
              label="DURATION"
              value={project.projectDetails.duration}
            />

            <hr className="border-gray-800" />

            {/* DURATION */}
            <div className="flex items-start gap-3">
              <FaClock className="text-[#FE9A00] text-lg mt-1" />
              <div>
                <p className="text-gray-500 text-xs">DURATION</p>
                <p>{project.projectDetails.duration}</p>
              </div>
            </div>

            <hr className="border-gray-800" />

            {/* DELIVERABLES */}
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-[#FE9A00] text-lg mt-1" />

              <div>
                <p className="text-gray-500 text-xs mb-3">DELIVERABLES</p>

                <ul className={montserrat.className + " space-y-2"}>
                  {project.projectDetails.deliverables.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#FE9A00] rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
