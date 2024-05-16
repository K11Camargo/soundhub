/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {  
      backgroundImage: {
      'icone': "url('../fotos/icone.png')",
      'lapis': "url('../fotos/lapis.png')",
      'footer-texture': "url('/img/footer-texture.png')",},
  },
  plugins: [],
}}