/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

    // Preline
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#447f7f',
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
        serif: ['Rubik', 'serif'],
      },
      typography: (theme) => ({
        dark: {
          css: {
            color: 'white',
          },
        },
      }),
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
  darkMode: 'class',
}

