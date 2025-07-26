/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#4AA8E7',
        accent: '#0A2540',
        'light-gray': '#F6F9FC',
        'dark-gray': '#334155',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 15px -3px rgba(74, 168, 231, 0.1), 0 4px 6px -2px rgba(74, 168, 231, 0.05)',
        'card-hover':
          '0 20px 25px -5px rgba(74, 168, 231, 0.15), 0 10px 10px -5px rgba(74, 168, 231, 0.1)',
      },
      animation: {
        'gradient-x': 'gradient-x 5s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
};
