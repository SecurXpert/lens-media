import Link from "next/link";
import { Syne } from "next/font/google";
import { Montserrat } from "next/font/google";
import { digital } from "@/utils/blogs/digital";
import { aiVideos } from "@/utils/blogs/ai videos";
import { performance } from "@/utils/blogs/perfomance";
import { photography } from "@/utils/blogs/photography";
import { social } from "@/utils/blogs/social";
import { product } from "@/utils/blogs/product";

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
          <p className="text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
          <p className="text-gray-500 text-sm mb-4">Slug: {slug}</p>
          <p className="text-gray-500 text-xs mb-8">Available: {Object.keys(blogDataMap).join(', ')}</p>
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
      {/* Hero Section with Background Image */}
      <div className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={blogData.heroImage}
            alt="Blog hero"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0"></div>
        </div>

        {/* Back Button */}
        <div className="absolute top-10 left-15 z-20 bg-[linear-gradient(50deg,#FE9A00_0%,#E17100_100%)] rounded-full px-7 py-2">
          <Link href="/blogs" className="text-black text-sm">
            <span className={`${syne.className} font-bold`}>BACK</span>
          </Link>
        </div>

        {/* Navigation Menu */}
        <div className="fixed bottom-4 left-8 z-10">
          <div className="bg-black/10 rounded-4xl px-10 py-6 border border-white/20">
            <nav className="flex flex-col space-y-4">
              {blogData.sections?.map((section) => (
                <div
                  key={section.id}
                  className={`text-left duration-200 text-[#FFFFFF40] text-base font-semibold tracking-wider ${syne.className}`}
                >
                  {section.title}
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Blog Title and Meta */}
        <div className="absolute left-0 right-0 text-center z-10 mt-80">
          <h1 className={`text-5xl md:text-7xl mb-6 ${syne.className}`}>
            {blogData.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
            {blogData.subtitle}
          </p>

          {/* Author and Meta Info */}
          <div className="flex items-center justify-center gap-8 text-gray-300">
            <span className={`${syne.className} font-medium`}>
              {blogData.author}
            </span>
            <span>·</span>
            <span>{blogData.readTime}</span>
            <span>·</span>
            <span>{blogData.date}</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2">
            <span className={`text-sm text-gray-400 ${syne.className}`}>
              SCROLL
            </span>
            <div className="w-1 h-8 bg-gradient-to-b from-[#FE9A00] to-transparent"></div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-16 px-6">
        <div className="max-w-5xl mx-auto mb-12">
          <p className="text-gray-300 leading-7 mb-6">
            {blogData.paragraph1}
          </p>

          <p className="text-gray-400 leading-7">
            {blogData.paragraph2}
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src={blogData.image}
            alt="photoshoot"
            className="rounded-lg w-full max-w-5xl object-cover"
          />
        </div>
      </div>

      <div className="bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section 1 */}
          <div className="mb-12">
            <h3 className="text-orange-500 tracking-wider mb-4">
              {blogData.section1?.title}
            </h3>

            <p className="text-gray-400 leading-7 mb-8 max-w-3xl">
              {blogData.section1?.description}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {blogData.section1?.image1 && <img src={blogData.section1.image1} className="rounded-lg" />}
              {blogData.section1?.image2 && <img src={blogData.section1.image2} className="rounded-lg" />}
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-16">
            <h3 className="text-orange-500 tracking-wider mb-4">
              {blogData.section2?.title}
            </h3>

            <p className="text-gray-400 leading-7 max-w-3xl">
              {blogData.section2?.description}
            </p>
          </div>

          {/* Quote */}
          {blogData.quote && (
            <div className="text-center max-w-3xl mx-auto">
              <p className="italic text-lg text-gray-300 leading-8 mb-4">
                {blogData.quote.text}
              </p>

              <p className="text-orange-500 text-sm tracking-widest">
                {blogData.quote.author}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl tracking-widest mb-4">
            {blogData.behindTheScenes?.title}
          </h2>

          {/* Description */}
          <p className="text-gray-400 max-w-2xl mb-12 leading-7">
            {blogData.behindTheScenes?.description}
          </p>

          {/* Images Grid */}
          {blogData.behindTheScenes?.images && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {blogData.behindTheScenes.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="behind-scenes"
                  className="rounded-xl object-cover w-full h-72"
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl tracking-widest mb-6">
            {blogData.results?.title}
          </h2>

          {/* Paragraphs */}
          <div className="max-w-3xl text-gray-400 leading-7 mb-12 space-y-4">
            <p>{blogData.results?.paragraph1}</p>
            <p>{blogData.results?.paragraph2}</p>
          </div>

          {/* Image */}
          {blogData.results?.image && (
            <div className="w-full">
              <img
                src={blogData.results.image}
                alt="results"
                className="rounded-xl w-full object-cover"
              />
            </div>
          )}
        </div>
      </div>

      <div className="bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl tracking-widest mb-6">
            {blogData.finalOutput?.title}
          </h2>

          {/* Description */}
          <div className="max-w-3xl text-gray-400 leading-7 mb-12 space-y-4">
            <p>{blogData.finalOutput?.paragraph1}</p>
            <p>{blogData.finalOutput?.paragraph2}</p>
          </div>

          {/* Image */}
          {blogData.finalOutput?.image && (
            <div className="w-full">
              <img
                src={blogData.finalOutput.image}
                alt="final-output"
                className="rounded-xl w-full object-cover"
              />
            </div>
          )}
        </div>
      </div>

      <div className="bg-black text-white">
        {/* RELATED STORIES */}
        <section className="px-6 md:px-16 py-16">
          <h2 className="text-center text-gray-400 tracking-widest mb-10">
            {blogData.relatedStoriesTitle || "RELATED STORIES"}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {blogData.stories?.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <p className="text-xs text-orange-400 mt-3 tracking-widest">
                  {item.category}
                </p>

                <h3 className="mt-1 text-sm font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* SUBSCRIBE */}
        <section className="px-6 md:px-16 pb-20">
          <div className="bg-gradient-to-r from-gray-900 to-orange-900 p-10 rounded-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-semibold">
              {blogData.subscribeTitle || "Subscribe to Our Newsletter"}
            </h2>

            <p className="text-gray-400 mt-3 text-sm">
              {blogData.subscribeDesc || "Get the latest insights and trends delivered to your inbox."}
            </p>

            <div className="mt-6 flex flex-col md:flex-row justify-center gap-3">
              <input
                type="email"
                placeholder={blogData.placeholder || "Enter your email"}
                className="px-4 py-3 rounded-lg bg-gray-800 outline-none w-full md:w-80"
              />

              <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg text-black font-semibold">
                {blogData.buttonText || "SUBSCRIBE"}
              </button>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center text-gray-500 text-xs pb-6">
          {blogData.footerText || "© 2026 Lens Media. All rights reserved."}
        </footer>
      </div>
    </div>
  );
}
