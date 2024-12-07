/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage:{
        'mainImage':"url('../image/im1.jpeg')"
      }
    },
  },
  plugins: [],
}

