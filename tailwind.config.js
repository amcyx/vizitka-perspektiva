module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#CB8816',
        secondary: '#EBD36F',
        accent: '#2EACB4',
        mint: '#1DE9B6',
        neon: '#18FFFF',
        danger: '#FF5252',
        white: '#FFFFFF',
        black: '#000000',
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}
