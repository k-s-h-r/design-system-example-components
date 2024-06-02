/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  // 開発時のみstorybookでのダークモード切り替えのためにselectorを使用する
  darkMode: process.env.NODE_ENV === 'production' ? undefined : ['selector', '[data-mode="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Noto Sans Mono'],
      },
    },
    keyframes: {
      'accordion-down': {
        from: { height: '0' },
        to: { height: 'var(--radix-accordion-content-height)' },
      },
      'accordion-up': {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: '0' },
      },
    },
    animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
    },
  },
  plugins: [
    require('@digital-go-jp/tailwind-theme-plugin'),
    require('tailwindcss-react-aria-components'),
    require('tailwindcss-animate'),
  ],
};
