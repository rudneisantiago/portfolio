/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": {
          50: "#eaf1ff",
          100: "#d9e6ff",
          200: "#bacfff",
          300: "#90adff",
          400: "#657fff",
          500: "#4153ff",
          600: "#2022ff",
          700: "#1715ed",
          800: "#1516c2",
          900: "#1a1d95",
          950: "#101156",
        },
      },
    },
  },
  plugins: [],
};
