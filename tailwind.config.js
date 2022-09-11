/** @type {import('tailwindcss').Config} */
const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {    
    extend: {
      colors: {
        green: {
          ...colors.green,
          '900': '#9CFF12',
        }
      },
			fontFamily: {
				'libre': ['Libre Baskerville', 'Times New Roman', 'Times', 'serif'],
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
