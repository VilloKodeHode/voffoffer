/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      ms: "320px",

      mm: "375px",

      ml: "425px",

      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {
      colors: {
        KV: {
          primary: "#13b096",

          secondary: "#c97286",

          tertiary: "#28213d",

          //font colors:
          black: "#37342e",
          black75: "#4b4943",
          black50: "#696762",
          black25: "#9b9a97",
          white: "#efeeed",
          white10: "#e6e5e3",
        },
      },
      fontSize: {
        h1: "84px",
        h2: "59px",
        h3: "42px",
        h4: "30px",
        h5: "21px",
        h6: "18px",
        p: "18px",
        p0: "16px",
        small: "10px",
        "4xl": "2.25rem",
        "3xl": "1.875rem",
        "2xl": "1.5rem",
        xl: "1.25rem",
        lg: "1.125rem",
        base: "1rem",
        sm: "0.875rem",
        xs: "0.75rem",
      },
      lineHeight: {
        h1: "112px",
        h2: "72px",
        h3: "48px",
        h4: "40px",
        h5: "36px",
        h6: "30px",
        p: "27px",
        p0: "24px",
        small: "12px",
        "4xl": "2.75rem",
        "3xl": "2.5rem",
        "2xl": "2.25rem",
        xl: "1.75rem",
        lg: "1.5rem",
        base: "1.375rem",
        sm: "1.25rem",
        xs: "1.125rem",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Lato: ["Lato", "sans-serif"],
      },

      keyframes: {
        buttonHover: {
          "0%": { color: "#C9FEF5" },
          "50%": { color: "#22555C" },
          "100%": { color: "#C9FEF5" },
        },
        waveSlideLeft: {
          "0%": { translate: "1000px" },
          "100%": { translate: "-1000px" },
        },
        waveSlideRight: {
          "0%": { translate: "1000px" },
          "100%": { translate: "-1000px" },
        },
        glow: {
          "0%": { opacity: "30%" },
          "100%": { opacity: "100%" },
        },
        slideRight: {
          "0%": { translate: "-100%", opacity: "0%" },
          "100%": { translate: "0%", opacity: "100%" },
        },
        slideLeft: {
          "0%": { translate: "100%", opacity: "0%" },
          "100%": { translate: "0%", opacity: "100%" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0%" },
          "100%": { translate: "translateY(0%)", opacity: "100%" },
        },
        appear: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
      },
      animation: {
        waveSlideLeft: "waveSlideLeft ease-in 16s alternate infinite",
        waveSlideRight: "waveSlideRight ease-in 15s 1s alternate infinite",
        ButtonHover: "buttonHover ease-in 1.5s infinite",
        ModalSlideIn: "slideRight ease 0.3s",
        RPSPopUp: "popUp 0.1s ease-in",
        glow: "glow 3s ease-in-out infinite alternate",
        SlideInFromLeft: "slideLeft 0.5s ease-in-out",
        SlideInFromRight: "slideRight 0.5s 1s ease-in-out backwards",
        SlideInFromTop: "slideDown 0.5s ease-in-out",
        Appear: "appear 0.3s ease-in-out",
        RPSPopUpDelayed: "popUp 0.1s ease-in 1.0s backwards",
        RPSPopUpMoreDelayed: "popUp 0.1s ease-in 2s backwards",
      },
    },
  },
  plugins: [],
};
