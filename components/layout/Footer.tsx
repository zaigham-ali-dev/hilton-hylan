"use client";

import React from "react";
import Link from "next/link";

// Inline Social Icons since branded icons are not exported by this version of lucide-react
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

import { useEffect, useSyncExternalStore } from "react";

const footerStars = [
  "top-[17%] left-[11%] size-[2px] animate-[twinkle_2s_ease-in-out_infinite] [animation-delay:0s]", "top-[54%] left-[64%] size-[5px] animate-[twinkle_5s_ease-in-out_infinite] [animation-delay:3s]", "top-[91%] left-[17%] size-[4px] animate-[twinkle_4s_ease-in-out_infinite] [animation-delay:1s]", "top-[28%] left-[70%] size-[3px] animate-[twinkle_3s_ease-in-out_infinite] [animation-delay:4s]", "top-[65%] left-[23%] size-[2px] animate-[twinkle_2s_ease-in-out_infinite] [animation-delay:2s]",
  "top-[2%] left-[76%] size-[5px] animate-[twinkle_5s_ease-in-out_infinite] [animation-delay:0s]", "top-[39%] left-[29%] size-[4px] animate-[twinkle_4s_ease-in-out_infinite] [animation-delay:3s]", "top-[76%] left-[82%] size-[3px] animate-[twinkle_3s_ease-in-out_infinite] [animation-delay:1s]", "top-[13%] left-[35%] size-[2px] animate-[twinkle_2s_ease-in-out_infinite] [animation-delay:4s]", "top-[50%] left-[88%] size-[5px] animate-[twinkle_5s_ease-in-out_infinite] [animation-delay:2s]",
  "top-[87%] left-[41%] size-[4px] animate-[twinkle_4s_ease-in-out_infinite] [animation-delay:0s]", "top-[24%] left-[94%] size-[3px] animate-[twinkle_3s_ease-in-out_infinite] [animation-delay:3s]", "top-[61%] left-[47%] size-[2px] animate-[twinkle_2s_ease-in-out_infinite] [animation-delay:1s]", "top-[98%] left-[0%] size-[5px] animate-[twinkle_5s_ease-in-out_infinite] [animation-delay:4s]", "top-[35%] left-[53%] size-[4px] animate-[twinkle_4s_ease-in-out_infinite] [animation-delay:2s]",
  "top-[72%] left-[6%] size-[3px] animate-[twinkle_3s_ease-in-out_infinite] [animation-delay:0s]", "top-[9%] left-[59%] size-[2px] animate-[twinkle_2s_ease-in-out_infinite] [animation-delay:3s]", "top-[46%] left-[12%] size-[5px] animate-[twinkle_5s_ease-in-out_infinite] [animation-delay:1s]", "top-[83%] left-[65%] size-[4px] animate-[twinkle_4s_ease-in-out_infinite] [animation-delay:4s]", "top-[20%] left-[18%] size-[3px] animate-[twinkle_3s_ease-in-out_infinite] [animation-delay:2s]",
  "top-[57%] left-[71%] size-[2px] animate-[twinkle_2s_ease-in-out_infinite] [animation-delay:0s]", "top-[94%] left-[24%] size-[5px] animate-[twinkle_5s_ease-in-out_infinite] [animation-delay:3s]", "top-[31%] left-[77%] size-[4px] animate-[twinkle_4s_ease-in-out_infinite] [animation-delay:1s]", "top-[68%] left-[30%] size-[3px] animate-[twinkle_3s_ease-in-out_infinite] [animation-delay:4s]", "top-[5%] left-[83%] size-[2px] animate-[twinkle_2s_ease-in-out_infinite] [animation-delay:2s]",
  "top-[42%] left-[36%] size-[5px] animate-[twinkle_5s_ease-in-out_infinite] [animation-delay:0s]", "top-[79%] left-[89%] size-[4px] animate-[twinkle_4s_ease-in-out_infinite] [animation-delay:3s]", "top-[16%] left-[42%] size-[3px] animate-[twinkle_3s_ease-in-out_infinite] [animation-delay:1s]", "top-[53%] left-[95%] size-[2px] animate-[twinkle_2s_ease-in-out_infinite] [animation-delay:4s]", "top-[90%] left-[48%] size-[5px] animate-[twinkle_5s_ease-in-out_infinite] [animation-delay:2s]",
];

