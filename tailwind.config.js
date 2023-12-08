/** @type {import('tailwindcss').Config} */
import { myColors } from "./colors";

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: myColors,
    },
  },
  plugins: [],
};
