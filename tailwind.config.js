/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}" , "./index.html", "./tailwind.css"],
  theme: {
    extend: {
      colors : {
        'light-100' : '#EEF9FC' ,
        'light-200' : '#DCF3F9',
        'light-300' : '#B9E8F3' ,
        'dark-100' : '#125469' ,
        'dark-200' :  '#0C3846' , 
        'dark-300' :  '#061C23' ,
        'primary' : '#F54E00', 
        'secondary' : '#563635' , 
        'text': '#462255' , 
      }
    },
  },
  plugins: [],
}

