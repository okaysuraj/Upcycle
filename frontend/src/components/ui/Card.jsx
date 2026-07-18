import React from 'react';

export default function Card({ children, className = '', ...props }) {
  return (
    <div className={`bg-white rounded-[32px] shadow-lg border border-outline-variant/30 ${className}`} {...props}>
      {children}
    </div>
  );
}