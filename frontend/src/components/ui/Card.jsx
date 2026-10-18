// A visual container; each caller supplies its content and spacing.
export default function Card({ children, className = '', ...props }) {
  return (
    <div
      className={`bg-white dark:bg-[#1a1d1b] border border-stone-200/90 dark:border-stone-800 rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all duration-200 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
