"use client";

import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { useState } from "react";
import { FiTrendingUp } from "react-icons/fi";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const categories = [
  "All",
  "Digital Marketing",
  "Performance Marketing",
  "Photography & Videography",
  "Social Media Marketing",
  "AI Video Creation",
];

const blogs = [
  {
    id: 1,
    title: "Digital Marketing Growth Strategies 2026",
    desc: "How agencies use SEO, ads, and data-driven marketing to grow businesses faster.",
    date: "Nov 29, 2024",
    image: "/blogimg2.jpg",
    readTime: "7 min read",
    category: "Digital Marketing",
    views: "1.2K views",
    link: "/blogs/digital",
  },
  {
    id: 2,
    title: "Performance Marketing Services for High ROI Growth",
    desc: "Scale your business with data-driven performance marketing strategies that generate quality leads, reduce costs, and maximize return on investment.",
    date: "Nov 29, 2024",
    image: "/perfomance.jpg",
    readTime: "7 min read",
    category: "AI Video Creation",
    views: "856 views",
    link: "/blogs/ai-videos",
  },
  {
    id: 3,
    title: " Powerful Photography & Videography for Brand Growth",
    desc: " Stand out with professional visuals that capture attention, build trust, and drive real business results through creative storytelling.",
    date: "Nov 29, 2024",
    image: "/powerfull.jpg",
    readTime: "7 min read",
    category: "Performance Marketing",
    views: "2.4K views",
    link: "/blogs/performance",
  },
  {
    id: 4,
    title: " Video Production Services for Business Growth",
    desc: " In 2026, video content is driving business success. Discover how professional video production helps attract customers, increase engagement, and boost conversions with powerful marketing strategies.",
    date: "Nov 29, 2024",
    image: "/videoproduction.jpg",
    readTime: "8 min read",
    category: "Photography & Videography",
    views: "3.1K views",
    link: "/blogs/photography",
  },
  {
    id: 5,
    title: " Social Media Marketing Services for Business Growth",
    desc: "In 2026, social media is the key to business success. Discover how strategic content, targeted ads, and consistent engagement can increase visibility, generate leads, and scale your brand faster.",
    date: "Nov 29, 2024",
    image: "/socialmedia.jpg",
    readTime: "7 min read",
    category: "Social Media Marketing",
    views: "1.8K views",
    link: "/blogs/social",
  },
  {
    id: 6,
    title: " AI Video Creation: The Future of Content Marketing",
    desc: " Discover how AI video creation is transforming content marketing in 2026 — enabling faster production, lower costs, and high-performing videos that drive engagement and business growth.",
    date: "Nov 29, 2024",
    image: "/ai-video.jpg",
    readTime: "7 min read",
    category: "AI Video Creation",
    views: "923 views",
    link: "/blogs/product",
  },
];

