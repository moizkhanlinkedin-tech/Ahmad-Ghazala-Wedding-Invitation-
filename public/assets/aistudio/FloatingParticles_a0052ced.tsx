import React, { useEffect, useState } from 'react';

interface FloatingItem {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  type: 'petal' | 'sparkle' | 'bokeh';
  opacity: number;
  rotate: number;
}

export const FloatingParticles: React.FC = () => {
  const [items, setItems] = useState<FloatingItem[]>([]);

  useEffect(() => {
    // Generate gentle, luxury rose petals & golden spark particles
    const generated: FloatingItem[] = Array.from({ length: 22 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage across screen width
      size: i % 3 === 0 ? Math.random() * 8 + 10 : Math.random() * 5 + 4,
      duration: Math.random() * 12 + 14, // 14-26 seconds floating down
      delay: Math.random() * 10,
      type: i % 3 === 0 ? 'petal' : i % 2 === 0 ? 'sparkle' : 'bokeh',
      opacity: Math.random() * 0.45 + 0.25,
      rotate: Math.random() * 360,
    }));
    setItems(generated);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-20"
    >
      {items.map((item) => (
        <div
          key={item.id}
          className="absolute will-change-transform"
          style={{
            left: `${item.x}%`,
            top: '-5%',
            animation: `float-fall ${item.duration}s linear infinite`,
            animationDelay: `${item.delay}s`,
            opacity: item.opacity,
          }}
        >
          {item.type === 'petal' ? (
            // Blush Rose Petal
            <svg
              width={item.size * 1.4}
              height={item.size * 1.8}
              viewBox="0 0 30 40"
              style={{
                transform: `rotate(${item.rotate}deg)`,
                animation: `petal-sway 4s ease-in-out infinite alternate`,
              }}
            >
              <path
                d="M15,0 C25,10 30,25 22,35 C15,42 8,36 3,28 C-3,18 5,5 15,0 Z"
                fill="url(#petalGradient)"
              />
              <defs>
                <linearGradient id="petalGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FAD4D8" stopOpacity="0.85" />
                  <stop offset="60%" stopColor="#ECAAB1" stopOpacity="0.75" />
                  <stop offset="100%" stopColor="#C47385" stopOpacity="0.65" />
                </linearGradient>
              </defs>
            </svg>
          ) : item.type === 'sparkle' ? (
            // Gold Sparkle Diamond
            <div
              className="rounded-full bg-gradient-to-tr from-[#C5A059] via-[#DFC285] to-white shadow-[0_0_8px_#DFC285]"
              style={{
                width: `${item.size}px`,
                height: `${item.size}px`,
                animation: 'sparkle-pulse 2.5s ease-in-out infinite alternate',
              }}
            />
          ) : (
            // Soft Champagne Bokeh Dot
            <div
              className="rounded-full bg-[#E8C5AF]/40 blur-[1px]"
              style={{
                width: `${item.size * 1.2}px`,
                height: `${item.size * 1.2}px`,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};
