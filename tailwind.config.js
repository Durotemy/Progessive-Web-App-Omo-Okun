module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // If you're using the App Router
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", // Optional, depending on structure
  ],

  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        okunWhite: "#ffffff",
        okunBrown: "#4B2E19",
        okunGreen: "#2D6A4F",
        okunBlue: "#3A86FF",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem", // 36px
        "5xl": "3rem", // 48px
        customSmall: "0.65rem", // 10.4px
        customHuge: "4rem", // 64px
      },
    },
  },
  plugins: [],
  variants: {
    extend: {},
  },
};
