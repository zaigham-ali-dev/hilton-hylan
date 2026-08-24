"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const OurStory: React.FC = () => {
  return (
    <section className="bg-black text-white pt-6 sm:pt-8 md:pt-10 pb-16 sm:pb-20 md:pb-24 lg:pb-28 px-5 sm:px-8 md:px-12 lg:px-16 relative overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
        {/* Left Content Area shifted slightly to the right */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-12 lg:gap-16 xl:gap-20 flex-1 lg:pl-10 lg:pr-12 xl:pl-16 xl:pr-16">
          {/* Left Column: Tagline + Heading */}
          <motion.div 
          initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-4 md:gap-6 max-w-md md:max-w-xs lg:max-w-sm xl:max-w-md flex-shrink-0 justify-center"
          >
            <span className="text-[10px] md:text-xs font-semibold tracking-[0.35em] uppercase text-[#D4B28C]">
              OUR STORY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.5rem] lg:text-[2.75rem] xl:text-[3.25rem] font-normal leading-[1.2] tracking-wide text-white">
              More than{" "}
              <br className="hidden md:block" />
              real estate.{" "}
              <br />
              It&apos;s a legacy.
            </h2>
          </motion.div>

          {/* Right Column: Description + Button with vertical separator line */}
          <div className="flex flex-col gap-6 md:gap-8 justify-center max-w-sm md:border-l md:border-white/30 md:pl-10 lg:pl-12 xl:pl-16">
            <p className="text-[13px] sm:text-sm md:text-[14px] lg:text-[15px] text-white/50 font-light leading-[1.85] tracking-wide">
              We don&apos;t just find homes, we curate lifestyles. With
              unmatched expertise and discretion, we connect extraordinary
              people with extraordinary properties.
            </p>

            {/* Learn Our Story Button */}
            <button className="group inline-flex items-center gap-3 self-start rounded-full border border-[#D4B28C]/60 hover:border-[#D4B28C] px-6 sm:px-7 py-2.5 sm:py-3 transition-all duration-400 hover:bg-[#D4B28C]/5">
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase text-white/80 group-hover:text-white transition-colors duration-300">
                Learn Our Story
              </span>
              <svg
                className="w-4 h-4 text-white/70 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Image Area - Horizontal Capsule/Oval bleeding to right screen edge */}
        <div className="relative w-full lg:w-[46%] xl:w-[48%] aspect-[1.6] flex-shrink-0 bg-gradient-to-r from-[#D4B28C]/15 via-zinc-900/50 to-transparent p-2 sm:p-3 md:p-3.5 rounded-l-full rounded-r-none shadow-2xl border-y border-l border-[#D4B28C]/40 border-r-0 -mr-5 sm:-mr-8 md:-mr-12 lg:-mr-16">
          <div className="relative w-full h-full overflow-hidden rounded-l-full rounded-r-none">
            <Image
              src="/pic/12.png"
              alt="Luxury interior architectural design"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 440px, (max-width: 1024px) 600px, 640px"
              priority
            />
            {/* Subtle gradient overlay inside */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
