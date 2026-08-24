import React from "react";
import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    id: 1,
    image: "/journal/featured-luxury-living.jpg",
    badge: "FEATURED",
    date: "MAY 12, 2025",
    title: "The Future of Luxury Living: Where Experience Meets Exclusivity",
    description:
      "A look at how high-end real estate is evolving to offer more than just a home—it's a lifestyle.",
    featured: true,
  },
  {
    id: 2,
    image: "/journal/market-shift-2025.jpg",
    badge: "MARKET INSIGHTS",
    date: "MAY 08, 2025",
    title: "Market Shift 2025: What Buyers Need to Know",
    description: "",
    featured: false,
  },
  {
    id: 3,
    image: "/journal/lifestyle-extraordinary.jpg",
    badge: "LIFESTYLE",
    date: "MAY 05, 2025",
    title: "Beyond the Ordinary: Curated Experiences for Extraordinary Lives",
    description: "",
    featured: false,
  },
  {
    id: 4,
    image: "/journal/smart-investments.jpg",
    badge: "INVESTMENT GUIDE",
    date: "APR 30, 2025",
    title: "Smart Investments: Where Luxury Meets Long-Term Value",
    description: "",
    featured: false,
  },
  {
    id: 5,
    image: "/journal/beverly-hills-spotlight.jpg",
    badge: "NEIGHBORHOOD SPOTLIGHT",
    date: "APR 26, 2025",
    title: "Beverly Hills: Timeless Prestige, Modern Possibilities",
    description: "",
    featured: false,
  },
];

export function JournalArticlesGrid() {
  const featured = articles[0];
  const rightArticles = articles.slice(1);

  return (
    <section id="stories" className="bg-zinc-950 py-12 md:py-16 px-6 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-5">
          {/* Left: Featured Large Card */}
          <Link
            href="#"
            className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full aspect-[3/4] lg:aspect-auto lg:h-full min-h-[500px]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
            </div>

            {/* Badge */}
            <div className="absolute top-5 left-5 z-10">
              <span className="bg-black/50 backdrop-blur-md border border-[#D4B28C]/40 text-[#D4B28C] text-[9px] font-semibold tracking-[0.15em] px-4 py-1.5 rounded-full uppercase">
                {featured.badge}
              </span>
            </div>

            {/* Content at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10">
              <span className="text-[11px] text-white/50 tracking-wider font-light uppercase block mb-3">
                {featured.date}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white leading-tight mb-4 group-hover:text-[#D4B28C] transition-colors duration-300">
                {featured.title}
              </h3>
              <p className="text-[13px] sm:text-[14px] text-white/60 font-light leading-relaxed max-w-[400px] mb-6">
                {featured.description}
              </p>
              <span className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] uppercase text-white/70 group-hover:text-[#D4B28C] transition-colors">
                READ ARTICLE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </span>
            </div>
          </Link>

          {/* Right: 2x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {rightArticles.map((article) => (
              <Link
                key={article.id}
                href="#"
                className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col"
              >
                {/* Image */}
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-black/50 backdrop-blur-md border border-[#D4B28C]/40 text-[#D4B28C] text-[8px] font-semibold tracking-[0.15em] px-3 py-1 rounded-full uppercase">
                      {article.badge}
                    </span>
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[10px] text-white/40 tracking-wider font-light uppercase block mb-2">
                    {article.date}
                  </span>
                  <h3 className="text-[15px] sm:text-base font-serif text-white leading-snug mb-4 group-hover:text-[#D4B28C] transition-colors duration-300 flex-1">
                    {article.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-[9px] font-semibold tracking-[0.2em] uppercase text-white/60 group-hover:text-[#D4B28C] transition-colors">
                    READ ARTICLE
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
