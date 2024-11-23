/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html" , "./src/css/input.css"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        "cabinet-B": "cabinet-bold",
        "cabinet-EB": "cabinet-extrabold",
        "cabinet-M": "cabinet-medium",
        "cabinet-R": "cabinet-regular",
        "Geist-B": "Geist-bold",
        "space-L": "space-light",
        "teko-B": "teko-bold",
        "teko-R": "teko-regular"
      },
      colors: {
        "offer": "#4A4C6C",
        "hero-section-title" : "rgba(74,76,108,17%)",
        "hero-section-paragraph" : "#181818",
        "slate-blue" : "#4A4C6C",
        "light-slate-blue" : "#7C7EA1",
        "moss-green" : "#77794E",
        "light-moss-green" : "#9FA16D",
        "cus-white" : "#f4f4f4",
        "smoky-white" : "#E9E9EB",
        "red" : "#DB4444"
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
