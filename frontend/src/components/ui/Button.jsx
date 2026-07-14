import React from 'react';

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = "px-4 py-2 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center disabled:opacity-50";
  const variants = {
    primary: "bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm",
    secondary: "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50",
    danger: "bg-red-500 text-white hover:bg-red-600"
  };
  
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}