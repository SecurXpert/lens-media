"use client";

import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { IoCameraOutline, IoPlayOutline } from "react-icons/io5";
import { PiMagicWand } from "react-icons/pi";
import { TbShare } from "react-icons/tb";
import { IoIosColorPalette } from "react-icons/io";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { GoTable } from "react-icons/go";
import { GrCursor } from "react-icons/gr";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { VscGraph } from "react-icons/vsc";
import { GrLineChart } from "react-icons/gr";
import { CiGlobe } from "react-icons/ci";
import { LuFilter } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GoPin } from "react-icons/go";
import { WiStars } from "react-icons/wi";

export default function Services() {
  const carouselImage5 = [
    "/cont5.1.png",
    "/cont5.2.png",
    "/cont5.3.png",
    "/cont5.4.png",
  ];
  const carouselImage4 = [
    "/cont4.1.png",
    "/cont4.2.png",
    "/cont4.3.png",
    "/cont4.4.png",
  ];
  const carouselImage3 = [
    "/cont3.1.png",
    "/cont3.2.png",
    "/cont3.3.png",
    "/cont3.4.png",
  ];
  const carouselImage2 = [
    "/cont2.1.png",
    "/cont2.2.png",
    "/cont2.3.png",
    "/cont2.4.png",
  ];
  const carouselImage1 = [
    "/cont1.1.png",
    "/cont1.2.png",
    "/cont1.3.png",
    "/cont1.4.png",
  ];

  return (
    <>
      <section className="bg-black">
        <section className="relative overflow-hidden pb-5">
          {/* Background Image */}
          <img src="/ourservicebg.png" alt="background" className="" />

          {/* Title */}
          <h1 className="absolute top-30 left-1/2 -translate-x-1/2 text-center tracking-[18px] text-white z-30 w-full font-bold">
            {/* <span style={{ fontSize: 'calc(60rem + 120px)' }} className="md:hidden">OUR SERVICES</span> */}
            <span style={{ fontSize: 'calc(6rem + 22px)' }} className="hidden md:block font-[Azonix]">OUR SERVICES</span>
          </h1>

          {/* LEFT SIDE IMAGE */}
          <div className="absolute left-[-2%] top-2/5 -translate-y-1/2 z-20 pb-">
            <img
              src="/ourservicebg1.png"
              alt="left decoration"
              className="translate-y-[-5%] h-auto  md:max-w-md"
            />
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="absolute right-0 top-2/13 -translate-y-1/2 z-20">
            <img
              src="/ourservicebg2.png"
              alt="right decoration"
              className="translate-y-[-5%] h-auto max-w-xs md:max-w-md"
            />
          </div>

          {/* Model Image */}
          <div className="absolute inset-0 flex items-end justify-center z-30">
            <img
              src="/ourserviceimg1.png"
              alt="model"
              className="h-[80vh] md:h-[102vh] object-contain translate-x-[-16%] translate-y-[-6%]"
            />
          </div>
          {/* LEFT TEXT */}
          <div className="absolute left-20 top-2/3 -translate-y-1/2 max-w-[220px] text-white z-30">
             <GoPin className="bg-[#fb9600] p-2.5 w-14 h-14 text-white rounded-[10]" />
            <p className="text-sm leading-relaxed text-white/90 pt-4">
              On this website you will discover
              our passion for capturing real moments.
              From weddings to special events,
              We turn memories into timeless stories.
            </p>
          </div>

          {/* RIGHT TEXT */}
          <div className="absolute right-20 top-2/3 -translate-y-1/2 max-w-[260px] text-white z-30">
            <WiStars className="text-7xl translate-y-[-150px] translate-x-[-100px] text-[#fb9600]"/>
            <h3 className="font-semibold">DEREK</h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Every moment has a story.
              We capture emotions, love
              and unforgettable memories
              through our lens and creativity.
            </p>
          </div>

          {/* Top Curved Lines */}
          <div className="absolute top-0 w-full flex justify-center z-20">
            <div className="relative w-[100%] h- pb-228">
              <div className="absolute inset-0 border-b border-orange-500/90 rounded-b-full"></div>
              <div className="absolute inset-4 border-b border-orange-500/90 rounded-b-full"></div>
              <div className="absolute inset-8 border-b border-orange-500/90 rounded-b-full"></div>
              <div className="absolute inset-12 border-b border-orange-500/90 rounded-b-full"></div>
            </div>
          </div>
        </section>
        <section className="w-full min-h-screen text-white">
          <div className="grid md:grid-cols-2 grid-cols-1">
            {/* 1 LEFT IMAGE */}
            <div className="relative">
              <Carousel
                data-bs-theme="dark"
                interval={1000}
                controls={false}
                indicators={false}
                slide={true}
                fade={false}
                pause={false}
                wrap={true}
                touch={false}
              >
                {carouselImage1.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={image}
                      alt={`Slide ${index + 1}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>

            {/* TOP RIGHT CONTENT */}
            <div className="flex flex-col justify-center px-10 md:px-16 py-12 bg-[#0b0b0b]">
              <span className="text-yellow-500 text-sm mb-3">01</span>

              <h2 className="text-3xl md:text-4xl font-[Azonix] mb-4 tracking-wide">
                CREATIVE PRODUCTION
              </h2>

              <p className="text-gray-400 font-Montserrat mb-8 max-w-lg">
                We create powerful visual stories that capture real emotions and unforgettable moments.
                From professional photography to cinematic videography, we turn every special occasion into a beautiful memory.
              </p>

              {/* SERVICES BUTTONS */}
              <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mb-8">
                <div className="bg-[#1C1C1C] rounded-2xl p-6 flex items-center space-x-4 hover:bg-[#2a2a2a] transition-colors">
                  <IoCameraOutline className="text-yellow-500 text-2xl" />
                  <span className="text-gray-400 font-Montserrat">
                    Photography
                  </span>
                </div>

                <div className="bg-[#1C1C1C] rounded-2xl p-6 flex items-center space-x-4 hover:bg-[#2a2a2a] transition-colors">
                  <IoPlayOutline className="text-yellow-500 text-2xl" />
                  <span className="text-gray-400 font-Montserrat">
                    Videography
                  </span>
                </div>

                <div className="bg-[#1C1C1C] rounded-2xl p-6 flex items-center space-x-4 hover:bg-[#2a2a2a] transition-colors">
                  <PiMagicWand className="text-yellow-500 text-2xl" />
                  <span className="text-gray-400 font-Montserrat">
                    Pre-Wedding Shoots
                  </span>
                </div>

                <div className="bg-[#1C1C1C] rounded-2xl p-6 flex items-center space-x-4 hover:bg-[#2a2a2a] transition-colors">
                  <TbShare className="text-yellow-500 text-2xl" />
                  <span className="text-gray-400 font-Montserrat">
                    Social Media Content
                  </span>
                </div>
              </div>

              <a
                href="#"
                className="text-sm tracking-wider font-semibold"
                style={{ color: '#fb9600', textDecoration: 'none' }}
              >
                EXPLORE SERVICE →
              </a>
            </div>

            {/* BOTTOM LEFT CONTENT */}
            <div className="flex flex-col justify-center px-10 md:px-16 py-12 bg-[#0b0b0b]">
              <span className="text-yellow-500 text-sm mb-3">02</span>

              <h2 className="text-3xl md:text-4xl font-[Azonix] mb-4 tracking-wide">
                BRANDING & DESIGN
              </h2>

              <p className="text-gray-400 font-Montserrat mb-8 max-w-lg">
                Powerful visual identities that make brands stand out.From logo design to social media creatives,
                everything crafted to build a strong and memorable brand presence.
              </p>

              <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mb-8">
                <div className="bg-[#1C1C1C] rounded-2xl p-6 flex items-center space-x-4 hover:bg-[#2a2a2a] transition-colors">
                  <IoIosColorPalette className="text-yellow-500 text-2xl" />
                  <span className="text-gray-400 font-Montserrat">
                    Brand Identity Design
                  </span>
                </div>

                <div className="bg-[#1C1C1C] rounded-2xl p-6 flex items-center space-x-4 hover:bg-[#2a2a2a] transition-colors">
                  <HiArrowPathRoundedSquare className="text-yellow-500 text-2xl" />
                  <span className="text-gray-400 font-Montserrat">
                    Brand Management
                  </span>
                </div>

                <div className="bg-[#1C1C1C] rounded-2xl p-6 flex items-center space-x-4 hover:bg-[#2a2a2a] transition-colors">
                  <GrCursor className="text-yellow-500 text-2xl" />
                  <span className="text-gray-400 font-Montserrat">
                    UI/UX Design
                  </span>
                </div>

                <div className="bg-[#1C1C1C] rounded-2xl p-6 flex items-center space-x-4 hover:bg-[#2a2a2a] transition-colors">
                  <GoTable className="text-yellow-500 text-2xl" />
                  <span className="text-gray-400 font-Montserrat">
                    Website Design
                  </span>
                </div>
              </div>

              <a
                href="#"
                className="text-sm tracking-wider font-semibold"
                style={{ color: '#fb9600', textDecoration: 'none' }}
              >
                EXPLORE SERVICE →
              </a>
            </div>

            {/*  2 RIGHT IMAGE */}
            <div className="relative">
              <Carousel
                data-bs-theme="dark"
                interval={1000}
                controls={false}
                indicators={false}
                slide={true}
                fade={false}
                pause={false}
                wrap={true}
                touch={false}
              >
                {carouselImage2.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={image}
                      alt={`Slide ${index + 1}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>

            {/* 3  LEFT IMAGE */}
            <div className="relative">
              <Carousel
                data-bs-theme="dark"
                interval={1000}
                controls={false}
                indicators={false}
                slide={true}
                fade={false}
                pause={false}
                wrap={true}
                touch={false}
              >
                {carouselImage3.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={image}
                      alt={`Slide ${index + 1}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
            {/* TOP RIGHT CONTENT */}
            <div className="flex flex-col justify-center px-10 md:px-16 py-12 bg-[#0b0b0b]">
              <span className="text-yellow-500 text-sm mb-3">03</span>

              <h2 className="text-3xl md:text-4xl font-[Azonix] mb-4 tracking-wide">
                PERFORMANCE MARKETING
              </h2>

              <p className="text-gray-400 font-Montserrat mb-8 max-w-lg">
                Data-driven marketing strategies designed to generate quality leads and real business growth.
                Focused on reaching the right audience, increasing conversions and maximizing return on investment.
              </p>

              {/* SERVICES BUTTONS */}
              <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mb-8">
                <div className="bg-[#1C1C1C] rounded-2xl p-6 flex items-center space-x-4 hover:bg-[#2a2a2a] transition-colors">
                  <HiMiniMagnifyingGlass className="text-yellow-500 text-2xl" />
                  <span className="text-gray-400 font-Montserrat">
                    Google Ads
                  </span>
                </div>

                <div className="bg-[#1C1C1C] rounded-2xl p-6 flex items-center space-x-4 hover:bg-[#2a2a2a] transition-colors">
                  <TbShare className="text-yellow-500 text-2xl" />
                  <span className="text-gray-400 font-Montserrat">
                    Meta Ads
                  </span>
                </div>

                <div className="bg-[#1C1C1C] rounded-2xl p-6 flex items-center space-x-4 hover:bg-[#2a2a2a] transition-colors">
                  <VscGraph className="text-yellow-500 text-2xl" />
                  <span className="text-gray-400 font-Montserrat">
                    SEM
                  </span>
                </div>

                <div className="bg-[#1C1C1C] rounded-2xl p-6 flex items-center space-x-4 hover:bg-[#2a2a2a] transition-colors">
                  <GrLineChart className="text-yellow-500 text-2xl" />
                  <span className="text-gray-400 font-Montserrat">
                    Retargeting
                  </span>
                </div>
              </div>

              <a
                href="#"
                className="text-sm tracking-wider font-semibold"
                style={{ color: '#fb9600', textDecoration: 'none' }}
              >
                EXPLORE SERVICE →
              </a>
            </div>

            {/* BOTTOM LEFT CONTENT */}
            <div className="flex flex-col justify-center px-10 md:px-16 py-12 bg-[#0b0b0b]">
              <span className="text-yellow-500 text-sm mb-3">04</span>

              <h2 className="text-3xl md:text-4xl font-[Azonix] mb-4 tracking-wide">
              Digital Marketing
              </h2>

              <p className="text-gray-400 font-Montserrat mb-8 max-w-lg ">
                We build digital ecosystems that don't just exist, they lead. From search authority to social influence,
                our strategy is engineered for market capture and compounding ROI.
              </p>

              <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mb-8">
                <div className="bg-[#1C1C1C] rounded-2xl p-6 flex items-center space-x-4 hover:bg-[#2a2a2a] transition-colors">
                  <HiMiniMagnifyingGlass className="text-yellow-500 text-2xl" />
                  <span className="text-gray-400 font-Montserrat">
                    SEO
                  </span>
                </div>

                <div className="bg-[#1C1C1C] rounded-2xl p-6 flex items-center space-x-4 hover:bg-[#2a2a2a] transition-colors">
                  <CiGlobe className="text-yellow-500 text-2xl" />
                  <span className="text-gray-400 font-Montserrat">
                  SMM
                  </span>
                </div>

                <div className="bg-[#1C1C1C] rounded-2xl p-6 flex items-center space-x-4 hover:bg-[#2a2a2a] transition-colors">
                  <GoTable className="text-yellow-500 text-2xl" />
                  <span className="text-gray-400 font-Montserrat">
                    Content
                  </span>
                </div>

                <div className="bg-[#1C1C1C] rounded-2xl p-6 flex items-center space-x-4 hover:bg-[#2a2a2a] transition-colors">
                  <LuFilter className="text-yellow-500 text-2xl" />
                  <span className="text-gray-400 font-Montserrat">
                  Leads
                  </span>
                </div>
              </div>

              <a
                href="#"
                className="text-sm tracking-wider font-semibold"
                style={{ color: '#fb9600', textDecoration: 'none' }}
              >
                EXPLORE SERVICE →
              </a>
            </div>

            {/* 4 RIGHT IMAGE */}
            <div className="relative">
              <Carousel
                data-bs-theme="dark"
                interval={1000}
                controls={false}
                indicators={false}
                slide={true}
                fade={false}
                pause={false}
                wrap={true}
                touch={false}
              >
                {carouselImage4.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={image}
                      alt={`Slide ${index + 1}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>

            {/* 5 LEFT IMAGE */}
            <div className="relative">
              <Carousel
                data-bs-theme="dark"
                interval={1000}
                controls={false}
                indicators={false}
                slide={true}
                fade={false}
                pause={false}
                wrap={true}
                touch={false}
              >
                {carouselImage5.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={image}
                      alt={`Slide ${index + 1}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>

            {/* TOP RIGHT CONTENT */}
            <div className="flex flex-col justify-center px-10 md:px-16 py-12 bg-[#0b0b0b]">
              <span className="text-yellow-500 text-sm mb-3">05</span>

              <h2 className="text-3xl md:text-4xl font-[Azonix] mb-4 tracking-wide">
                Conversion & Funnel Optimization
              </h2>

              <p className="text-gray-400 font-Montserrat mb-8 max-w-lg">
                We don't just drive traffic; we capture it. Our team builds high-performance funnels and intelligent automation
                sequences that turn casual browsers into high-lifetime-value customers while you sleep.
              </p>

              {/* SERVICES BUTTONS */}
              <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mb-8">
                <div className="bg-[#1C1C1C] rounded-2xl p-6 flex items-center space-x-4 hover:bg-[#2a2a2a] transition-colors">
                  <GoTable className="text-yellow-500 text-2xl" />
                  <span className="text-gray-400 font-Montserrat">
                    Landing Page Strategy
                  </span>
                </div>

                <div className="bg-[#1C1C1C] rounded-2xl p-6 flex items-center space-x-4 hover:bg-[#2a2a2a] transition-colors">
                  <LuFilter className="text-yellow-500 text-2xl" />
                  <span className="text-gray-400 font-Montserrat">
                    Funnel Design
                  </span>
                </div>

                <div className="bg-[#1C1C1C] rounded-2xl p-6 flex items-center space-x-4 hover:bg-[#2a2a2a] transition-colors">
                  <MdOutlineMail className="text-yellow-500 text-2xl" />
                  <span className="text-gray-400 font-Montserrat">
                    Lead Nurturing Flows
                  </span>
                </div>

                <div className="bg-[#1C1C1C] rounded-2xl p-6 flex items-center space-x-4 hover:bg-[#2a2a2a] transition-colors">
                  <GrLineChart className="text-yellow-500 text-2xl" />
                  <span className="text-gray-400 font-Montserrat">
                    CRO
                  </span>
                </div>

                <div className="bg-[#1C1C1C] rounded-2xl p-6 flex items-center space-x-4 hover:bg-[#2a2a2a] transition-colors">
                  <AiOutlineThunderbolt className="text-yellow-500 text-2xl" />
                  <span className="text-gray-400 font-Montserrat">
                    Marketing Automation
                  </span>
                </div>
              </div>

              <a
                href="#"
                className="text-sm tracking-wider font-semibold"
                style={{ color: '#fb9600', textDecoration: 'none' }}
              >
                EXPLORE SERVICE →
              </a>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
