import React from 'react';

export default function Input({
  label,
  id,
  type = 'text',
  icon,
  placeholder,
  value,
  onChange,
  className = '',
  required = false
}) {
  return (
    <div className={`space-y-base ${className}`}>
      {label && (
        <label className="font-label-md text-label-md text-on-surface-variant block" htmlFor={id}>
          {label}
        </label>
      )}
      <div className="relative flex items-center group">
        {icon && (
          <span className="material-symbols-outlined absolute left-md text-outline group-focus-within:text-primary transition-colors">
            {icon}
          </span>
        )}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`w-full py-md bg-surface-container-low border border-outline-variant/40 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-body-md ${icon ? 'pl-[52px] pr-md' : 'px-md'}`}
        />
      </div>
    </div>
  );
}