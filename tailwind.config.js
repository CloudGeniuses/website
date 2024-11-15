/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths to match your project structure
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { fontFamily:{
      garamond:['EB Garamond, serif'],
      lato:['Lato, serif'],
      roboto:['Roboto, serif']
    }},
  },
  plugins: [],
}

