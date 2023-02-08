/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")
const Myclass = plugin(function ({addUtilities}) {
  addUtilities({
    ".my-rotate-y-180": {
      transform:"rotateY(180deg)"
    },
    transitionProperty: {
      width: 'width'
  }
  })
})
module.exports = {
  content: [
    "./src/**/*.{html,js,vue}",
  "./index.html"],
  theme: {
   
      screens: {
        'ss': '0px',
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
        
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        'mg': '1100px',
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... } 

        'mx': '1300px',
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }


      },
    
    extend: {
      transitionProperty: {
        'width': 'width'
    },
    },
  },
  plugins: [Myclass],
}
