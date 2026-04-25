/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        fire: {
          400: "rgb(var(--accent-400) / <alpha-value>)",
          500: "rgb(var(--accent-500) / <alpha-value>)",
          600: "rgb(var(--accent-600) / <alpha-value>)",
        },
        dark: {
          700: "#1e1e2e",
          800: "#181825",
          900: "#11111b",
          950: "#0b0b14",
        },
      },
    },
  },
  plugins: [],
};
