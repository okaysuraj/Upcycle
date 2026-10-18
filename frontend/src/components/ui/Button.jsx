// Shared button styles for the sizes and variants used by the app.
const baseStyles =
  'min-h-[44px] inline-flex items-center justify-center font-medium transition-all duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.975] cursor-pointer disabled:opacity-40 disabled:pointer-events-none rounded-[14px] border select-none tracking-tight';

const variants = {
  primary:
    'bg-[var(--accent-emerald)] hover:bg-emerald-800 text-white border-[var(--accent-emerald)] shadow-[0_1px_2px_rgba(0,0,0,0.06)] dark:bg-emerald-600 dark:hover:bg-emerald-500 dark:text-white dark:border-emerald-600',
  outline:
    'bg-[var(--bg-surface)] hover:bg-stone-100/70 text-[var(--text-primary)] border-[var(--border-hairline)] shadow-[0_1px_2px_rgba(0,0,0,0.02)] dark:hover:bg-stone-800/60',
  ghost:
    'bg-transparent hover:bg-stone-100/80 text-stone-600 hover:text-stone-900 border-transparent dark:text-stone-400 dark:hover:bg-stone-800/70 dark:hover:text-stone-100',
};

const sizes = {
  sm: 'px-3 py-1.5 text-xs gap-1.5 min-h-[38px] rounded-xl',
  md: 'px-4 py-2.5 text-sm font-medium gap-2 min-h-[44px] rounded-[14px]',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      <span>{children}</span>
    </button>
  );
}
