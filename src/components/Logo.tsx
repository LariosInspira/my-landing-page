import React, { useState } from "react";
import logoBrand from "../assets/images/regenerated_image_1791549963863.png";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg" | "xl";
  alt?: string;
  src?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  variant = "light",
  size = "md",
  alt = "Sarah Larios — Arquitecta del Climaterio",
  src = logoBrand,
}) => {
  const isDark = variant === "dark";
  
  // Responsive height classes
  const heightClass = {
    sm: "h-9 sm:h-10",
    md: "h-12 sm:h-14",
    lg: "h-14 sm:h-16",
    xl: "h-20 sm:h-24",
  }[size];

  const [currentSrc, setCurrentSrc] = useState<string>(src || logoBrand);

  const handleError = () => {
    // If custom image fails to load, gracefully fall back to bundled logo
    if (currentSrc !== logoBrand) {
      setCurrentSrc(logoBrand);
    }
  };

  return (
    <div className={`inline-flex items-center shrink-0 ${isDark ? "bg-white/95 px-2.5 py-1 rounded-md" : ""} ${className}`}>
      <img
        src={currentSrc}
        alt={alt}
        onError={handleError}
        referrerPolicy="no-referrer"
        className={`${heightClass} w-auto object-contain select-none transition-opacity duration-200`}
        loading="eager"
      />
    </div>
  );
};
