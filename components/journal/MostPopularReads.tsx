import React from "react";
import Image from "next/image";
import Link from "next/link";

const popularReads = [
  {
    num: "01",
    image: "/journal/timeless-luxury-home.jpg",
    title: "10 Traits of a Timeless Luxury Home",
    href: "#",
  },
  {
    num: "02",
    image: "/journal/elevate-everyday-life.jpg",
    title: "Designing Spaces That Elevate Everyday Life",
    href: "#",
  },
  {
    num: "03",
    image: "/journal/coastal-markets-2025.jpg",
    title: "Top Coastal Markets to Watch in 2025",
    href: "#",
  },
  {
    num: "04",
    image: "/journal/location-everything.jpg",
    title: "Why Location Will Always Be Everything",
    href: "#",
  },
];

export function MostPopularReads() {
  return (
    <section className="bg-zinc-950 py-16 px-6 sm:px-8 md:px-16 lg:px-24 border-t border-white/5">
      <div className="max-w-[1800px] mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#D4B28C] block">
            MOST POPULAR READS
          </span>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 xl:gap-8">
          {popularReads.map((item) => (
            <Link
              key={item.num}
              href={item.href}
              className="group flex flex-col cursor-pointer"
            >
              {/* Top Row: Big Gold Number + Image Thumbnail */}
              <div className="flex items-start gap-4 mb-4">
                <span className="text-2xl sm:text-3xl lg:text-[32px] font-serif text-[#D4B28C] leading-none shrink-0 mt-1 select-none">
                  {item.num}
                </span>
                <div className="relative w-full aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 group-hover:border-[#D4B28C]/40 transition-colors duration-500">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[16px] sm:text-[17px] lg:text-[18px] font-serif text-white leading-snug font-normal mb-4 group-hover:text-[#D4B28C] transition-colors duration-300 min-h-[44px]">
                {item.title}
              </h3>

              {/* Read Article Link */}
              <div className="mt-auto">
                <span className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] uppercase text-white/60 group-hover:text-[#D4B28C] transition-colors duration-300">
                  READ ARTICLE
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300"
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
    </section>
  );
}
