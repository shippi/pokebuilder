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
        fadeIn: 'fadeIn 1.2s ease-in-out'
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
        }
      }
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"]
    }
  },
  plugins: [],
};
export default config;
