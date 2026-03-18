import React from 'react';
import { Building2 } from 'lucide-react';

export interface Logo {
  id: string | number;
  name: string;
  image?: string;
  icon?: React.ElementType;
}

interface LogoCarouselProps {
  logos?: Logo[];
  speed?: number; // Duration in seconds for one full scroll
  className?: string;
}

const defaultLogos: Logo[] = [
  { id: 1, name: 'Company 1', icon: Building2 },
  { id: 2, name: 'Company 2', icon: Building2 },
  { id: 3, name: 'Company 3', icon: Building2 },
  { id: 4, name: 'Company 4', icon: Building2 },
  { id: 5, name: 'Company 5', icon: Building2 },
  { id: 6, name: 'Company 6', icon: Building2 },
];

export function LogoCarousel({ logos = defaultLogos, speed = 30, className = "" }: LogoCarouselProps) {
  // Ensure the base array is long enough to cover wide screens
  // If there are few logos, we duplicate them so they fill the screen
  const baseLogos = logos.length < 6 ? [...logos, ...logos, ...logos] : logos;
  
  // Duplicate the base array to create the seamless loop effect
  // The animation translates by -50%, so we need exactly two identical halves
  const duplicatedLogos = [...baseLogos, ...baseLogos];

  return (
    <div className={`w-full overflow-hidden bg-transparent py-4 relative ${className}`}>
      {/* Fade Masks (Left and Right) */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Scrolling Container */}
      <div 
        className="flex items-center w-max animate-marquee hover:[animation-play-state:paused]"
        style={{ '--marquee-duration': `${speed}s` } as React.CSSProperties}
      >
        {duplicatedLogos.map((logo, index) => (
          <div 
            key={`${logo.id}-${index}`} 
            className="flex items-center justify-center w-[33vw] md:w-[16vw] px-4"
          >
            {logo.image ? (
              <img
                src={logo.image}
                alt={logo.name}
                className="max-h-12 md:max-h-16 w-auto object-contain opacity-60 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              />
            ) : logo.icon ? (
              <logo.icon className="w-12 h-12 md:w-16 md:h-16 text-slate-400 opacity-60 transition-all duration-300 hover:text-primary hover:opacity-100" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
