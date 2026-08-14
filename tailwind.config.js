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
        // Passes WCAG AA on white (4.8:1).
        sisSteel: '#6b7280',
        // sisSteel only reaches 3.9:1 on sisCharcoal, so dark sections use
        // this lighter tone instead (7.5:1).
        sisSteelLight: '#9ca3af'
      }
    }
  },
  plugins: [],
}
