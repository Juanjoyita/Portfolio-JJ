import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"], // Activar el modo oscuro basado en la clase "dark"
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        robotoCondensed: ["'Roboto Condensed'", "sans-serif"], // Fuente Roboto Condensed
        chokokutai: ["'Chokokutai'", "serif"], // Fuente Chokokutai
        kodeMono: ["'Kode Mono'", "monospace"], // Fuente Kode Mono
        oswald: ["'Oswald'", "sans-serif"], // Fuente Oswald
      },
      colors: {
        primary: "#711792", // Color principal (para modo claro)
        secondary: "#f1f1f1", // Color complementario claro
        darkPrimary: "#5c0a7e", // Color oscuro principal (para modo oscuro)
        darkSecondary: "#1f1f1f", // Fondo oscuro complementario
        accent: {
          DEFAULT: "#f5f", // Color de acento (puedes cambiarlo a tu gusto)
          hover: "#808", // Color de acento al hacer hover
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
