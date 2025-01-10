/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar'


export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
     primary: '#00FF94',
     primaryLight: '#8F8F8F',
     stroke:'#E2E8F0',
     success:'#4DB675'
    },
  },
  plugins: [
    tailwindScrollbar
  ],
}

