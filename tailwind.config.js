/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#DC7633",
          DEFAULT: "#D35400",
          dark: "#BA4A00",
        },
      },
      screens: {
        sm: "640px", // Mobile devices
        md: "768px", // Tablet devices
        lg: "1024px", // Desktop devices
      },
    },
  },
  plugins: [],
};
