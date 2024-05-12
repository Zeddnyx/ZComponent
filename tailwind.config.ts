import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#24b47e",
        primary_dark: "#00997B",

        light: {
          DEFAULT: "#ffffff",
          base: "#646464",
          100: "#f9f9f9",
          200: "#f2f2f2",
          300: "#ededed",
          400: "#e6e6e6",
          500: "#dadada",
          600: "#d2d2d2",
          800: "#bcbcbc",
          900: "#a8a8a8",
        },
        dark: {
          DEFAULT: "#000000",
          base: "#a5a5a5",
          100: "#181818",
          200: "#212121",
          250: "#252525",
          300: "#2a2a2a",
          350: "#2b2b2b",
          400: "#323232",
          450: "#2e2e2e",
          500: "#3e3e3e",
          600: "#4a4a4a",
          700: "#6e6e6e",
          800: "#808080",
          850: "#989898",
          900: "#999999",
          950: "#2b2b2b",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
