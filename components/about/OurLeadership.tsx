"use client";

import React, { useRef } from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Richard Vistara",
    role: "Founder & CEO",
    image: "/team/richard-vistara.jpg",
    linkedin: "#",
  },
  {
    name: "Isabella Moretti",
    role: "Chief Operating Officer",
    image: "/team/isabella-moretti.jpg",
    linkedin: "#",
  },
  {
    name: "Alexander Morgan",
    role: "Head of Global Sales",
    image: "/team/alexander-morgan.jpg",
    linkedin: "#",
  },
  {
    name: "Sophia Bennett",
    role: "Director of Client Relations",
    image: "/team/sophia-bennett.jpg",
    linkedin: "#",
  },
];

export function OurLeadership() {
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
    <section className="py-20 md:py-28 bg-zinc-950 text-white relative z-10 border-t border-white/5">
      <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-16 lg:px-24">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#D4B28C] mb-3 block">
              OUR LEADERSHIP
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-serif tracking-tight leading-tight">
              The Experts Behind Your Success
            </h2>
          </div>

          {/* Right: CTA Button */}
          <button className="group flex items-center gap-2.5 text-[12px] font-semibold tracking-wider uppercase text-[#D4B28C] hover:text-white transition-colors whitespace-nowrap">
            VIEW ALL TEAM MEMBERS
            <span className="w-8 h-8 rounded-full border border-[#D4B28C]/40 group-hover:border-white/50 flex items-center justify-center transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </span>
          </button>
        </div>

        {/* Carousel Container with Arrows */}
        <div className="relative group/carousel">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-11 h-11 rounded-full bg-black/70 backdrop-blur-md border border-[#D4B28C]/30 flex items-center justify-center text-[#D4B28C] hover:bg-[#D4B28C] hover:text-black hover:border-[#D4B28C] transition-all opacity-0 group-hover/carousel:opacity-100 duration-300 shadow-xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-11 h-11 rounded-full bg-black/70 backdrop-blur-md border border-[#D4B28C]/30 flex items-center justify-center text-[#D4B28C] hover:bg-[#D4B28C] hover:text-black hover:border-[#D4B28C] transition-all opacity-0 group-hover/carousel:opacity-100 duration-300 shadow-xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Cards Grid / Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none]"
          >
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="group/card relative min-w-[260px] sm:min-w-[280px] md:min-w-[320px] flex-1 flex-shrink-0 snap-start rounded-[22px] border border-white/10 hover:border-[#D4B28C]/50 overflow-hidden bg-[#111111]/70 transition-all duration-500 hover:shadow-2xl hover:shadow-[#D4B28C]/10"
              >
                {/* Portrait Image */}
                <div className="relative w-full aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top group-hover/card:scale-105 transition-transform duration-700 brightness-95 contrast-105"
                  />
                  {/* Subtle dark gradient overlay at bottom for crystal clear text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between z-10">
                  <div>
                    <h3 className="text-lg md:text-xl font-medium text-white tracking-wide mb-1 group-hover/card:text-[#D4B28C] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-[12px] md:text-[13px] text-white/60 font-light">
                      {member.role}
                    </p>
                  </div>

                  {/* LinkedIn Icon Badge */}
                  <a
                    href={member.linkedin}
                    aria-label={`${member.name} LinkedIn Profile`}
                    className="w-8 h-8 rounded-full border border-[#D4B28C]/40 flex items-center justify-center text-[#D4B28C] hover:bg-[#D4B28C] hover:text-black transition-all duration-300 shrink-0 bg-black/40 backdrop-blur-sm"
                  >
                    <span className="text-[11px] font-bold lowercase tracking-tighter">in</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
