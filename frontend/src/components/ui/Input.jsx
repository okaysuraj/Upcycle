import React from 'react';

export default function Input({ label, error, className = '', ...props }) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
      <input 
        className={`px-4 py-2.5 rounded-xl border bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none ${error ? 'border-red-500' : 'border-gray-200'}`}
        {...props}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}