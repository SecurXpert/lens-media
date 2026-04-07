"use client";

import Image from "next/image";
import { Montserrat } from "next/font/google";
import { useState } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const categories = [
  "All",
  "Digital Marketing",
  "Visual Content",
  "SEO & Analytics",
  "Social Media",
  "Branding",
];

const blogs = [
  {
    id: 1,
    title: "Best Digital Marketing Services for Business Growth",
    desc: "In 2026, scaling a brand requires more than just ads. Discover how performance-driven strategies and high-impact visuals can transform your business ROI.",
    date: "Nov 29, 2024",
    image: "/blogs/blog1/blog1.png",
    readTime: "5 min read",
    category: "MARKETING",
    views: "1.2K views",
  },
  {
    id: 2,
    title: "AI Video Creation Services for Business Growth",
    desc: "In 2026, AI-powered videos are transforming content creation. Discover how automated video generation can boost engagement, save time, and scale your marketing efforts.",
    date: "Nov 29, 2024",
    image: "/blogs/blog2/blog2.jpg",
    readTime: "8 min read",
    category: "AI & VIDEO",
    views: "856 views",
  },
  {
    id: 3,
    title: "Performance Marketing Services for Business Growth",
    desc: "In 2026, paying only for results is the smartest way to grow. Explore how data-driven performance marketing strategies can skyrocket your business ROI.",
    date: "Nov 29, 2024",
    image: "/blogs/blog3/blog3.png",
    readTime: "6 min read",
    category: "PERFORMANCE",
    views: "2.4K views",
  },
  {
    id: 4,
    title: "Photography & Videography Services for Business Growth",
    desc: "In 2026, visuals are your strongest marketing tool. Discover how high-quality photography and engaging videos can elevate your brand presence and drive results.",
    date: "Nov 29, 2024",
    image: "/blogs/blog4/blog4.jpg",
    readTime: "7 min read",
    category: "PHOTOGRAPHY",
    views: "3.1K views",
  },
  {
    id: 5,
    title: "Social Media Marketing Services for Business Growth",
    desc: "In 2026, social media is key to brand success. Discover how strategic content and targeted campaigns can boost engagement, build trust, and drive sales.",
    date: "Nov 29, 2024",
    image: "/blogs/blog5/blog5.png",
    readTime: "4 min read",
    category: "SOCIAL MEDIA",
    views: "1.8K views",
  },
  {
    id: 6,
    title: "Product Video Services for Business Growth",
    desc: "In 2026, video content will sell faster than images. Discover how professional product videos can elevate your brand, increase engagement, and drive conversions.",
    date: "Nov 29, 2024",
    image: "/blogs/blog6/blog6.jpg",
    readTime: "9 min read",
    category: "VIDEO PRODUCTION",
    views: "923 views",
  },
];

export default function BlogsPage() {
  const [active, setActive] = useState("All");
  return (
    <section className="bg-black text-white min-h-screen py-16 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1
          className="text-4xl md:text-6xl font-bold tracking-wide"
          style={{
            fontFamily: "Azonix, sans-serif",
            background:
              "linear-gradient(99.87deg, #FFFFFF 11.68%, rgba(255, 255, 255, 0) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          EXPLORING NEW ARTICLES
        </h1>
        <p
          className={`text-lg w-4/5 md:w-2/5 mx-auto mt-4 ${montserrat.className}`}
        >
          Ideas, trends, and inspiration for a brighter future
        </p>
      </div>

      <div className="bg-black min-h-screen flex items-center justify-center p-6">
        <div
          className="max-w-6xl w-full bg-[#111111] rounded-2xl border border-gray-900 p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center"
          style={{ borderTop: "1.4px solid #D4A5741A" }}
        >
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/marketing.jpg" // put your image in public folder
              alt="Marketing"
              className="rounded-xl w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 text-white">
            <p className="text-orange-500 tracking-widest text-sm mb-3">
              FEATURED
            </p>

            <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-4">
              THE FUTURE OF <br />
              DIGITAL MARKETING: <br />
              AI-POWERED <br />
              PERSONALIZATION
            </h1>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Discover how leading brands are leveraging artificial intelligence
              and machine learning to create hyper-personalized customer
              experiences that drive unprecedented engagement and conversion
              rates across all digital channels.
            </p>

            <button className="flex items-center gap-2 border border-orange-500 text-orange-500 px-5 py-2 rounded-full hover:bg-orange-500 hover:text-black transition">
              Read Story →
            </button>
          </div>
        </div>
      </div>

      <div className="bg-black border-b border-gray-800 px-6">
        <div className="max-w-7xl mx-auto flex gap-8 overflow-x-auto py-4 scrollbar-hide">
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
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-[#111111] border border-gray-900 rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 group"
              style={{ borderTop: "1.2px solid #D4A5741A" }}
            >
              {/* Image Section */}
              <div className="relative">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
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
          ))}
        </div>
      </div>

      <div className="bg-black px-6 py-10">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6 max-w-7xl mx-auto">
          <span className="text-orange-500 text-xl">↗</span>
          <h2 className="text-white text-2xl font-semibold">
            Trending Stories
          </h2>
        </div>

        {/* Cards Row */}
        <div className="flex gap-6 overflow-x-auto max-w-7xl mx-auto scrollbar-hide">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="relative min-w-[260px] h-[340px] rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-lg font-semibold leading-6 mb-2">
                  {blog.title}
                </h3>

                {/* Views */}
                <div className="flex items-center gap-2 text-orange-400 text-sm">
                  <span>↗</span>
                  <span>{blog.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
