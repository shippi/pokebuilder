import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bug': '#92BC2C',
        'dark': '#424049',
        'dragon': '#0C69C8',
        'electric': '#F2D94E',
        'fire': '#FBA54C',
        'fairy': '#EE90E6',
        'fighting': '#D3425F',
        'flying': '#A1BBEC',
        'ghost': '#5F6DBC',
        'grass': '#5FBD58',
        'ground': '#DA7C4D',
        'ice': '#75D0C1',
        'normal': '#A0A29F',
        'poison': '#B763CF',
        'psychic': '#FA8581',
        'rock': '#C9BB8A',
        'steel': '#5695A3',
        'water': '#539DDF'
      },
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
