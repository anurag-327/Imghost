/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  content: ["./*.{ejs,html,js,css}", "./**/*.{ejs,html,js,css}","./views/**/*ejs"],
  theme: {
    screens: {
      'sm': {'min': '0px', 'max': '600px'},
      'md': {'min': '601px', 'max': '1100px'},
      'lg': {'min': '1101px', 'max': '1279px'},
      'xl': {'min': '1280px'},
      
    },
    extend: {},
  },
  plugins: [],
}

