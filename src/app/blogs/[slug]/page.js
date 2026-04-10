import Link from "next/link";
import { Syne } from "next/font/google";
import { Montserrat } from "next/font/google";
import { FiUser, FiClock } from "react-icons/fi";
import { digital } from "@/utils/blogs/digital";
import { aiVideos } from "@/utils/blogs/perfomance";
import { performance } from "@/utils/blogs/powerfull";
import { photography } from "@/utils/blogs/videoproduction";
import { social } from "@/utils/blogs/social";
import { product } from "@/utils/blogs/aivideo";
import BlogNavigation from "./BlogNavigation";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Map slugs to their corresponding blog data
const blogDataMap = {
  digital: digital,
  "ai-videos": aiVideos,
  performance: performance,
  photography: photography,
  social: social,
  product: product,
};

export function generateStaticParams() {
  return [
    { slug: "digital" },
    { slug: "ai-videos" },
    { slug: "performance" },
    { slug: "photography" },
    { slug: "product" },
    { slug: "social" },
  ];
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const blogData = blogDataMap[slug];

  // If blog doesn't exist, show a 404 page
  if (!blogData) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-gray-400 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <p className="text-gray-500 text-sm mb-4">Slug: {slug}</p>
          <p className="text-gray-500 text-xs mb-8">
            Available: {Object.keys(blogDataMap).join(", ")}
          </p>
          <Link
            href="/blogs"
            className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg text-black font-semibold"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* INTRODUCTION Section - Hero + Intro Content */}
      <section id="introduction" className="relative">
        {/* Hero Section with Background Image */}
        <div className="relative h-screen overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={blogData.heroImage}
              alt="Blog hero"
              className="w-full h-full object-cover object-center sm:object-center"
              style={{ objectPosition: "72% center" }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/20 sm:bg-black/20"></div>

            {/* Bottom Gradient Fade to Black */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black via-black/10 to-transparent"></div>
          </div>

          {/* Back Button */}
          <Link href="/blogs">
            <div className="absolute top-10 left-4 sm:left-15 z-20 bg-[linear-gradient(50deg,#FE9A00_0%,#E17100_100%)] rounded-full px-5 sm:px-7 py-2 cursor-pointer">
              <span
                className={`${syne.className} font-bold text-black text-xs sm:text-sm`}
              >
                BACK
              </span>
            </div>
          </Link>

          {/* Client-side Navigation */}
          <BlogNavigation />

          {/* Blog Title and Meta */}
          <div className="absolute left-0 right-0 text-center z-10 mt-32 sm:mt-45">
            <h4
              className={`text-xs sm:text-sm md:text-sm mb-6 sm:mb-10 text-orange-300 tracking-[0.2em] sm:tracking-[0.3em] ${syne.className}`}
            >
              {blogData.heading}
            </h4>
            <h3 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-5xl tracking-wider mb-6 sm:mb-8 font-[Azonix] px-4 max-w-4xl mx-auto">
              {blogData.title}
            </h3>
            <p
              className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-inter font-light text-gray-300 mb-8 sm:mb-12 md:mb-18 max-w-4xl mx-auto px-4 ${montserrat.className}`}
            >
              {blogData.subtitle}
            </p>

            {/* Author and Meta Info */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-8 text-gray-300 text-[10px] sm:text-xs md:text-sm px-4">
              <div className="flex items-center gap-2">
                <FiUser className="w-4 h-4 text-gray-400" />
                <span>{blogData.author}</span>
              </div>
              <span className="text-gray-400 text-sm sm:text-ms">•</span>
              <div className="flex items-center gap-2">
                <FiClock className="w-4 h-4 text-gray-400" />
                <span>{blogData.readTime}</span>
              </div>
              <span className="text-gray-400 text-sm sm:text-ms">•</span>
              <span>{blogData.date}</span>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
            <div className="flex flex-col items-center gap-3">
              <span
                className={`text-sm text-gray-400 tracking-[0.3em] ${syne.className}`}
              >
                SCROLL
              </span>
              <svg
                className="w-5 h-5 text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Intro Content */}
        <div className="bg-black text-white py-12 sm:py-18 px-4 sm:px-8">
          <div className="max-w-4xl mx-auto mb-20 bg-black">
            <p
              className={`text-gray-300 leading-relaxed mb-8 text-base sm:text-lg font-inter font-light tracking-wide  ${montserrat.className}`}
            >
              {blogData.paragraph1}
            </p>

            <p
              className={`text-gray-300 leading-relaxed mb-8 text-base sm:text-lg font-inter font-normal tracking-wide  ${montserrat.className}`}
            >
              {blogData.paragraph2}
            </p>

            <p
              className={`text-gray-300 leading-relaxed mb-8 text-base sm:text-lg font-inter font-normal tracking-wide  ${montserrat.className}`}
            >
              {blogData.paragraph3}
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src={blogData.image}
              alt="photoshoot"
              className="rounded-lg w-full max-w-4xl object-cover mt-10"
            />
          </div>
        </div>
      </section>

      {/* strategy Section */}
      <section
        id="process"
        className="bg-black text-white py-12 sm:py-14 px-4 sm:px-8"
      >
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-orange-400 font-[Azonix] tracking-wider text-left mb-6 sm:mb-8 md:mb-10">
            The Strategy
          </h2>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-[Azonix] tracking-wider text-left mb-8 sm:mb-10 md:mb-16">
            {blogData.paragraph4}
          </h2>

          {/* Points */}
          {blogData.points && (
            <ul className="space-y-3 max-w-4xl mb-12">
              {blogData.points.map((point, index) => (
                <li
                  key={index}
                  className={`flex items-start gap-3 text-gray-300 text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
                >
                  <span className="text-orange-500 mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Section 1 */}
          <div className="mb-12">
            <h3 className="text-orange-400 text-lg sm:text-xl md:text-2xl tracking-wider mb-4 sm:mb-6 uppercase">
              {blogData.section1?.title || "01. PRE-PRODUCTION"}
            </h3>

            <p
              className={`text-gray-300 leading-relaxed max-w-4xl pb-10 text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
            >
              {blogData.section1?.description}
            </p>
             <p
              className={`text-gray-300 leading-relaxed max-w-4xl pb-5 text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
            >
              {blogData.section1?.description2}
            </p>

            {blogData.section1?.points && (
              <ul className="space-y-3 max-w-4xl pb-8">
                {blogData.section1.points.map((point, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-3 text-gray-300 text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
                  >
                    <span className="text-orange-500 mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
            <p
              className={`text-gray-300 leading-relaxed max-w-4xl pb-5 text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
            >
              {blogData.section1?.description3}
            </p>
         
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 pl-0 md:pl-20">
              {blogData.section1?.image1 && (
                <img
                  src={blogData.section1.image1}
                  className="rounded-lg w-full h-[270px] sm:h-auto object-cover"
                />
              )}
              {blogData.section1?.image2 && (
                <img
                  src={blogData.section1.image2}
                  className="rounded-lg w-full h-[270px] sm:h-auto object-cover"
                />
              )}
            </div>
             <h3 className="text-orange-400 text-lg sm:text-xl md:text-2xl tracking-wider mt-4 sm:mt-4 uppercase">
              {blogData.section1?.title2 || "Brand Photography"}
            </h3>
           <p
              className={`text-gray-300 leading-relaxed max-w-4xl pb-5 text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
            >
              {blogData.section1?.description4}
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-12">
            <h3 className="text-orange-400 text-lg sm:text-xl md:text-2xl tracking-wider mb-4 sm:mb-6 uppercase">
              {blogData.section2?.title || "02. PRODUCTION"}
            </h3>

            <p
              className={`text-gray-300 leading-relaxed max-w-4xl pb-5 text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
            >
              {blogData.section2?.description}
            </p>

            <p
              className={`text-gray-300 leading-relaxed max-w-4xl pb-5 text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
            >
              {blogData.section2?.description2}
            </p>

            {blogData.section2?.points && (
              <ul className="space-y-3 max-w-4xl pb-5">
                {blogData.section2.points.map((point, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-3 text-gray-300 text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
                  >
                    <span className="text-orange-500 mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}

            <p
              className={`text-gray-300 leading-relaxed max-w-4xl pb-5 text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
            >
              {blogData.section2?.description3}
            </p>

            <h3 className="text-orange-400 text-lg sm:text-xl md:text-2xl tracking-wider mt-4 sm:mt-4 uppercase">
              {blogData.section2?.title2 || "Actionable tip"}
            </h3>

            <p
              className={`text-gray-300 leading-relaxed max-w-4xl pb-5 text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
            >
              {blogData.section2?.description4}
            </p>
          </div>
          {/* Section 3 */}
          <div className="mb-12">
            <h3 className="text-orange-400 text-lg sm:text-xl md:text-2xl tracking-wider mb-4 sm:mb-6 uppercase">
              {blogData.section3?.title || "03. PRODUCTION"}
            </h3>

            <p
              className={`text-gray-300 leading-relaxed max-w-4xl pb-5 text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
            >
              {blogData.section3?.description}
            </p>

            <p
              className={`text-gray-300 leading-relaxed max-w-4xl pb-5 text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
            >
              {blogData.section3?.description2}
            </p>

            {blogData.section3?.points && (
              <ul className="space-y-3 max-w-4xl pb-5">
                {blogData.section3.points.map((point, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-3 text-gray-300 text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
                  >
                    <span className="text-orange-500 mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}

            <p
              className={`text-gray-300 leading-relaxed max-w-4xl pb-5 text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
            >
              {blogData.section3?.description3}
            </p>

            <h3 className="text-orange-400 text-lg sm:text-xl md:text-2xl tracking-wider mt-4 sm:mt-4 uppercase">
              {blogData.section3?.title2 || "Actionable tip"}
            </h3>

            <p
              className={`text-gray-300 leading-relaxed max-w-4xl pb-5 text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
            >
              {blogData.section3?.description4}
            </p>
          </div>
          {/* Section 4 */}
          <div className="mb-12">
            <h3 className="text-orange-400 text-lg sm:text-xl md:text-2xl tracking-wider mb-4 sm:mb-6 uppercase">
              {blogData.section4?.title || "04. PRODUCTION"}
            </h3>

            <p
              className={`text-gray-300 leading-relaxed max-w-4xl pb-5 text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
            >
              {blogData.section4?.description}
            </p>

            <p
              className={`text-gray-300 leading-relaxed max-w-4xl pb-5 text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
            >
              {blogData.section4?.description2}
            </p>

            {blogData.section4?.points && (
              <ul className="space-y-3 max-w-4xl pb-5">
                {blogData.section4.points.map((point, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-3 text-gray-300 text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
                  >
                    <span className="text-orange-500 mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}

            <p
              className={`text-gray-300 leading-relaxed max-w-4xl pb-5 text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
            >
              {blogData.section4?.description3}
            </p>

            <h3 className="text-orange-400 text-lg sm:text-xl md:text-2xl tracking-wider mt-4 sm:mt-4 uppercase">
              {blogData.section4?.title2 || "Actionable tip"}
            </h3>

            <p
              className={`text-gray-300 leading-relaxed max-w-4xl pb-5 text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
            >
              {blogData.section4?.description4}
            </p>
          </div>
          {/* Section 5 */}
          <div className="mb-12">
            <h3 className="text-orange-400 text-lg sm:text-xl md:text-2xl tracking-wider mb-4 sm:mb-6 uppercase">
              {blogData.section5?.title || "05. PRODUCTION"}
            </h3>

            <p
              className={`text-gray-300 leading-relaxed max-w-4xl pb-5 text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
            >
              {blogData.section5?.description}
            </p>

            <p
              className={`text-gray-300 leading-relaxed max-w-4xl pb-5 text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
            >
              {blogData.section5?.description2}
            </p>

            {blogData.section5?.points && (
              <ul className="space-y-3 max-w-4xl pb-5">
                {blogData.section5.points.map((point, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-3 text-gray-300 text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
                  >
                    <span className="text-orange-500 mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}

            <h3 className="text-orange-400 text-lg sm:text-xl md:text-2xl tracking-wider mt-4 sm:mt-4 uppercase">
              {blogData.section5?.title2 || "Actionable tip"}
            </h3>

            <p
              className={`text-gray-300 leading-relaxed max-w-4xl pb-5 text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
            >
              {blogData.section5?.description4}
            </p>
          </div>
          {/* Section 6 */}
          <div className="mb-12">
            <h3 className="text-orange-400 text-lg sm:text-xl md:text-2xl tracking-wider mb-4 sm:mb-6 uppercase">
              {blogData.section6?.title || "06. PRODUCTION"}
            </h3>

            <p
              className={`text-gray-300 leading-relaxed max-w-4xl pb-5 text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
            >
              {blogData.section6?.description}
            </p>

            <p
              className={`text-gray-300 leading-relaxed max-w-4xl pb-5 text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
            >
              {blogData.section6?.description2}
            </p>

            {blogData.section6?.points && (
              <ul className="space-y-3 max-w-4xl pb-5">
                {blogData.section6.points.map((point, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-3 text-gray-300 text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
                  >
                    <span className="text-orange-500 mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}

            <p
              className={`text-gray-300 leading-relaxed max-w-4xl pb-5 text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
            >
              {blogData.section6?.description3}
            </p>

            <h3 className="text-orange-400 text-lg sm:text-xl md:text-2xl tracking-wider mt-4 sm:mt-4 uppercase">
              {blogData.section6?.title2 || "Actionable tip"}
            </h3>

            <p
              className={`text-gray-300 leading-relaxed max-w-4xl pb-5 text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
            >
              {blogData.section6?.description4}
            </p>
          </div>
          {/* Quote */}
          {blogData.quote && (
            <div className="text-center max-w-4xl mx-auto pt-10">
              {/* Top line */}
              <div className="w-25 h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-12 sm:mb-18"></div>
              <p className="font-inter italic text-xl sm:text-2xl md:text-3xl text-gray-300 leading-8 sm:leading-10 md:leading-12 tracking-[0.15rem] sm:tracking-[0.2rem] mb-4 px-4">
                "{blogData.quote.text}"
              </p>

              <p className="text-orange-400 text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-8">
                {blogData.quote.author}
              </p>

              {/* Bottom line */}
              <div className="w-25 h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto"></div>
            </div>
          )}
        </div>
      </section>

      {/* What It Actually Looks LikeSection */}
      <section
        id="What It Actually Looks Like"
        className="bg-black text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 overflow-hidden"
      >
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-[Azonix] tracking-wider mb-6 w-full">
            {blogData.behindTheScenes?.title || "What It Actually Looks Like"}
          </h2>

          {/* Description */}
          <p
            className={`text-gray-300 leading-relaxed max-w-4xl pb-12 text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
          >
            {blogData.behindTheScenes?.description}
          </p>

          {/* Images Grid - Inside container to match heading width */}
          {blogData.behindTheScenes?.images && (
            <div className="w-full overflow-hidden">
              <div className="flex w-max animate-scroll gap-4">
                {[
                  ...blogData.behindTheScenes.images,
                  ...blogData.behindTheScenes.images,
                ].map((img, index) => (
                  <div
                    key={index}
                    className="w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[240px] flex-shrink-0"
                  >
                    <img
                      src={img}
                      alt="behind-scenes"
                      className="w-full h-[240px] sm:h-[280px] md:h-[320px] object-cover rounded-3xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section
        id="process"
        className="bg-black text-white py-12 sm:py-14 px-4 sm:px-8"
      >
        <div className="max-w-4xl mx-auto">
          {/* Section 7 */}
          <div className="mb-12">
            <h3 className="text-orange-400 text-lg sm:text-xl md:text-2xl tracking-wider mb-4 sm:mb-6 uppercase">
              {blogData.section7?.title || "07. AI-Driven Automation"}
            </h3>

            <p
              className={`text-gray-300 leading-relaxed max-w-4xl text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
            >
              {blogData.section7?.description}
            </p>
          </div>
          {/* Section 8 */}
          <div className="mb-12">
            <h3 className="text-orange-400 text-lg sm:text-xl md:text-2xl tracking-wider mb-4 sm:mb-6 uppercase">
              {blogData.section8?.title || "08. AI-Driven Automation"}
            </h3>

            <p
              className={`text-gray-300 leading-relaxed max-w-4xl text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
            >
              {blogData.section8?.description}
            </p>
          </div>
          {/* Section 9 */}
          <div className="mb-12">
            <h3 className="text-orange-400 text-lg sm:text-xl md:text-2xl tracking-wider mb-4 sm:mb-6 uppercase">
              {blogData.section9?.title || "09. AI-Driven Automation"}
            </h3>

            <p
              className={`text-gray-300 leading-relaxed max-w-4xl text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
            >
              {blogData.section9?.description}
            </p>
          </div>
          {/* Section 10 */}
          <div className="mb-12">
            <h3 className="text-orange-400 text-lg sm:text-xl md:text-2xl tracking-wider mb-4 sm:mb-6 uppercase">
              {blogData.section10?.title || "10. AI-Driven Automation"}
            </h3>

            <p
              className={`text-gray-300 leading-relaxed max-w-4xl text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
            >
              {blogData.section10?.description}
            </p>
          </div>
          {/* Section 11 */}
          <div className="mb-12">
            <h3 className="text-orange-400 text-lg sm:text-xl md:text-2xl tracking-wider mb-4 sm:mb-6 uppercase">
              {blogData.section11?.title || "11. AI-Driven Automation"}
            </h3>

            <p
              className={`text-gray-300 leading-relaxed max-w-4xl text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
            >
              {blogData.section11?.description}
            </p>
          </div>
          {/* Section 12 */}
          <div className="mb-12">
            <h3 className="text-orange-400 text-lg sm:text-xl md:text-2xl tracking-wider mb-4 sm:mb-6 uppercase">
              {blogData.section12?.title}
            </h3>

            <p
              className={`text-gray-300 leading-relaxed max-w-4xl text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
            >
              {blogData.section12?.description}
            </p>
          </div>
        </div>
      </section>

      {/* what cliants are archive Section */}
      <section
        id="results"
        className="bg-black text-white py-12 sm:py-20 px-4 sm:px-6"
      >
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-[Azonix] tracking-wider mb-6">
            {blogData.results?.title || "RESULTS"}
          </h2>
          {blogData.results?.subtitle && (
            <p
              className={`text-gray-300 leading-relaxed max-w-4xl pb-10 text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
            >
              {blogData.results?.subtitle}
            </p>
          )}

          {/* Paragraphs */}
          <div>
            
          </div>
        </div>

        {/* Image - Full width outside container */}
        {blogData.results?.image && (
          <div className="max-w-5xl mx-auto px-2 sm:px-4 mt-4">
            <div className="relative w-full">
              <img
                src={blogData.results.image}
                alt="results"
                className="w-full h-[300px] sm:h-[400px] md:h-[550px] object-cover rounded-2xl"
              />
            </div>
          </div>
        )}

        {/* Points List */}
        {blogData.results?.points && (
          <div className="max-w-4xl mx-auto px-2 sm:px-4 mt-12">
            <ul className="space-y-4 list-disc text-orange-500">
              {blogData.results.points.map((point, index) => (
                <li
                  key={index}
                  className={`ml-6 text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
                >
                  {typeof point === 'object' && point.title ? (
                    <>
                      <span className="text-orange-400 text-xl">{point.title}</span>
                      <span className="ml-2 text-gray-300">{point.description}</span>
                    </>
                  ) : (
                    <span className="text-gray-300">{point}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* What's Shaping Digital */}
      <section
        id="looking-forward"
        className="bg-black text-white py-12 sm:py-20 sm:px-6"
      >
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-[Azonix] tracking-wider mb-6">
            {blogData.finalOutput?.title || "LOOKING FORWARD"}
          </h2>

          {/* Description */}
          <div>
            <p
              className={`text-gray-300 leading-relaxed max-w-4xl pb-10 text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
            >
              {blogData.finalOutput?.paragraph1}
            </p>
            <p
              className={`text-gray-300 leading-relaxed max-w-4xl pb-8 text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
            >
              {blogData.finalOutput?.paragraph2}
            </p>
            <p
              className={`text-gray-300 leading-relaxed max-w-4xl  text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
            >
              {blogData.finalOutput?.paragraph3}
            </p>
          </div>
        </div>

        {/* Images - Side by side */}
        {(blogData.finalOutput?.image || blogData.finalOutput?.image2) && (
          <div className="max-w-5xl mx-auto px-2 sm:px-4">
            <div className="flex flex-col sm:flex-row">
              {blogData.finalOutput?.image && (
                <div className="relative w-full sm:w-1/2">
                  <img
                    src={blogData.finalOutput.image}
                    alt="final-output"
                    className="w-100 h-auto object-cover rounded-2xl"
                  />
                </div>
              )}
              {blogData.finalOutput?.image2 && (
                <div className="relative w-full sm:w-1/2">
                  <img
                    src={blogData.finalOutput.image2}
                    alt="final-output"
                    className="w-100 h-auto object-cover rounded-2xl"
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Sections */}
        <div className="max-w-4xl mx-auto px-2 sm:px-4 mt-12">
          {blogData.finalOutput?.section1 && (
            <div className="mb-12">
              <h3 className="text-orange-400 text-lg sm:text-xl md:text-2xl tracking-wider mb-4 sm:mb-6 uppercase">
                {blogData.finalOutput.section1.title}
              </h3>
              <p
                className={`text-gray-300 leading-relaxed max-w-4xl text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
              >
                {blogData.finalOutput.section1.description}
              </p>
            </div>
          )}
          {blogData.finalOutput?.section2 && (
            <div className="mb-12">
              <h3 className="text-orange-400 text-lg sm:text-xl md:text-2xl tracking-wider mb-4 sm:mb-6 uppercase">
                {blogData.finalOutput.section2.title}
              </h3>
              <p
                className={`text-gray-300 leading-relaxed max-w-4xl text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
              >
                {blogData.finalOutput.section2.description}
              </p>
            </div>
          )}
          {blogData.finalOutput?.section3 && (
            <div className="mb-12">
              <h3 className="text-orange-400 text-lg sm:text-xl md:text-2xl tracking-wider mb-4 sm:mb-6 uppercase">
                {blogData.finalOutput.section3.title}
              </h3>
              <p
                className={`text-gray-300 leading-relaxed max-w-4xl text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
              >
                {blogData.finalOutput.section3.description}
              </p>
            </div>
          )}
          {blogData.finalOutput?.section4 && (
            <div className="mb-12">
              <h3 className="text-orange-400 text-lg sm:text-xl md:text-2xl tracking-wider mb-4 sm:mb-6 uppercase">
                {blogData.finalOutput.section4.title}
              </h3>
              <p
                className={`text-gray-300 leading-relaxed max-w-4xl text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
              >
                {blogData.finalOutput.section4.description}
              </p>
            </div>
          )}
        </div>
      </section>

      <div className="bg-black text-white">
        {/* RELATED STORIES */}
        <section className="px-6 md:px-16 py-16">
          <h2 className="text-center font-inter medium text-2xl sm:text-3xl md:text-4xl tracking-[0.1em] mb-8 sm:mb-10">
            {blogData.relatedStoriesTitle || "RELATED STORIES"}
          </h2>

          {/* Points List */}
          {blogData.relatedStoriesPoints && (
            <div className="max-w-4xl mx-auto mb-10">
              <ul className="space-y-3">
                {blogData.relatedStoriesPoints.map((point, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-3 text-gray-300 text-base sm:text-lg font-inter font-normal tracking-wide ${montserrat.className}`}
                  >
                    <span className="text-orange-500 mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {blogData.stories?.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <p className="text-xs text-orange-500 mt-3 tracking-widest font-inter">
                  {item.category}
                </p>

                <h3 className="mt-1 text-base sm:text-lg md:text-xl">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* STAY IN THE STORY - Newsletter */}
        <section className="px-6 md:px-16 pb-24 bg-black">
          <div className="relative max-w-7xl mx-auto">
            {/* Outer Glow (Edge only) */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#ff8a00]/20 via-transparent to-[#ff8a00]/20 blur-2xl opacity-60"></div>

            {/* Card */}
            <div className="relative rounded-3xl border border-[#ff8a00]/20 bg-gradient-to-r from-[#1a1209] via-[#0d0d0d] to-[#1a1209] px-6 sm:px-10 md:px-20 py-10 sm:py-14 text-center">
              {/* Heading */}
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white tracking-[0.1em] font-medium">
                {blogData.subscribeTitle}
              </h2>

              {/* Description */}
              <p className="text-gray-400 mt-4 sm:mt-5 text-sm sm:text-base md:text-lg lg:text-xl font-inter max-w-3xl mx-auto leading-6 sm:leading-8">
                {blogData.subscribeDesc}
                to your inbox.
              </p>

              {/* Input + Button */}
              <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 max-w-xl mx-auto px-4 sm:px-0">
                {/* Input */}
                <input
                  type="email"
                  placeholder={blogData.placeholder}
                  className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-[#1a1a1a] to-[#111] border border-white/10 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#ff8a00]/50 transition-all backdrop-blur-md text-sm sm:text-base"
                />

                {/* Button */}
                <button className="bg-[#E37400] hover:bg-[#ff8a00] px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-black font-semibold flex items-center gap-2 transition-all whitespace-nowrap text-sm sm:text-base">
                  {blogData.buttonText}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center text-gray-600 text-ms pb-6">
          {blogData.footerText}
        </footer>
      </div>
    </div>
  );
}
