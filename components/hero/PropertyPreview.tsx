import React from "react";
import Image from "next/image";

export const PropertyPreview: React.FC = () => {
  return (
    <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 lg:right-16 z-20 flex items-center justify-between gap-3 sm:gap-4 bg-black/40 backdrop-blur-md border border-white/10 p-2.5 sm:p-3 md:p-3.5 pr-4 sm:pr-5 md:pr-6 rounded-xl sm:rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-[calc(100%-2rem)] sm:w-auto sm:max-w-[300px] md:max-w-[340px] hover:bg-black/50 hover:border-white/20 transition-all duration-300 group cursor-pointer">
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Property Thumbnail */}
        <div className="relative w-14 h-11 sm:w-16 sm:h-13 md:w-20 md:h-16 rounded-lg sm:rounded-xl overflow-hidden flex-shrink-0 bg-zinc-800">
          <Image
            src="/property-preview.png"
            alt="The Summit Villa, Beverly Hills"
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 640px) 56px, (max-width: 768px) 64px, 80px"
          />
        </div>

        {/* Property Info */}
        <div className="flex flex-col min-w-0">
          <span className="text-[8px] sm:text-[9px] md:text-[10px] font-semibold uppercase tracking-wider text-white/50">
            Beverly Hills, CA
          </span>
          <h3 className="text-xs sm:text-sm font-medium text-white tracking-wide mt-0.5 truncate">
            The Summit Villa
          </h3>
          <span className="text-[10px] sm:text-xs font-semibold text-[#D4B28C] tracking-wide mt-0.5 sm:mt-1">
            $24,500,000
          </span>
        </div>
      </div>

      {/* Action Chevron */}
      <div className="text-white/40 group-hover:text-[#D4B28C] group-hover:translate-x-1 transition-all duration-300 flex-shrink-0">
        <svg
          className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-none stroke-current"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};
