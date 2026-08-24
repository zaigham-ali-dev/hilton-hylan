"use client";

import React from "react";
import Link from "next/link";

const contactCards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="animate-icon-glow-consistent w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "CALL US",
    primary: "+1 (310) 555-0199",
    secondary: "Mon – Fri, 9AM – 6PM PST",
    href: "tel:+13105550199",
    delayClass: "[animation-delay:0ms]",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="animate-icon-glow-consistent [animation-delay:400ms] w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "EMAIL US",
    primary: "hello@vistaraestates.com",
    secondary: "We reply within 24 hours",
    href: "mailto:hello@vistaraestates.com",
    delayClass: "[animation-delay:400ms]",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="animate-icon-glow-consistent [animation-delay:800ms] w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12a9.71 9.71 0 001.62 5.37L2.25 21.75l4.53-1.57A9.71 9.71 0 0012 21.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.7 8.5c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.4-1.2 1.1-1.2 2.7s1.2 3.2 1.4 3.4c.2.2 2.3 3.7 5.8 5 2.9 1.1 3.5.7 4.1.7.6-.1 2-1 2.3-1.9.3-.9.3-1.7.2-1.9-.1-.1-.3-.2-.7-.4l-2.1-1c-.3-.1-.6-.2-.8.2-.3.4-.6.9-.8 1.1-.2.2-.4.2-.7.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.8-2.2-2-2.6-.2-.4 0-.6.2-.8l.5-.6c.2-.2.3-.4.4-.6.1-.2.1-.4 0-.6l-1-2.4z" />
      </svg>
    ),
    label: "WHATSAPP",
    primary: "+1 (310) 555-0199",
    secondary: "Chat with us on WhatsApp",
    href: "https://wa.me/13105550199",
    delayClass: "[animation-delay:800ms]",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="animate-icon-glow-consistent [animation-delay:1200ms] w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5m-9-3.75h.008v.008H12v-.008zM12 17.25h.008v.008H12v-.008zM9.75 13.5h.008v.008H9.75v-.008zM9.75 17.25h.008v.008H9.75v-.008zM14.25 13.5h.008v.008H14.25v-.008zM14.25 17.25h.008v.008H14.25v-.008z" />
      </svg>
    ),
    label: "SCHEDULE A MEETING",
    primary: "Book a private consultation at your convenience",
    secondary: null,
    hasArrow: true,
    href: "#schedule",
    delayClass: "[animation-delay:1200ms]",
  },
];

export function ContactInfoBanner() {
  return (
    <div className="w-full px-6 sm:px-8 md:px-16 lg:px-24 -mt-16 md:-mt-20 relative z-20">
      <div className="max-w-[1800px] mx-auto">
        {/* Main Glassmorphic Container */}
        <div className="bg-[#111111]/90 backdrop-blur-2xl border border-white/10 rounded-[24px] py-8 px-6 lg:px-10 shadow-2xl shadow-black/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 divide-y sm:divide-y-0 lg:divide-x lg:divide-white/10">
            {contactCards.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className={`group flex items-center gap-4 sm:gap-5 px-2 lg:px-5 pt-6 sm:pt-0 first:pt-0 cursor-pointer transition-transform duration-300 ${
                  idx === 0 ? "" : "border-t border-white/5 sm:border-t-0"
                }`}
              >
                {/* Glowing Gold Circle Icon */}
                <div className={`animate-gold-pulse-consistent ${item.delayClass} w-[52px] h-[52px] rounded-full border border-[#D4B28C]/35 flex items-center justify-center text-[#D4B28C] shrink-0 bg-gradient-to-b from-[#D4B28C]/10 to-transparent group-hover:scale-105 transition-all duration-300`}>
                  {item.icon}
                </div>

                {/* Content */}
                <div className="flex flex-col min-w-0 flex-1">
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-[#D4B28C] mb-1">
                    {item.label}
                  </span>

                  {item.hasArrow ? (
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-[12.5px] sm:text-[13.5px] text-white/75 font-light leading-snug group-hover:text-white transition-colors">
                        {item.primary}
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 text-[#D4B28C] shrink-0 group-hover:translate-x-1.5 transition-transform duration-300"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                      </svg>
                    </div>
                  ) : (
                    <>
                      <span className="text-[14px] sm:text-[15px] font-medium text-white leading-snug mb-0.5 group-hover:text-[#D4B28C] transition-colors truncate">
                        {item.primary}
                      </span>
                      {item.secondary && (
                        <span className="text-[11px] sm:text-[12px] text-white/50 font-light">
                          {item.secondary}
                        </span>
                      )}
                    </>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
