import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "play";
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", children, icon, ...props }, ref) => {
    let baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full text-sm tracking-wider uppercase";
    
    if (variant === "primary") {
      // Premium beige / gold-ish button
      baseStyles += " bg-[#D4B28C] hover:bg-[#C29F79] text-black px-8 py-3.5 shadow-sm";
    } else if (variant === "secondary") {
      // Dark / black button
      baseStyles += " bg-[#121212] hover:bg-[#222] text-white px-8 py-3.5";
    } else if (variant === "outline") {
      // Transparent with white/border
      baseStyles += " border border-white/20 hover:border-white/60 text-white bg-transparent px-8 py-3.5";
    } else if (variant === "ghost") {
      // Text only with hover effects
      baseStyles += " text-white hover:text-[#D4B28C] bg-transparent px-4 py-2";
    } else if (variant === "play") {
      // Watch showreel play style layout
      baseStyles = "inline-flex items-center gap-3 text-white tracking-widest text-xs font-semibold uppercase group hover:text-[#D4B28C] transition-all duration-300";
    }

    if (variant === "play") {
      return (
        <button
          ref={ref}
          className={`${baseStyles} ${className}`}
          {...props}
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/30 bg-black/40 backdrop-blur-sm group-hover:scale-110 group-hover:border-[#D4B28C] transition-all duration-300">
            <svg
              className="w-3.5 h-3.5 fill-current text-white ml-0.5 group-hover:text-black transition-colors"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <span>{children}</span>
        </button>
      );
    }

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${className}`}
        {...props}
      >
        <span className="flex items-center gap-2">
          {children}
          {icon && <span className="inline-flex">{icon}</span>}
        </span>
      </button>
    );
  }
);

Button.displayName = "Button";
