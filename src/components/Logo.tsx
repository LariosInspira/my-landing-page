import React, { useState } from "react";

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
  src = "/src/assets/images/regenerated_image_1791549963863.png",
}) => {
  const isDark = variant === "dark";
  
  // Responsive height classes
  const heightClass = {
    sm: "h-9 sm:h-10",
    md: "h-12 sm:h-14",
    lg: "h-14 sm:h-16",
    xl: "h-20 sm:h-24",
  }[size];

  // Primary image source uses the brand logo provided in regenerated_image_1791549963863.png,
  // with fallback to /logo.png or vector SVG
  const defaultSvg = isDark ? "/logo-dark.svg" : "/logo.svg";
  const [currentSrc, setCurrentSrc] = useState<string>(src);

  const handleError = () => {
    // If image fails to load, gracefully fall back to vector SVG
    if (currentSrc !== defaultSvg) {
      setCurrentSrc(defaultSvg);
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
