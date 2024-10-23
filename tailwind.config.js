/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url('./public/bannerImg.jpg')",
        'mobile-hero-img': "url('./public/bannerImg-mobile.jpg')",
      }
    },
  },
  plugins: [],
}