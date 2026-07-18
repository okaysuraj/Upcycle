/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#00522d",
        "secondary": "#556158",
        "surface-ice": "#f4faff",
        "surface": "#f4faff",
        "surface-container-low": "#e7f6ff",
        "surface-container-high": "#d9ebf5",
        "outline": "#6f7a70",
        "outline-variant": "#bec9be",
        "on-surface": "#0d1e25",
        "on-surface-variant": "#3f4941",
        "on-background": "#0d1e25",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",
        "success-container": "#2eb872",
      }
    },
  },
  plugins: [],
}
