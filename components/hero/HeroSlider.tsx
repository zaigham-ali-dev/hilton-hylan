import React from "react";

export const HeroSlider: React.FC = () => {
  const slides = [1, 2, 3, 4, 5];
  const activeSlide = 1;

  return (
    <div className="absolute right-5 sm:right-8 md:right-12 lg:right-16 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center gap-4 lg:gap-6">
      {/* Starting Slide Number */}
      <span className="text-[9px] md:text-[10px] font-semibold tracking-wider text-white/50 font-sans">
        01
      </span>

      {/* Vertical Slider Track with Dots */}
      <div className="relative flex flex-col items-center py-2">
        {/* Track Line */}
        <div className="absolute top-0 bottom-0 w-[1px] bg-white/10" />

        {/* Dots */}
        <div className="flex flex-col gap-4 lg:gap-6 relative z-10">
          {slides.map((slide) => {
            const isActive = slide === activeSlide;
            return (
              <button
                key={slide}
                className="group relative flex items-center justify-center w-5 h-5 md:w-6 md:h-6 transition-all duration-300"
                aria-label={`Go to slide ${slide}`}
              >
                {/* Visual Dot */}
                <div
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-[#D4B28C] scale-125 shadow-[0_0_8px_rgba(212,178,140,0.5)]"
                      : "bg-white/40 group-hover:bg-white/80"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Ending Slide Number */}
      <span className="text-[9px] md:text-[10px] font-semibold tracking-wider text-white/50 font-sans">
        05
      </span>
    </div>
  );
};
