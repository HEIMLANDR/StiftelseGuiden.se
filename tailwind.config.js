/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
      colors: {
        // Primary Colors - Lighter and more vibrant blues
        primary: {
          50: '#EBF5FF',
          100: '#D6EBFF',
          200: '#ADD6FF',
          300: '#84C1FF',
          400: '#5AACFF',
          500: '#3193FF', // Main primary color
          600: '#0A7AFF',
          700: '#0062D6',
          800: '#004CAD',
          900: '#003785',
        },
        // Secondary Colors
        secondary: {
          50: '#F5F7FA',
          100: '#E4E7EB',
          200: '#CBD2D9',
          300: '#9AA5B1',
          400: '#7B8794',
          500: '#616E7C', // Main secondary color
          600: '#52606D',
          700: '#3E4C59',
          800: '#323F4B',
          900: '#1F2933',
        },
        // Accent Colors
        accent: {
          50: '#E3FCF7',
          100: '#C0F9ED',
          200: '#84F0DC',
          300: '#48E7CA',
          400: '#1CD8B2',
          500: '#0DBE9A', // Main accent color
          600: '#0A9E81',
          700: '#087F68',
          800: '#056050',
          900: '#03322A',
        },
        success: {
          50: '#E5F9F1',
          100: '#C1EFD9',
          500: '#10B981',
          600: '#059669',
        },
        warning: {
          50: '#FFF8E6',
          100: '#FEEEBE',
          500: '#F59E0B',
          600: '#D97706',
        },
        error: {
          50: '#FEE9E9',
          100: '#FCCDCD',
          500: '#EF4444',
          600: '#DC2626',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['Consolas', 'monospace'],
      },
      boxShadow: {
        'soft': '0 1px 2px 0 rgb(15 23 42 / 0.04)',
        'medium': '0 4px 12px -2px rgb(15 23 42 / 0.08), 0 2px 4px -2px rgb(15 23 42 / 0.04)',
        'hard': '0 16px 40px -8px rgb(15 23 42 / 0.16)',
      },
    },
  },
  plugins: [],
}
