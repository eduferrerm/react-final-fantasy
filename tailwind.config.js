/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {    
    extend: {
			fontFamily: {
				'orbi': ['Orbitron', 'Helvetica', 'Arial', 'sans-serif'],
				'cond': ['Roboto Condensed', 'Helvetica', 'Arial', 'sans-serif'],
				'main': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
			},
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
		},
  },
  plugins: [],
}
