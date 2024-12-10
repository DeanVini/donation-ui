/** @type {import('tailwindcss').Config} */
module.exports = {
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
        // Adicione as cores personalizadas
        'background-light': '#f0f0f0', // Cor de fundo no modo claro
        'background-dark': '#1a1a1a', // Cor de fundo no modo escuro
      },
      backgroundColor: {
        // Defina as cores de fundo padrão
        background: '#f0f0f0', // Cor de fundo no modo claro
      },
    },
  },
  plugins: [],
}
