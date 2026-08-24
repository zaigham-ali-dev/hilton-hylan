"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const lenis = useLenis();

  const navItems = [
    { label: "Properties", href: "/properties" },
    { label: "Locations", href: "/locations" },
    { label: "Sell", href: "/sell" },
    { label: "About", href: "/about" },
    { label: "Journal", href: "/journal" },
    { label: "Contact", href: "/contact" },
  ];

  const handleNavClick = (href: string) => {
    // If already on this page, smoothly scroll to top
    if (pathname === href) {
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.2, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="hidden lg:flex items-center gap-8">
      {navItems.map((item) => {
        const isActive =
          pathname === item.href ||
          (item.href !== "/" && pathname?.startsWith(item.href));
        return (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => handleNavClick(item.href)}
            className={`text-xs font-semibold tracking-widest uppercase transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:bg-[#D4B28C] after:transition-all after:duration-300 ${
              isActive
                ? "text-white after:w-full"
                : "text-white/80 hover:text-white after:w-0 hover:after:w-full"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};
