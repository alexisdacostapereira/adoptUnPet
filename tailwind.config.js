/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Baloo2", "sans-serif"],
      },
      height: {
        128: "32rem",
        88: "22rem",
      },
      colors: {
        primary: {
          DEFAULT: "#1E375F",
          light: "#F4F8FF",
          dark: "#13223B",
          orange: "#FFF4EE",
        },
      },
      zIndex: {
        5000: "5000",
      },
    },
  },
  plugins: [],
};
