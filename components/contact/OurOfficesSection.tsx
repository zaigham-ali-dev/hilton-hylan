"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const offices = [
  {
    city: "BEVERLY HILLS",
    image: "/offices/beverly-hills.jpg",
    addressLine1: "9454 Wilshire Blvd, Suite 800",
    addressLine2: "Beverly Hills, CA 90212, USA",
    phone: "+1 (310) 555-0199",
  },
  {
    city: "MIAMI",
    image: "/offices/miami.jpg",
    addressLine1: "1200 Brickell Ave, Suite 1950",
    addressLine2: "Miami, FL 33131, USA",
    phone: "+1 (786) 555-0130",
  },
  {
    city: "NEW YORK",
    image: "/offices/new-york.jpg",
    addressLine1: "530 5th Ave, 10th Floor",
    addressLine2: "New York, NY 10036, USA",
    phone: "+1 (212) 555-0177",
  },
];

export function OurOfficesSection() {
  return (
    <section className="bg-zinc-950 py-12 md:py-16 px-6 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-[1800px] mx-auto">
        {/* Outer Dark Border Container */}
        <div className="border border-white/10 rounded-2xl bg-zinc-950/80 p-8 sm:p-10 md:p-12">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              {/* Tag */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4B28C] shadow-[0_0_8px_#D4B28C]" />
                <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#D4B28C]">
                  OUR OFFICES
                </span>
              </div>
              {/* Title */}
              <h2 className="text-3xl sm:text-4xl font-serif text-white leading-tight">
                Local Expertise. Global Reach.
              </h2>
            </div>

            {/* View All Locations Button */}
            <Link
              href="/locations"
              className="group inline-flex items-center gap-2.5 border border-[#D4B28C]/40 hover:border-[#D4B28C] text-[#D4B28C] hover:text-white px-5 py-3 rounded-md transition-all duration-300 hover:bg-[#D4B28C]/10 shrink-0 self-start sm:self-auto"
            >
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase">
                VIEW ALL LOCATIONS
              </span>
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
            </Link>
          </div>

          {/* 3 Office Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((office) => (
              <div
                key={office.city}
                className="group border border-white/10 hover:border-[#D4B28C]/40 rounded-xl overflow-hidden bg-zinc-900/60 transition-all duration-500 flex flex-col"
              >
                {/* Image Thumbnail */}
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <Image
                    src={office.image}
                    alt={office.city}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-transparent to-transparent" />
                </div>

                {/* Card Content */}
                <div className="p-6 flex items-start gap-4 flex-1">
                  {/* Location Marker Icon */}
                  <div className="w-9 h-9 rounded-full border border-[#D4B28C]/30 flex items-center justify-center text-[#D4B28C] shrink-0 mt-0.5 bg-[#D4B28C]/5 group-hover:border-[#D4B28C]/60 group-hover:bg-[#D4B28C]/10 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.6}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </div>

                  {/* Office Info */}
                  <div className="flex flex-col flex-1">
                    <h3 className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#D4B28C] mb-2">
                      {office.city}
                    </h3>
                    <p className="text-[13px] text-white/80 font-light leading-relaxed">
                      {office.addressLine1}
                    </p>
                    <p className="text-[13px] text-white/60 font-light leading-relaxed mb-2">
                      {office.addressLine2}
                    </p>
                    <a
                      href={`tel:${office.phone.replace(/[^0-9+]/g, "")}`}
                      className="text-[13px] text-white/70 font-light hover:text-[#D4B28C] transition-colors"
                    >
                      {office.phone}
                    </a>
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
