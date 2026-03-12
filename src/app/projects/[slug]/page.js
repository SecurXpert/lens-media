"use client";

import React from "react";
import { getProjectData } from "@/utils/project";
import { useParams } from "next/navigation";
import {
  FaBuilding,
  FaCube,
  FaChartLine,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

export default function ProjectDetail() {
  const params = useParams();
  const slug = params.slug;
  const project = getProjectData(slug);

  console.log("Slug:", slug);
  console.log("Project:", project);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
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

  return (
    <>
      <section className="bg-black">
        <section className="relative py-15 px-6">
          {/* Back Button */}
          <div className="pl-10 mb-20">
            <button className="w-[100px] h-[40px] text-black font-semibold bg-gradient-to-r from-[#FE9A00] to-[#E17100] flex items-center justify-center shadow-[0px_10px_25px_rgba(254,154,0,0.4)] hover:scale-105 rounded-4xl font-[Azonix]">
              BACK
            </button>
          </div>

          {/* Image Container */}
          <div className="flex justify-center">
            <div className="">
              <video
                src={project.video}
                alt="project"
                className="w-230 h-130 rounded-xl object-cover"
                controls
                autoPlay
                muted
                loop
              />
            </div>
          </div>
        </section>
        <section className="bg-black text-white flex justify-center gap-15">
          <div className="max-w-xl space-y-16 m-5">
            {/* STORY */}
            <div>
              <h2 className="text-4xl md:text-5xl font-[Azonix] tracking-[6px] text-white mb-8">
                {project.storyTitle}
              </h2>

              <p className="text-gray-400 leading-8 text-base md:text-lg font-Montserrat">
                {project.storyText}
              </p>
            </div>

            {/* STRATEGY */}
            <div>
              <h2 className="text-4xl md:text-5xl font-[Azonix] tracking-[6px] text-white mb-8">
                {project.strategyTitle}
              </h2>

              <p className="text-gray-400 leading-8 text-base md:text-lg font-Montserrat mb-6">
                {project.strategyText}
              </p>

              {/* Strategy Points */}
              <ul className="space-y-3 text-gray-400 text-base md:text-lg">
                {project.strategyPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#ED8301]">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* PROJECT DETAILS */}
          <section></section>
          <div
            className="w-[480px] rounded-xl p-8"
            style={{
              background: "linear-gradient(135deg, #181b1aff 0%, #000000 100%)",
              border: "1.35px solid #FE9A0033",
            }}
          >
            <h3 className="text-[#FFB900] text-lg font-semibold mb-6 font-[azonix]">
              PROJECT DETAILS
            </h3>

            <div className="space-y-6 text-sm">
              {/* CLIENT */}
              <div className="flex items-start gap-3">
                <FaBuilding className="text-[#FE9A00] text-lg mt-1" />
                <div>
                  <p className="text-gray-500 text-xs">CLIENT</p>
                  <p>{project.projectDetails.client}</p>
                </div>
              </div>

              <hr className="border-gray-800" />

              {/* SERVICE TYPE */}
              <div className="flex items-start gap-3">
                <FaCube className="text-[#FE9A00] text-lg mt-1" />
                <div>
                  <p className="text-gray-500 text-xs">SERVICE TYPE</p>
                  <p>{project.projectDetails.serviceType}</p>
                </div>
              </div>

              <hr className="border-gray-800" />

              {/* INDUSTRY */}
              <div className="flex items-start gap-3">
                <FaChartLine className="text-[#FE9A00] text-lg mt-1" />
                <div>
                  <p className="text-gray-500 text-xs">INDUSTRY</p>
                  <p>{project.projectDetails.industry}</p>
                </div>
              </div>

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

                  <ul className="space-y-2">
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

          <section></section>
        </section>
      </section>
    </>
  );
}