const StarsBackground = () => {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {footerStars.map((star, id) => (
        <div
          key={id}
          className={`absolute rounded-full bg-[#D4B28C] ${star}`}
        />
      ))}
    </div>
  );
};

export const Footer = () => {
  useEffect(() => {
    // Force scroll to top on page refresh
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <footer className="relative bg-[#050505] text-white pt-10 pb-8 px-6 sm:px-10 lg:px-16 border-t border-[#1a1a1a] overflow-hidden">
      <StarsBackground />
      <div className="relative z-10 max-w-[1450px] mx-auto w-full">
        {/* Top Section - Columns */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8 mb-12 sm:mb-16">
          {/* Logo Column */}
          <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-start">
            <Link
              href="/"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="flex items-center gap-2.5 sm:gap-3 group"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#D4B28C] font-light tracking-widest transition-transform group-hover:scale-105 duration-300">
                V
              </div>
              <div className="flex flex-col border-l border-white/20 pl-2.5 sm:pl-3">
                <span className="text-xs sm:text-sm md:text-base font-semibold tracking-[0.25em] text-white uppercase font-sans">
                  Vistara
                </span>
                <span className="text-[8px] sm:text-[9px] md:text-[10px] font-medium tracking-[0.3em] text-[#D4B28C] uppercase font-sans">
                  Estates
                </span>
              </div>
            </Link>
          </div>

          {/* Links Columns Container */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:flex lg:flex-nowrap gap-y-10 gap-x-6 sm:gap-x-8 lg:gap-12 xl:gap-24 w-full lg:w-auto justify-between lg:justify-end flex-grow">
            {/* COMPANY */}
            <div className="flex flex-col gap-4 min-w-[120px]">
              <h4 className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-white/80">
                COMPANY
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link href="#" className="text-[13px] text-white/50 hover:text-[#C9A36A] transition-colors duration-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[13px] text-white/50 hover:text-[#C9A36A] transition-colors duration-300">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[13px] text-white/50 hover:text-[#C9A36A] transition-colors duration-300">
                    Press
                  </Link>
                </li>
              </ul>
            </div>

            {/* QUICK LINKS */}
            <div className="flex flex-col gap-4 min-w-[120px]">
              <h4 className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-white/80">
                QUICK LINKS
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link href="#" className="text-[13px] text-white/50 hover:text-[#C9A36A] transition-colors duration-300">
                    Properties
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[13px] text-white/50 hover:text-[#C9A36A] transition-colors duration-300">
                    Locations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[13px] text-white/50 hover:text-[#C9A36A] transition-colors duration-300">
                    Sell With Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* RESOURCES */}
            <div className="flex flex-col gap-4 min-w-[120px]">
              <h4 className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-white/80">
                RESOURCES
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link href="#" className="text-[13px] text-white/50 hover:text-[#C9A36A] transition-colors duration-300">
                    Journal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[13px] text-white/50 hover:text-[#C9A36A] transition-colors duration-300">
                    Market Insights
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[13px] text-white/50 hover:text-[#C9A36A] transition-colors duration-300">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* FOLLOW US */}
            <div className="flex flex-col gap-4 min-w-[120px]">
              <h4 className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-white/80">
                FOLLOW US
              </h4>
              <div className="flex items-center gap-5 mt-1">
                <Link href="#" className="text-white hover:text-[#C9A36A] transition-colors duration-300">
                  <InstagramIcon className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-white hover:text-[#C9A36A] transition-colors duration-300">
                  <LinkedinIcon className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-white hover:text-[#C9A36A] transition-colors duration-300">
                  <YoutubeIcon className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-white hover:text-[#C9A36A] transition-colors duration-300">
                  <FacebookIcon className="w-[18px] h-[18px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright & Legal */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[11px] sm:text-[12px] text-white/40 font-light tracking-wide text-center sm:text-left">
            © 2026 Vistara Estates. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-[11px] sm:text-[12px] text-white/40 hover:text-white/80 font-light tracking-wide transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="text-[11px] sm:text-[12px] text-white/40 hover:text-white/80 font-light tracking-wide transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
