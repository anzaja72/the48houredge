import React from 'react';

interface InfiniteSliderProps {
  children: React.ReactNode;
  gap?: number;
  reverse?: boolean;
  className?: string;
  speed?: number; // in seconds
}

export function InfiniteSlider({
  children,
  gap = 24,
  reverse = false,
  className = '',
  speed = 20,
}: InfiniteSliderProps) {
  return (
    <div className={`overflow-hidden flex w-full ${className}`} style={{ gap: `${gap}px` }}>
      <div
        className="flex shrink-0 animate-infinite-slider"
        style={{
          gap: `${gap}px`,
          animationDuration: `${speed}s`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {children}
      </div>
      <div
        className="flex shrink-0 animate-infinite-slider"
        style={{
          gap: `${gap}px`,
          animationDuration: `${speed}s`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {children}
      </div>
      <style>{`
        @keyframes infinite-slider {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - \${gap}px)); }
        }
        .animate-infinite-slider {
          animation: infinite-slider linear infinite;
        }
      `}</style>
    </div>
  );
}
