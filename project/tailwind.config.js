/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#faf9f7',
          100: '#f5f3ef',
          200: '#e8e4dd',
          300: '#dbd5cb',
          400: '#cec6b9',
          500: '#c1b7a7',
          600: '#b4a895',
          700: '#a79983',
          800: '#9a8a71',
          900: '#8d7b5f',
        },
        terra: {
          50: '#fbf7f4',
          100: '#f7efe9',
          200: '#efdfd3',
          300: '#e7cfbd',
          400: '#dfbfa7',
          500: '#d7af91',
          600: '#cf9f7b',
          700: '#c78f65',
          800: '#bf7f4f',
          900: '#b76f39',
        },
        stone: {
          50: '#f7f7f7',
          100: '#efefef',
          200: '#dfdfdf',
          300: '#cfcfcf',
          400: '#bfbfbf',
          500: '#afafaf',
          600: '#9f9f9f',
          700: '#8f8f8f',
          800: '#7f7f7f',
          900: '#6f6f6f',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};