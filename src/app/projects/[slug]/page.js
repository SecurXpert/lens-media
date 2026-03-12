'use client';

import React from 'react';
import { getProjectData } from '@/utils/project';
import { useParams } from 'next/navigation';

export default function Project1() {
  const params = useParams();
  const slug = params.slug;
  const project = getProjectData(slug);

  return (
    <>
      <section className="bg-black">
         <section className="relative py-28 px-6">

      {/* Back Button */}
      <div className="pl-15">
      <button className="w-[118px] h-[45px]  px-[33px] py-[17px] text-black font-semibold bg-gradient-to-r from-[#FE9A00] to-[#E17100] flex items-center justify-center shadow-[0px_10px_25px_rgba(254,154,0,0.4)] hover:scale-105">
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
     <section className="bg-black text-white flex justify-center gap-36">

      {/* STORY */}
      <div className="max-w-xl">
        <h2 className="text-3xl font-semibold tracking-widest mb-6">
          {project.storyTitle}
        </h2>

        <p className="text-gray-400 leading-7 text-sm">
          {project.storyText}
        </p>
      </div>


      {/* PROJECT DETAILS */}
      <section></section>
      <div className="w-[480px] rounded-xl p-8" style={{ background: 'linear-gradient(135deg, #181b1aff 0%, #000000 100%)', border: '1.35px solid #FE9A0033' }}>

        <h3 className="text-[#FFB900] text-lg font-semibold mb-6 font-[azonix]">
          PROJECT DETAILS
        </h3>

        <div className="space-y-6 text-sm">

          <div>
            <p className="text-gray-500 text-xs">CLIENT</p>
            <p>{project.projectDetails.client}</p>
          </div>

          <hr className="border-gray-800" />

          <div>
            <p className="text-gray-500 text-xs">SERVICE TYPE</p>
            <p>{project.projectDetails.serviceType}</p>
          </div>

          <hr className="border-gray-800" />

          <div>
            <p className="text-gray-500 text-xs">INDUSTRY</p>
            <p>{project.projectDetails.industry}</p>
          </div>

          <hr className="border-gray-800" />

          <div>
            <p className="text-gray-500 text-xs">DURATION</p>
            <p>{project.projectDetails.duration}</p>
          </div>

          <hr className="border-gray-800" />

          <div>
            <p className="text-gray-500 text-xs mb-3">DELIVERABLES</p>

            <ul className="space-y-2">
              {project.projectDetails.deliverables.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#FFB900] rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>

          </div>

        </div>
      </div>

    <section>
      
    </section>
    </section>
      </section>
    </>
  );
}
