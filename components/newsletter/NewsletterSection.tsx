"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const NewsletterSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="w-full px-5 sm:px-8 md:px-12 lg:px-16 pt-4 sm:pt-6 pb-8 sm:pb-10 lg:pb-12 bg-black"
    >
      {/* Outer wrapper for spinning golden border */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="newsletter-border-glow relative mx-auto w-full max-w-[1600px] rounded-[24px] p-[3px] shadow-[0_8px_40px_rgba(0,0,0,0.5),0_2px_12px_rgba(0,0,0,0.3)]"
      >
        {/* Inner content container */}
        <div className="relative h-[clamp(260px,24vw,350px)] w-full overflow-hidden rounded-[24px]">
          {/* Background base */}
          <div className="absolute inset-0 bg-[#0B0B0B]" />

        {/* Subtle olive-green gradient on the left side */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(60,55,30,0.25)_0%,rgba(40,45,25,0.15)_30%,transparent_60%)]" />

        {/* FULL-WIDTH IMAGE (behind everything) */}
        <motion.div
          initial={{ scale: 1 }}
          animate={isInView ? { scale: 1.04 } : { scale: 1 }}
          transition={{ duration: 12, ease: "linear" }}
          className="absolute inset-0"
        >
          <Image
            src="/pic/13.webp"
            alt="Luxury interior with greenery"
            fill
            className="object-cover object-[center_65%]"
            sizes="100vw"
            priority
          />
        </motion.div>

        {/* Gradient overlay: covers left ~55% smoothly blending into image */}
        <div className="absolute inset-0 z-[1] pointer-events-none bg-[linear-gradient(to_right,#0B0B0B_0%,rgba(11,11,11,0.98)_25%,rgba(11,11,11,0.88)_38%,rgba(15,16,12,0.6)_52%,rgba(20,22,16,0.3)_65%,transparent_82%)]" />

        {/* LEFT CONTENT (on top of gradient) */}
        <div className="relative z-[2] flex h-full w-full">
          <div className="flex w-[42%] flex-col justify-center px-8 sm:px-10 lg:px-12 xl:px-14">
            {/* STAY AHEAD tag */}
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-[#C9A36A] mb-3 sm:mb-4">
              STAY AHEAD
            </span>

            {/* Heading */}
            <h2 className="font-serif text-[1.5rem] sm:text-[1.75rem] lg:text-[2rem] xl:text-[2.25rem] font-normal leading-[1.15] tracking-wide text-white mb-2 sm:mb-3">
              Discover rare opportunities.
            </h2>

            {/* Subtitle */}
            <p className="text-[12px] sm:text-[13px] lg:text-[14px] text-white/50 font-light tracking-wide mb-5 sm:mb-6 lg:mb-7">
              Subscribe to our exclusive newsletter.
            </p>

            {/* Newsletter Form */}
            <div className="flex items-center w-full max-w-[420px] h-[44px] sm:h-[46px] lg:h-[48px] rounded-full border 
            border-white/15 bg-white/[0.04] backdrop-blur-sm overflow-hidden">
              {/* Email Input */}
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 h-full bg-transparent px-5 sm:px-6 text-[11px] sm:text-[12px] text-white/70 
                placeholder:text-white/30 font-light tracking-wide outline-none focus:ring-0 border-none focus:text-white/85"
              />

              {/* Subscribe Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex items-center gap-2 sm:gap-2.5 h-full px-5 sm:px-6 rounded-full bg-[#E8C79A]
                 text-black/85 shrink-0 hover:shadow-[0_0_16px_rgba(232,199,154,0.35)]"
              >
                <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] uppercase">
                  SUBSCRIBE
                </span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2} />
              </motion.button>
            </div>
          </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
