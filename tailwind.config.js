/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Noto Sans Mono'],
      },
    },
  },
  plugins: [
    require('@digital-go-jp/tailwind-theme-plugin'),
    require('tailwindcss-react-aria-components'),
    require('tailwindcss-animate'),
  ],
};
