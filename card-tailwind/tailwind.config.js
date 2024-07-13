/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px',
      },
      colors: {
        'regal-blue': '#15253f',
        'dark-blue': '#09182b',
        'light-green': '#1ed6d5',
        'gray': '#91abd2',
      },
    },
  },
  plugins: [],
}

