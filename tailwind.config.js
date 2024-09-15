module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Roboto',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      fontSize: {
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
      },
      backgroundImage: {
        'gradient-light': 'linear-gradient(to bottom, #F5ECD7, #c2baa6)',
        'gradient-dark': 'linear-gradient(to bottom, #0F1C2E, #374357)',
      },
      colors: {
        primary: {
          100: '#8FBF9F', // Light mode primary-100
          200: '#68a67d', // Light mode primary-200
          300: '#24613b', // Light mode primary-300
          'dark-100': '#1F3A5F', // Dark mode primary-100
          'dark-200': '#4d648d', // Dark mode primary-200
          'dark-300': '#acc2ef', // Dark mode primary-300
        },
        accent: {
          100: '#F18F01', // Light mode accent-100
          200: '#833500', // Light mode accent-200
          'dark-100': '#3D5A80', // Dark mode accent-100
          'dark-200': '#cee8ff', // Dark mode accent-200
        },
        text: {
          100: '#353535', // Light mode text-100
          200: '#5f5f5f', // Light mode text-200
          'dark-100': '#FFFFFF', // Dark mode text-100
          'dark-200': '#e0e0e0', // Dark mode text-200
        },
        bg: {
          100: '#F5ECD7', // Light mode bg-100
          200: '#ebe2cd', // Light mode bg-200
          300: '#c2baa6', // Light mode bg-300
          'dark-100': '#0F1C2E', // Dark mode bg-100
          'dark-200': '#1f2b3e', // Dark mode bg-200
          'dark-300': '#374357', // Dark mode bg-300
        },
      },
    },
  },
  plugins: [require('daisyui'), require('tailwindcss-animated')],
};
