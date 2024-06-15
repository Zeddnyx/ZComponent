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
    backgroundSize: {
      "scroll-reveal": "0% 100%",
    },
    fontFamily: {
      mono: ["var(--font-mono)", "monospace"],
      inter: ["var(--font-inter)", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#24b47e",
        primary_dark: "#00997B",
        danger: "#EB5757",

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
      fontSize: {
        12: [
          "11px",
          {
            lineHeight: "16px",
          },
        ],
        14: [
          "14px",
          {
            lineHeight: "20px",
          },
        ],
        16: [
          "16px",
          {
            lineHeight: "24px",
          },
        ],
        18: [
          "18px",
          {
            lineHeight: "24px",
          },
        ],
        20: [
          "20px",
          {
            lineHeight: "24px",
          },
        ],
        24: [
          "24px",
          {
            lineHeight: "30px",
          },
        ],
        26: [
          "26px",
          {
            lineHeight: "32px",
          },
        ],
        30: [
          "30px",
          {
            lineHeight: "36px",
          },
        ],
        36: [
          "36px",
          {
            lineHeight: "42px",
          },
        ],
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
        zoomIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        zoomOut: {
          "0%": {
            opacity: "0",
            transform: "scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        slideInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideInDown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "scroll-reveal": {
          to: {
            backgroundSize: "100% 100%",
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.2s ease-out",
        "fade-in5": "fade-in 0.5s ease-out",
        "fade-in8": "fade-in 0.8s ease-out",
        "zoom-in": "zoomIn 0.3s ease-in-out",
        "zoom-out": "zoomOut 0.3s ease-in-out",
        "slide-in-up": "slideInUp 0.4s ease-in-out",
        "slide-in-down": "slideInDown 0.4s ease-in-out",
        "scroll-reveal": "scroll-reveal linear 0.3s forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
