/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius:{
      'padrao':'46px'
    },
    extend: {
      colors:{
        'preto':'#000000',
        'cinza': '#3A3A3A',
        'container': '#444343',
        'rosa': '#DE9494',
        'containerFade': '#242424',
        'containerFade2': '#4E4E4E',
        'sombra': '#3A3A3A'
      },
      fontFamily:{
        jetBrains:['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}