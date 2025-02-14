/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      // padding: "1rem",
    },

    screens: {
      xs: '380px',
      // => @media (min-width: 450px) { ... }

      sm: '575px',
      // => @media (min-width: 576px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '992px',
      // => @media (min-width: 992px) { ... }

      xl: '1240px',
      // => @media (min-width: 1240px) { ... }

      '2xl': '1360px',
      // => @media (min-width: 1360px) { ... }
    },
    extend: {
      keyframes: {
        glowing: {
          '0%, 100%': { backgroundColor: '#4fa447', boxShadow: '0 0 1px #4fa447' },
          '50%': { backgroundColor: '#4fa447', boxShadow: '0 0 25px #4fa447' },
        },
        blinking: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        glowing: 'glowing 1.5s infinite',
        blinking: 'blinking 1.5s infinite',
      },
      borderRadius: {
        '10px': '10px',
      },
      colors: {
        current: 'currentColor',
        transparent: 'transparent',
        white: '#FFFFFF',
        black: '#121723',
        dark: '#1D2430',
        primary: '#4A6CF7',
        secondary: '#052e26',
        yellow: '#FBB040',
        border: '#1111121A',
        lightGray: '#f5f2f0',
        'bg-color-dark': '#171C28',
        'body-color': {
          DEFAULT: '#111112',
          dark: '#788293',
        },
        stroke: {
          stroke: '#E3E8EF',
          dark: '#353943',
        },
        gray: {
          ...colors.gray,
          dark: '#1E232E',
          light: '#F0F2F9',
        },
      },

      boxShadow: {
        signUp: '0px 5px 10px rgba(4, 10, 34, 0.2)',
        one: '0px 2px 3px rgba(7, 7, 77, 0.05)',
        two: '0px 5px 10px rgba(6, 8, 15, 0.1)',
        three: '0px 5px 15px rgba(6, 8, 15, 0.05)',
        sticky: 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)',
        'sticky-dark': 'inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)',
        'feature-2': '0px 10px 40px rgba(48, 86, 211, 0.12)',
        submit: '0px 5px 20px rgba(4, 10, 34, 0.1)',
        'submit-dark': '0px 5px 20px rgba(4, 10, 34, 0.1)',
        btn: '0px 1px 2px rgba(4, 10, 34, 0.15)',
        'btn-hover': '0px 1px 2px rgba(0, 0, 0, 0.15)',
        'btn-light': '0px 1px 2px rgba(0, 0, 0, 0.1)',
      },
      dropShadow: {
        three: '0px 5px 15px rgba(6, 8, 15, 0.05)',
      },
      width: {
        540: '540px',
      },
      display: {
        unset: 'unset',
      },
    },
  },

  plugins: [require('@tailwindcss/typography')],
};
