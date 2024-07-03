/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#214567',
        secondary: '#8C0000',
        bg: '#DCD6CA', 
        dark: '#1D1D1D', // Ejemplo: un amarillo brillante
        light: '#FFFEFE', 
      },
      fontFamily:{
        mustard: ['Mustard Bold', 'sans-serif'],
        mustardMedium: ['Mustard Medium', 'sans-serif'],
        marcellus: ['Marcellus', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
