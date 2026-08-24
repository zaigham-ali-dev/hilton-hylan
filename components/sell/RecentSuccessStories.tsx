"use client";

import React, { useRef } from "react";
import Image from "next/image";

const soldProperties = [
  {
    image: "/sold/beverly-hills.jpg",
    location: "Beverly Hills, CA",
    price: "$24,500,000",
    askingPercent: "98% of Asking Price",
  },
  {
    image: "/sold/malibu.jpg",
    location: "Malibu, CA",
    price: "$18,900,000",
    askingPercent: "96% of Asking Price",
  },
  {
    image: "/sold/bel-air.jpg",
    location: "Bel Air, CA",
    price: "$32,000,000",
    askingPercent: "104% of Asking Price",
  },
  {
    image: "/sold/miami.jpg",
    location: "Miami Beach, FL",
    price: "$12,300,000",
    askingPercent: "97% of Asking Price",
  },
  {
    image: "/sold/new-york.png",
    location: "New York, NY",
    price: "$17,600,000",
    askingPercent: "95% of Asking Price",
  },
];

export function RecentSuccessStories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-zinc-950 text-white relative">
      <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-16 lg:px-24">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          {/* Left: Heading */}
          <div>
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#D4B28C] mb-3 block">
              RECENT SUCCESS STORIES
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-serif tracking-tight leading-tight">
              Proven Results. Exceptional Homes.
            </h2>
          </div>

          {/* Right: CTA */}
          <button className="group flex items-center gap-2.5 text-[12px] font-semibold tracking-wider uppercase text-[#D4B28C] hover:text-white transition-colors whitespace-nowrap">
            VIEW ALL SUCCESS STORIES
            <span className="w-8 h-8 rounded-full border border-[#D4B28C]/40 group-hover:border-white/50 flex items-center justify-center transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </span>
          </button>
        </div>

        {/* Cards Carousel with Navigation Arrows */}
        <div className="relative group/carousel">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-11 h-11 rounded-full bg-black/60 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white hover:bg-black/80 hover:border-white/30 transition-all opacity-0 group-hover/carousel:opacity-100 duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-11 h-11 rounded-full bg-black/60 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white hover:bg-black/80 hover:border-white/30 transition-all opacity-0 group-hover/carousel:opacity-100 duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Scrollable Cards Container */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none]"
          >
            {soldProperties.map((property, idx) => (
              <div
                key={idx}
                className="group min-w-[260px] sm:min-w-[280px] md:min-w-[300px] flex-shrink-0 snap-start rounded-2xl border border-white/10 hover:border-[#D4B28C]/30 overflow-hidden bg-[#111111]/50 transition-all duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className="relative w-full aspect-[3/4] overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.location}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Bottom gradient for text readability over image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>

                {/* Text Content */}
                <div className="p-5">
                  {/* Location */}
                  <p className="text-[12px] text-white/55 font-light tracking-wide mb-1.5">
                    {property.location}
                  </p>

                  {/* Price */}
                  <h3 className="text-xl md:text-2xl font-serif text-white tracking-tight leading-none mb-2">
                    {property.price}
                  </h3>

                  {/* Sold Badge + Asking */}
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[12px] font-semibold text-[#D4B28C] tracking-wide">
                      Sold
                    </span>
                    <span className="text-[11px] text-white/45 font-light">
                      {property.askingPercent}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
