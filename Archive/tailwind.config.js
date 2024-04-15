/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'signIn': "url('/img/signIn.png')",
        'signUp': "url('/img/signUp.png')",
      }
    },
    colors: {
      "primary": "#3a89c9",
      "secondary": "#9cc4e4",
      "tertiary": "#e9f2f9",
      "dark": "#1b325f",
      "july": "#9DD7F8",
      "background": "#FCFCFC",
      "text": "#161922",
      "text-dim": "#6B7280",
      "accent": "#F26C4F",
      'green': '#1b5f5e',
      'yellow' : '#feb15f',
      "gray-200" : "#E5E7EB",
      "gray-300" : "#D1D5DB",
      "gray-400" : "#9CA3AF",
      "gray-500" : "#6B7280",
      "white": "#FFFFFF",
      "error": "#DC2626",
      "success": "#10B981",
      'transparent': 'transparent',
      'heart': '#F87171',
    },
    screens: {
      'xs': '320px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1920px',
      '4xl': '2560px',
    },
    gridTemplateColumns:{
      'layout': '60% 40%',
    },
    rotate: {
      '30': '30deg',
    },
    scale: {
      '200': '2',
      '175': '1.75',
      '150': '1.5',
      '125': '1.25',
      '110': '1.1',
      '90': '0.9',
      '75': '0.75',
      '50': '0.5',
      '25': '0.25',
    },
    padding: {
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.75rem',
      '8': '2rem',
      '9': '2.25rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '18': '4.5rem',
      '24': '6rem',
      '32': '8rem',
      '40': '10rem',
      '45': '11.25rem',
      '48': '12rem',
      '56': '14rem',
      '64': '16rem',
      '72': '18rem',
      '80': '20rem',
      '88': '22rem',
      '96': '24rem',
      '104': '26rem',
    },
    boxShadow: {
      card : "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      product: "rgba(0,0,0,0.08) 0 4px 15px",
      button : "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;",
      buttonactive : "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px, rgba(0, 0, 0, 0.15) -1.95px -1.95px 2.6px;",
      btnActive : "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;",
      tag : "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
      input : "rgba(0,0,0,0.15) 1.95px 1.95px 2.6px;",
    },
  },
  plugins: [],
}

