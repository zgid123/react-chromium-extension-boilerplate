/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkStealBlue: {
          50: '#e3edf8',
          100: '#c7dbf0',
          200: '#8eb6e1',
          300: '#5a94d3',
          400: '#3071b6',
          500: '#214e7d',
          600: '#1b3f65',
          700: '#14304d',
          800: '#0d1e30',
          900: '#060f18',
          950: '#03080c',
        },
      },
    },
  },
  plugins: [],
};
