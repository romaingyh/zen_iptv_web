/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': '#876AFF',
        'secondary': '#A7EDE7'
      },
    },
    fontFamily: {
      'sans': ['Golos Text', 'sans-serif'],
    }
  },
  plugins: []
};