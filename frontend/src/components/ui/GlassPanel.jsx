import React from 'react';

export default function GlassPanel({ children, className = '' }) {
  return (
    <div className={`bg-white/70 backdrop-blur-[12px] border border-[#a5d6a7]/30 shadow-sm ${className}`}>
      {children}
    </div>
  );
}
