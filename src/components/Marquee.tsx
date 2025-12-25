import React from 'react';

interface MarqueeProps {
  items: Array<{ label: string }>;
}

export const Marquee: React.FC<MarqueeProps> = ({ items }) => {
  return (
    <div className="relative overflow-hidden py-6 border-y border-white/10">
      <div className="flex gap-10 animate-marquee whitespace-nowrap">
        {items.concat(items).map((item, idx) => (
          <span key={idx} className="text-sm md:text-base text-white/70 hover:text-white transition-colors">
            {item.label}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 20s linear infinite; }
      `}</style>
    </div>
  );
};
