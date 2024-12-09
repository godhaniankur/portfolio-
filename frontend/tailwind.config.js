/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage:{
        'mainImage':"url('../image/im1.jpeg')",
        'Freelancer':"url('../image/Freelancer1.jpg')",
        "success":"url('../image/success.jpeg')",
        "relation":"url('../image/relation.jpeg')",
      }
    },
  },
  plugins: [],
}

