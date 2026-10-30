import React, { useEffect, useState } from 'react';

interface FloatingItem {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  type: 'emerald-petal' | 'gold-petal' | 'sparkle' | 'bokeh';
  opacity: number;
  rotate: number;
}

export const FloatingParticles: React.FC = () => {
  const [items, setItems] = useState<FloatingItem[]>([]);

  useEffect(() => {
    // Generate gentle dark emerald petals and gold stardust elements
    const generated: FloatingItem[] = Array.from({ length: 26 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: i % 4 === 0 ? Math.random() * 8 + 12 : Math.random() * 5 + 4,
      duration: Math.random() * 12 + 14, // 14-26 seconds drift
      delay: Math.random() * 10,
      type: i % 4 === 0 ? 'emerald-petal' : i % 4 === 1 ? 'gold-petal' : i % 2 === 0 ? 'sparkle' : 'bokeh',
      opacity: Math.random() * 0.45 + 0.35,
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
          {item.type === 'emerald-petal' ? (
            // Dark Emerald Green Rose Petal with Gilded Edge
            <svg
              width={item.size * 1.5}
              height={item.size * 1.9}
              viewBox="0 0 32 42"
              style={{
                transform: `rotate(${item.rotate}deg)`,
                animation: `petal-sway 4.5s ease-in-out infinite alternate`,
              }}
            >
              <defs>
                <linearGradient id={`emeraldGrad-${item.id}`} x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#1B8061" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#0B4231" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#042017" stopOpacity="0.95" />
                </linearGradient>
                <linearGradient id={`goldTip-${item.id}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F5D77F" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#AA7E1F" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <path
                d="M16,0 C27,10 32,26 23,37 C16,44 8,37 3,29 C-3,19 5,5 16,0 Z"
                fill={`url(#emeraldGrad-${item.id})`}
                stroke={`url(#goldTip-${item.id})`}
                strokeWidth="0.8"
              />
              {/* Petal center vein */}
              <path
                d="M16,4 Q17,20 16,36"
                stroke="#D4AF37"
                strokeWidth="0.5"
                strokeOpacity="0.4"
                fill="none"
              />
            </svg>
          ) : item.type === 'gold-petal' ? (
            // Shimmering Golden Leaf/Petal
            <svg
              width={item.size * 1.3}
              height={item.size * 1.6}
              viewBox="0 0 30 40"
              style={{
                transform: `rotate(${item.rotate}deg)`,
                animation: `petal-sway 3.8s ease-in-out infinite alternate`,
              }}
            >
              <defs>
                <linearGradient id={`goldGrad-${item.id}`} x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FFF2B2" stopOpacity="0.85" />
                  <stop offset="45%" stopColor="#D4AF37" stopOpacity="0.75" />
                  <stop offset="100%" stopColor="#8C6615" stopOpacity="0.7" />
                </linearGradient>
              </defs>
              <path
                d="M15,0 C25,10 30,25 22,35 C15,42 8,36 3,28 C-3,18 5,5 15,0 Z"
                fill={`url(#goldGrad-${item.id})`}
              />
            </svg>
          ) : item.type === 'sparkle' ? (
            // Radiant Gold Sparkle Diamond
            <div
              className="rounded-full bg-gradient-to-tr from-[#D4AF37] via-[#FFF3B8] to-white shadow-[0_0_10px_#D4AF37]"
              style={{
                width: `${item.size}px`,
                height: `${item.size}px`,
                animation: 'sparkle-pulse 2.2s ease-in-out infinite alternate',
              }}
            />
          ) : (
            // Warm Gold & Emerald Bokeh Orb
            <div
              className="rounded-full bg-[#18664D]/30 blur-[1px] border border-[#D4AF37]/20"
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
