/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'write' : ["Playwrite NZ", "sans-serif"],
        'nunito' : ["Nunito", "sans-serif"],

      },
    },
  },
  plugins: [],
}

