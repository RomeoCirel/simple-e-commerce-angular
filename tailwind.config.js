/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#d1c9bb',
        seccondary: '#685245',
        accent: '#2e7a4f'
      }
    },
  },
  plugins: [],
}

