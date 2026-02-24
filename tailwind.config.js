/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '0',
      DEFAULT: '0',
      'md': '0',
      'lg': '0',
      'xl': '0',
      '2xl': '0',
      '3xl': '0',
      'full': '0',
      't': '0',
      'r': '0',
      'b': '0',
      'l': '0',
      'tl': '0',
      'tr': '0',
      'br': '0',
      'bl': '0',
    },
    extend: {
      colors: {
        primary: '#2d5a27',
        accent: '#5a8a3c',
        gold: '#e8a020',
        dark: '#1a2418',
        light: '#f5f2ed',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
