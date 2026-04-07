import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const blogs = [
  {
    id: 1,
    title: "Best Digital Marketing Services for Business Growth",
    desc: "In 2026, scaling a brand requires more than just ads. Discover how performance-driven strategies and high-impact visuals can transform your business ROI.",
    date: "Nov 29, 2024",
    image: "/blogs/blog1/blog1.png",
  },
  {
    id: 2,
    title: "AI Video Creation Services for Business Growth",
    desc: "In 2026, AI-powered videos are transforming content creation. Discover how automated video generation can boost engagement, save time, and scale your marketing efforts.",
    date: "Nov 29, 2024",
    image: "/blogs/blog2/blog2.jpg",
  },
  {
    id: 3,
    title: "Performance Marketing Services for Business Growth",
    desc: "In 2026, paying only for results is the smartest way to grow. Explore how data-driven performance marketing strategies can skyrocket your business ROI.",
    date: "Nov 29, 2024",
    image: "/blogs/blog3/blog3.png",
  },
  {
    id: 4,
    title: "Photography & Videography Services for Business Growth",
    desc: "In 2026, visuals are your strongest marketing tool. Discover how high-quality photography and engaging videos can elevate your brand presence and drive results.",
    date: "Nov 29, 2024",
    image: "/blogs/blog4/blog4.jpg",
  },
  {
    id: 5,
    title: "Social Media Marketing Services for Business Growth",
    desc: "In 2026, social media is the key to brand success. Discover how strategic content and targeted campaigns can boost engagement, build trust, and drive sales.",
    date: "Nov 29, 2024",
    image: "/blogs/blog5/blog5.png",
  },
  {
    id: 6,
    title: "Product Video Services for Business Growth",
    desc: "In 2026, video content will sell faster than images. Discover how professional product videos can elevate your brand, increase engagement, and drive conversions.",
    date: "Nov 29, 2024",
    image: "/blogs/blog6/blog6.jpg",
  },
];

export default function BlogsPage() {
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

      {/* Blog Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="group overflow-hidden hover:shadow-lg transition"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                width={500}
                height={300}
                className="w-full h-60 object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="pt-5">
              <p className="text-sm text-gray-400 mb-2">{blog.date}</p>

              <h2
                className={`text-3xl mb-2 ${montserrat.className} line-clamp-2 leading-8`}
              >
                {blog.title}
              </h2>

              <p
                className={`text-[#F4F4F4] text-lg mb-4 pt-2 ${montserrat.className} line-clamp-3 leading-6`}
              >
                {blog.desc}
              </p>

              <button
                className={`${montserrat.className} bg-[#FC9801] px-4 py-2 text-sm font-semibold hover:scale-105 transition duration-300 flex items-center gap-2`}
              >
                READ MORE
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
