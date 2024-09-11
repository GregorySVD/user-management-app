module.exports = {
  darkMode: 'selector', // Enables dark mode with the 'dark' class
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#d4eaf7', // Light mode primary-100
          200: '#b6ccd8', // Light mode primary-200
          300: '#3b3c3d', // Light mode primary-300
          'dark-100': '#1F3A5F', // Dark mode primary-100
          'dark-200': '#4d648d', // Dark mode primary-200
          'dark-300': '#acc2ef', // Dark mode primary-300
        },
        accent: {
          100: '#71c4ef', // Light mode accent-100
          200: '#00668c', // Light mode accent-200
          'dark-100': '#3D5A80', // Dark mode accent-100
          'dark-200': '#cee8ff', // Dark mode accent-200
        },
        text: {
          100: '#1d1c1c', // Light mode text-100
          200: '#313d44', // Light mode text-200
          'dark-100': '#FFFFFF', // Dark mode text-100
          'dark-200': '#e0e0e0', // Dark mode text-200
        },
        bg: {
          100: '#fffefb', // Light mode bg-100
          200: '#f5f4f1', // Light mode bg-200
          300: '#cccbc8', // Light mode bg-300
          'dark-100': '#0F1C2E', // Dark mode bg-100
          'dark-200': '#1f2b3e', // Dark mode bg-200
          'dark-300': '#374357', // Dark mode bg-300
        },
      },
    },
  },
  plugins: [],
};