export default function BlogsPage() {
  const [active, setActive] = useState("All");

  const filteredBlogs = active === "All" ? blogs : blogs.filter(blog => blog.category === active);
  return (
    <section className="bg-black text-white min-h-screen pb-8 sm:pb-16 px-0">
      {/* Heading */}
      <div className="relative text-center mb-8 sm:mb-12 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] flex items-center overflow-hidden w-full">
        {/* Test Image - Remove this once background works */}
        <Image
          src="/mainpageimg.png"  
          alt="Digital Marketing Hero"
          fill
          className="object-cover"
          style={{ objectPosition: "58% center" }}
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55"></div>

        {/* Content */}
        <div className="relative z-10 w-full px-4 px-0">
          <h1
            className="text-xl sm:text-2xl md:text-4xl lg:text-4xl font-bold tracking-wide w-full px-4 leading-tight"
            style={{
              fontFamily: "Azonix, sans-serif",
              background:
                "linear-gradient(99.87deg, #FFFFFF 11.68%, rgba(255, 255, 255, 0) 100%)",
              WebkitBackgroundClip: "text",
              // WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          > 
             Digital Marketing 2026 AI, SEO & Growth Strategies
          </h1>
          <p
            className={`text-xs sm:text-sm md:text-base lg:text-lg w-full sm:max-w-xl md:max-w-4xl mt-3 sm:mt-4 md:mt-5 mx-auto px-4 sm:px-0 ${montserrat.className}`}
          >
             Explore expert guides on AI video creation, performance marketing, SEO strategies, social media growth, and brand storytelling through photography & video. Boost your business growth and maximize ROI in 2026.
          </p>
        </div>
      </div>

      <div className="bg-black max-w-8xl w-full min-h-screen flex items-center justify-center sm:p-4 md:p-6">
        <div
          className="max-w-7xl w-full bg-[#111111] rounded-xl sm:rounded-2xl border border-gray-900 p-4 sm:p-6 md:p-10 flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 items-center"
          style={{ borderTop: "1.4px solid #D4A5741A" }}
        >
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/blogimg2.jpg" // put your image in public folder
              alt="Marketing"
              className="rounded-lg sm:rounded-xl w-full h-auto object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 text-white px-2 sm:px-0">
            <p className="text-orange-400 tracking-[0.3em] text-xs sm:text-sm mb-3 sm:mb-4 uppercase">
              FEATURED
            </p>

            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-[Azonix] mb-4 sm:mb-10 uppercase tracking-[3px] leading-[1.5] sm:leading-[1.5] md:leading-[1.5] lg:leading-[1.5]">
              Digital Marketing in 2026: AI-Powered Growth Strategies
            </h1>
            <p  className={`text-xs sm:text-sm md:text-base lg:text-lg w-full text-gray-300 pb-10 sm:max-w-xl md:max-w-4xl mt-3 sm:mt-4 md:mt-5 ml-[-0.4rem] sm:mx-auto px-2 sm:px-0 ${montserrat.className}`}>
              Discover how modern digital marketing agencies use AI, SEO,
              paid ads, and performance marketing to drive real business growth,
              increase conversions, and scale brands faster in 2026
            </p>

            <button className="flex items-center gap-2 border border-orange-400 text-orange-400 px-6 py-2.5 rounded-full text-sm">
              Read Story <span>→</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-black border-b border-gray-800 px-6">
        {/* Mobile Dropdown */}
        <div className="sm:hidden max-w-7xl mx-auto py-4">
          <select
            value={active}
            onChange={(e) => setActive(e.target.value)}
            className="w-full bg-[#111111] text-white border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-500"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat} className="bg-[#111111]">
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Desktop Horizontal Buttons */}
        <div className="hidden sm:flex max-w-7xl mx-auto gap-8 overflow-x-auto py-4 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`whitespace-nowrap text-sm md:text-base transition ${
                active === cat
                  ? "text-orange-500 font-medium"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <div className="bg-black py-16 px-6">
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredBlogs.map((blog) => (
            <Link href={blog.link} key={blog.id}>
              <div
                className="bg-[#111111] border border-gray-900 rounded-2xl overflow-hidden cursor-pointer"
                style={{ borderTop: "1.2px solid #D4A5741A" }}
              >
                {/* Image Section */}
                <div className="relative">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={500}
                    height={300}
                    className="w-full h-56 object-cover"
                  />

                  {/* Category Tag */}
                  <span className="absolute top-4 left-4 bg-[#E47501] text-white text-xs md:text-sm px-5 py-2 rounded-full tracking-[0.2em] font-medium shadow-md">
                    {blog.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h2
                    className={`text-white text-xl font-semibold mb-2 leading-6 ${montserrat.className}`}
                  >
                    {blog.title}
                  </h2>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {blog.desc}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center text-gray-500 text-sm gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4l3 3m0 0l-3-3"
                      />
                    </svg>
                    {blog.readTime}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-black px-6 pt-10">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6 max-w-7xl mx-auto">
          <FiTrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500"/>
          <h2 className="text-white text-2xl sm:text-4xl tracking-wider">
            Trending Stories
          </h2>
        </div>

        {/* Cards Row */}
        <div className="max-w-7xl mx-auto w-full overflow-hidden">
          <div className="flex gap-3 sm:gap-6 w-max sm:w-max animate-scroll">
            {/* Instagram Reels Strategy */}
            <div className="relative min-w-[200px] h-[280px] sm:min-w-[300px] sm:h-[380px] rounded-2xl overflow-hidden cursor-pointer">
              <Image
                src="/seoimg.jpg"
                alt="Instagram Reels Strategy"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-base sm:text-lg font-semibold leading-6 mb-2">
                  SEO Strategies for Organic Growth
                </h3>
                <div className="flex items-center gap-2 text-orange-400 text-xs sm:text-sm">
                  <FiTrendingUp className="w-4 h-4" />
                  <span>18.5K views</span>
                </div>
              </div>
            </div>

            {/* Google Analytics 4 */}
            <div className="relative min-w-[200px] h-[280px] sm:min-w-[300px] sm:h-[380px] rounded-2xl overflow-hidden cursor-pointer">
              <Image
                src="/perfomancecard.jpg"
                alt="Performance Marketing"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-base sm:text-lg font-semibold leading-6 mb-2">
                  Performance Marketing Tips for Higher ROI
                </h3>
                <div className="flex items-center gap-2 text-orange-400 text-xs sm:text-sm">
                  <FiTrendingUp className="w-4 h-4" />
                  <span>22.1K views</span>
                </div>
              </div>
            </div>

            {/* Technical SEO */}
            <div className="relative min-w-[200px] h-[280px] sm:min-w-[300px] sm:h-[380px] rounded-2xl overflow-hidden cursor-pointer">
              <Image
                src="/instacard.jpg"
                alt="Technical SEO"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-base sm:text-lg font-semibold leading-6 mb-2">
                   Create Viral Instagram Reels for Photography
                </h3>
                <div className="flex items-center gap-2 text-orange-400 text-xs sm:text-sm">
                  <FiTrendingUp className="w-4 h-4" />
                  <span>15.7K views</span>
                </div>
              </div>
            </div>

            {/* Email Automation */}
            <div className="relative min-w-[200px] h-[280px] sm:min-w-[300px] sm:h-[380px] rounded-2xl overflow-hidden cursor-pointer">
              <Image
                src="/videocard.jpg"
                alt="Email Automation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-base sm:text-lg font-semibold leading-6 mb-2">
                    Video Production Services for Business Growth
                </h3>
                <div className="flex items-center gap-2 text-orange-400 text-xs sm:text-sm">
                  <FiTrendingUp className="w-4 h-4" />
                  <span>12.3K views</span>
                </div>
              </div>
            </div>

            {/* Duplicate cards for infinite scroll */}
            {/* Instagram Reels Strategy */}
            <div className="relative min-w-[200px] h-[280px] sm:min-w-[300px] sm:h-[380px] rounded-2xl overflow-hidden cursor-pointer">
              <Image
                src="/seoimg.jpg"
                alt="Instagram Reels Strategy"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-base sm:text-lg font-semibold leading-6 mb-2">
                  SEO Strategies for Organic Growth
                </h3>
                <div className="flex items-center gap-2 text-orange-400 text-xs sm:text-sm">
                  <FiTrendingUp className="w-4 h-4" />
                  <span>18.5K views</span>
                </div>
              </div>
            </div>

            {/* Google Analytics 4 */}
            <div className="relative min-w-[200px] h-[280px] sm:min-w-[300px] sm:h-[380px] rounded-2xl overflow-hidden cursor-pointer">
              <Image
                src="/perfomancecard.jpg"
                alt="Performance Marketing"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-base sm:text-lg font-semibold leading-6 mb-2">
                  Performance Marketing Tips for Higher ROI
                </h3>
                <div className="flex items-center gap-2 text-orange-400 text-xs sm:text-sm">
                  <FiTrendingUp className="w-4 h-4" />
                  <span>22.1K views</span>
                </div>
              </div>
            </div>

            {/* Technical SEO */}
            <div className="relative min-w-[200px] h-[280px] sm:min-w-[300px] sm:h-[380px] rounded-2xl overflow-hidden cursor-pointer">
              <Image
                src="/instacard.jpg"
                alt="Technical SEO"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-base sm:text-lg font-semibold leading-6 mb-2">
                   Create Viral Instagram Reels for Photography
                </h3>
                <div className="flex items-center gap-2 text-orange-400 text-xs sm:text-sm">
                  <FiTrendingUp className="w-4 h-4" />
                  <span>15.7K views</span>
                </div>
              </div>
            </div>

            {/* Email Automation */}
            <div className="relative min-w-[200px] h-[280px] sm:min-w-[300px] sm:h-[380px] rounded-2xl overflow-hidden cursor-pointer">
              <Image
                src="/videocard.jpg"
                alt="Email Automation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-base sm:text-lg font-semibold leading-6 mb-2">
                    Video Production Services for Business Growth
                </h3>
                <div className="flex items-center gap-2 text-orange-400 text-xs sm:text-sm">
                  <FiTrendingUp className="w-4 h-4" />
                  <span>12.3K views</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .overflow-x-auto {
          -webkit-overflow-scrolling: touch;
        }
        
        
        
      `}</style>
    </section>
  );
}

























































