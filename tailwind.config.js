/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
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
        "Geist-R": "Geist-regular",
        "space-L": "space-light",
        "teko-B": "teko-bold",
      },
      colors: {
        "offer" : "#4A4C6C"
      }
    },
  },
  plugins: [],
};
