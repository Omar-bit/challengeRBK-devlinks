/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: '#633BFE',
      bgColor: '#FFFFFF',
      textHead: '#323232',
      text: '#979797',
    },
    screens: {
      sm: '450px',

      md: '850px',

      lg: '1400px',

      xl: '1280px',

      '2xl': '1536px',
    },
  },
  plugins: [],
};
