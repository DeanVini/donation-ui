/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          "'Segoe UI'",
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          "'Fira Sans'",
          "'Droid Sans'",
          "'Helvetica Neue'",
          'sans-serif',
        ],
      },
      colors: {
        mantis: {
          50: '#f6faf3',
          100: '#e9f5e3',
          200: '#d3eac8',
          300: '#afd89d',
          400: '#82bd69',
          500: '#61a146',
          600: '#4c8435',
          700: '#3d692c',
          800: '#345427',
          900: '#2b4522',
          950: '#13250e',
        },
      },
    },
  },
  plugins: [],
}
