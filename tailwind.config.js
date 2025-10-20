/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class", // Se activa agregando la clase 'dark' al <html> o <body>
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#003973",
          light: "#0052a3",
          dark: "#2870BC", // tono celeste más brillante para modo oscuro
        },
        secondary: {
          DEFAULT: "#2ECC71", // Verde positivo (éxito, saldos, confirmaciones)
          light: "#58D68D",
          dark: "#239B56",
        },
        accent: {
          DEFAULT: "#E74C3C", // Rojo gasto/alerta (errores, vencimientos)
          light: "#F1948A",
          dark: "#C0392B",
        },
        background: {
          DEFAULT: "#F5F6F7", // más claro, mejor contraste
          dark: "#121212",
        },
        surface: {
          DEFAULT: "#FFFFFF", // Superficies (tarjetas, modales)
          dark: "#1E1E1E", // Superficies en modo oscuro
        },
        text: {
          DEFAULT: "#34495E", // Texto base (modo claro)
          light: "#566573", // Texto secundario (modo claro)
          dark: "#E5E8E8", // Texto principal (modo oscuro)
        },
        borderColor: {
          DEFAULT: "#CBD5E1",
        },
      },
    },
  },
  plugins: [],
};
