/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        sisAccent: '#0ea5a4',
        sisCharcoal: '#111214',
        sisSteel: '#6b7280'
      }
    }
  },
  plugins: [],
}
