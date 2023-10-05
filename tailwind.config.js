module.exports = {
  content: [
    "./assets/**/*.css",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js,ts}",
    "./nuxt.config.{js,ts}",
    "./tailwind-theme.js",
  ],
  plugins: [
    require("@tailwindcss/forms", "@tailwindcss/typography", "@tailwindcss/aspect-ratio", "@formkit/themes/tailwindcss"),
  ],
  theme: {
    fontFamily: {
      sans: "Inter, sans-serif",
    },
    extend: {
      colors: {
        primary50: "#EEF2FF",
        primary100: "#E0E7FF",
        primary200: "#C7D2FE",
        primary300: "#A6B5FD",
        primary400: "#828DF9",
        primary500: "#6265F0",
        primary600: "#5148E7",
        primary700: "#4136C8",
        primary800: "#3730A3",
        primary900: "#322F82",
      },
    },
  },
};
