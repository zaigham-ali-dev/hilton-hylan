"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Vistara Estates made the impossible, possible. Their team is unmatched.",
    name: "Amanda C.",
    role: "Entrepreneur",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote:
      "From start to finish, the experience was seamless and truly personalized.",
    name: "James T.",
    role: "Investor",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote:
      "They don't just sell homes, they help you build a better future.",
    name: "Sophia M.",
    role: "Business Owner",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const ClientExperiences: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "prev" | "next") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    // Scroll by the width of one card + gap
    const firstCard = container.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard ? firstCard.offsetWidth + 20 : 420;
    container.scrollBy({
      left: direction === "next" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-black text-white pt-24 sm:pt-32 lg:pt-40 pb-10 sm:pb-14 lg:pb-16 px-6 sm:px-10 lg:px-16 relative overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-4 lg:max-w-md xl:max-w-lg flex-shrink-0"
        >
          <span className="text-xs sm:text-sm font-bold tracking-[0.35em] uppercase text-[#D4B28C]">
            CLIENT EXPERIENCES
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-normal leading-[1.15] tracking-wide text-white mt-2">
            Trusted by
            <br />
            extraordinary
            <br />
            people.
          </h2>
        </motion.div>

        {/* Right Content: Cards + Navigation */}
        <div className="flex-1 flex flex-col gap-6 w-full min-w-0">
          {/* Cards Row */}
          <motion.div
            ref={scrollRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex overflow-x-auto hide-scrollbar gap-4 sm:gap-5 snap-x snap-mandatory pb-2 [scrollbar-width:none] [-ms-overflow-style:none]"
          >
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="snap-center shrink-0 w-[320px] sm:w-[360px] lg:w-[400px] rounded-[20px] border border-white/10 bg-white/5 backdrop-blur-md p-8 sm:p-10 flex flex-col justify-between gap-6 group hover:border-[#D4B28C]/40 transition-all duration-500"
              >
                {/* Quote */}
                <div className="flex flex-col gap-3">
                  <span className="text-[#D4B28C] text-xl font-serif leading-none select-none">
                    &ldquo;&ldquo;
                  </span>
                  <p className="text-white/80 text-[15px] sm:text-[16px] font-light leading-[1.8] tracking-wide">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 shrink-0 relative">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white text-[15px] font-semibold tracking-wide">
                      {t.name}
                    </span>
                    <span className="text-white/40 text-[12px] font-light tracking-wide mt-0.5">
                      {t.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 justify-end">
            <button
              onClick={() => scroll("prev")}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#D4B28C]/50 flex items-center justify-center text-[#D4B28C] hover:bg-[#D4B28C]/10 transition-colors duration-300 active:scale-95"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-6 h-6" strokeWidth={1.5} />
            </button>
            <button
              onClick={() => scroll("next")}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#D4B28C]/50 flex items-center justify-center text-[#D4B28C] hover:bg-[#D4B28C]/10 transition-colors duration-300 active:scale-95"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Inline styles for hiding scrollbar */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `,
        }}
      />
    </section>
  );
};
