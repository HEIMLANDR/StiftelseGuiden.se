/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0f0ff',
          200: '#c7e3ff',
          300: '#96ceff',
          400: '#52b1ff',
          500: '#2491ff',
          600: '#0070f3',
          700: '#0057d1',
          800: '#0047ab',
          900: '#003c8f',
        },
        warm: {
          50: '#fdfaf6',
          100: '#fcf5eb',
          200: '#f7e8d4',
          300: '#f2d7b6',
          400: '#e9bd8c',
          500: '#dea76b',
          600: '#c68c4e',
          700: '#a6703c',
          800: '#8a5d35',
          900: '#724d31',
        }
      }
    },
  },
  plugins: [],
};