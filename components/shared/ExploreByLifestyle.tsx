"use client";

import React from "react";
import Image from "next/image";

const lifestyles = [
  {
    title: "Oceanfront",
    image: "/lifestyle/oceanfront.jpg",
  },
  {
    title: "Golf Estates",
    image: "/lifestyle/golf-estates.jpg",
  },
  {
    title: "City Living",
    image: "/lifestyle/city-living.jpg",
  },
  {
    title: "Historic Homes",
    image: "/lifestyle/historic-homes.jpg",
  },
  {
    title: "Hillside Villas",
    image: "/lifestyle/hillside-villas.jpg",
  },
];

export function ExploreByLifestyle() {
  return (
    <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
      {/* Section Label */}
      <div className="mb-10">
        <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#D4B28C]">
          EXPLORE BY LIFESTYLE
        </span>
      </div>

      {/* Lifestyle Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {lifestyles.map((lifestyle, idx) => (
          <div
            key={idx}
            className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-white/20 transition-all duration-500"
          >
            {/* Image */}
            <Image
              src={lifestyle.image}
              alt={lifestyle.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Content at Bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center justify-between">
              <h3 className="text-white text-[15px] font-medium tracking-wide">
                {lifestyle.title}
              </h3>
              <span className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#D4B28C] group-hover:bg-[#D4B28C]/10 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 text-white/70 group-hover:text-[#D4B28C] transition-colors duration-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
