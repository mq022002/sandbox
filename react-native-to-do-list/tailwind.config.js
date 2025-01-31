// https://www.youtube.com/watch?v=AehQRLkVkiE
// https://www.nativewind.dev/quick-starts/expo#2-setup-tailwind-css

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./(tabs)/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
