import React from "react";
import { HeroContent } from "./HeroContent";
import { HeroSlider } from "./HeroSlider";
import { PropertyPreview } from "./PropertyPreview";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden bg-zinc-950">
      {/* Background Video with Dark Vignette/Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          src="/video/hill-trimmed.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Cinematic gradient overlay - slightly stronger on mobile for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/50 sm:from-black/60 sm:via-black/25 sm:to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 sm:from-black/50 sm:via-transparent sm:to-black/15" />
      </div>

      {/* Decorative Premium Glassmorphic Glowing Rings */}
      <div className="absolute inset-y-0 left-0 z-[1] pointer-events-none">
        {/* Glow Ring 1 - scaled down on mobile */}
        <div className="absolute left-[-120px] sm:left-[-100px] top-[15%] w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[500px] md:h-[500px] lg:w-[650px] lg:h-[650px] rounded-full border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-[2px] opacity-60" />

        {/* Glow Ring 2 */}
        <div className="absolute left-[50px] sm:left-[100px] md:left-[150px] top-[30%] w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] rounded-full border border-white/5 bg-transparent opacity-40" />

        {/* Ambient Warm Backlight Glow */}
        <div className="absolute left-[-150px] top-[40%] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-[#D4B28C]/5 filter blur-[120px]" />
      </div>

      {/* Hero Components */}
      <div className="relative z-10 w-full flex flex-col items-start justify-center pt-24 pb-32 sm:pt-28 sm:pb-36 md:pt-32 md:pb-28 lg:py-24">
        {/* Left: Heading & Call to Actions */}
        <HeroContent />
      </div>

      {/* Right: Vertical Pagination Slider (Tablet+ Only) */}
      <HeroSlider />

      {/* Bottom Right: Floating Featured Property Details */}
      <PropertyPreview />
    </section>
  );
};
