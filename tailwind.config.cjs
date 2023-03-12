/** @type {import('tailwindcss').Config} */
const colors = require('./tailwind-configs/colors.config.cjs');
const typography = require('./tailwind-configs/typography.config.cjs');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors,
    ...typography,
    screens: {
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
