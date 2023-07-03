/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'pop-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        'rapid-fire': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-50%)',
          },
          '20%': {
            opacity: '1',
            transform: 'translateX(0%)',
          },
          '80%': {
            opacity: '1',
            transform: 'translateX(0%)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateX(50%)',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'pop-in': 'pop-in 0.5s ease-in-out forwards',
        'rapid-fire': 'rapid-fire 2s ease-in-out infinite',
        'fade-in': 'fade-in 0.5s ease-out',
      },
    },
  },
  plugins: [],
};
