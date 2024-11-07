/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'between':'space-between',
      colors: {
        // Definição de cores globais
        'main': '#ED2F59',
        'footerBg': '#000',
        'footerColor': '#fff',

        // Definição de cores para o modo claro
        'lightSecondary': '#DADADA',
        'lightTertiary': '#AEAEAE',
        'lightAccent': '#000',
        'lightParagraph': '#000',
        'lightTitles': '#000',
        'lightSubtitles': '#DADADA',
        'lightButton': '#000',
        'lightBg': '#fff',
        'lightIcon': '#000',

        // Definição de cores para o modo escuro
        'darkSecondary': '#272727',
        'darkTertiary': '#424242',
        'darkAccent': '#fff',
        'darkParagraph': '#fff',
        'darkTitles': '#fff',
        'darkSubtitles': '#272727',
        'darkButton': '#fff',
        'darkBg': '#fff',
        'darkIcon': '#000',
      },
      fontFamily: {
        'titles': ['Poppins', 'sans-serif'],
        'paragraphs': ['Lato', 'sans-serif'],
      },
      fontWeight: {
        'light': 300,
        'regular': 400,
        'medium': 500,
        'bold': 700,
      },
    },
  },
  plugins: [],
};
