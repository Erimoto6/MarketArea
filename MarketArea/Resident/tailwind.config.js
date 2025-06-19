// tailwind.config.js
module.exports = {
  content: [
    "./Resident/**/*.{html,js}", // ✅ include all files in Resident/
    "./*.html", // ✅ include files in the root too
  ],
  theme: {
    extend: {
      fontFamily: {
      k2d: ['"K2D"', 'sans-serif'],
      bebas: ['"Bebas Neue"', 'sans-serif'],
    },
    },
  },
  plugins: [],
}