/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  variants: {
    backgroundColor: ['responsive', 'hover','focus', 'active'],
  },

  theme: {
    extend: {},
  },
  plugins: [],
}
