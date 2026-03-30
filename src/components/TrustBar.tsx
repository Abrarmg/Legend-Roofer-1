import React from 'react';

const TrustBar = () => {
  const items = [
    "11+ Years In Business",
    "250+ Projects Completed",
    "10+ Expert Installers",
    "Licensed & Experienced"
  ];

  return (
    <div className="bg-black py-4 overflow-hidden border-y border-white/10">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* First set */}
        <div className="flex gap-12 px-6">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full" />
              <span className="text-white font-bold uppercase tracking-widest text-sm">{item}</span>
            </div>
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex gap-12 px-6">
          {items.map((item, i) => (
            <div key={`dup-${i}`} className="flex items-center gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full" />
              <span className="text-white font-bold uppercase tracking-widest text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
