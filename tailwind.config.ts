import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: { 
        fadeIn: 'fadeIn 1.2s ease-in-out',
        menuSlide: 'menuSlide 1s cubic-bezier(0,1,1,1)',
        cardHover: 'hover 0.75s cubic-bezier(0,1,1,1)'
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)"
          },
          "33%": {
            opacity: "0",
            transform: "translateY(20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px)"
          }
        },
        menuSlide: {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px)"
          }
        },
        hover: {
          "0%": {
            transform: "translateY(0px)"
          },
          "100%": {
            transform: "translateY(-12px) scale(1.08)"
          }
        }
      }
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"]
    }
  },
  plugins: [],
  darkMode: "class"
};
export default config;
