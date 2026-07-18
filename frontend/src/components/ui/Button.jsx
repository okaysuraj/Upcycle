import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  icon,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-label-md transition-all active:scale-[0.98]';
  
  const variants = {
    primary: 'bg-primary text-white shadow-lg hover:shadow-primary/20 hover:scale-[1.02]',
    secondary: 'bg-surface-container-high text-on-surface hover:bg-surface-container-highest',
    outline: 'border border-outline-variant text-on-surface hover:bg-surface-container-low',
    ghost: 'text-primary hover:bg-primary/10',
  };

  const sizes = {
    sm: 'py-sm px-md text-label-sm rounded-lg',
    md: 'py-md px-lg text-label-md rounded-full',
    lg: 'py-lg px-xl text-body-lg rounded-full',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      <span className="flex items-center justify-center gap-base">
        {children}
        {icon && <span className="material-symbols-outlined text-[20px]">{icon}</span>}
      </span>
    </button>
  );
}