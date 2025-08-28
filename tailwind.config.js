/** @type {import('tailwindcss').Config} */
module.exports = {
    // Configura os caminhos dos arquivos onde o Tailwind irá procurar por classes.
    // Isso garante que o Tailwind gere apenas o CSS que você realmente usa.
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  