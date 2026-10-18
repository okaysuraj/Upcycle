import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ className = '' }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative w-9 h-9 flex items-center justify-center rounded-xl border border-stone-200/80 dark:border-stone-800 bg-white/80 dark:bg-[#1a1d1b]/80 backdrop-blur-sm text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100/80 dark:hover:bg-stone-800/80 transition-all duration-200 shadow-sm active:scale-95 cursor-pointer ${className}`}
      title={isDark ? 'Switch to Light mode' : 'Switch to Dark mode'}
      aria-label={isDark ? 'Switch to Light mode' : 'Switch to Dark mode'}
    >
      <span
        className={`material-symbols-outlined text-[19px] transition-transform duration-300 ${
          isDark ? 'rotate-90 text-amber-300' : 'rotate-0 text-stone-600'
        }`}
      >
        {isDark ? 'light_mode' : 'dark_mode'}
      </span>
    </button>
  );
}
