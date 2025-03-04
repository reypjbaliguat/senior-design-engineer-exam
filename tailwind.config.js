/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    extend: {
      colors: {
        "deep-teal": "#0f282d",
        "lime-green": "#d1ff3b",
        "light-sky-blue": "#7af1ff",
        purple: "#544ae5",
      },
      screens: {
        "h-lg": { raw: "(min-height: 1080px)" },
        "h-2xl": { raw: "(min-height: 1536px)" },
      },
      fontFamily: {
        "es-rebond": ["ESRebondGrotesque", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "big-hero-2xl": "8.125rem",
        "big-hero-lg": "6.25rem",
        "small-hero-2xl": "3.125rem",
        "small-hero-lg": "2.5rem",
        logo: "5rem",
      },
      lineHeight: {
        "big-leading-2xl": "9rem",
        "big-leading-lg": "7rem",
      },
      height: {
        "bg-hero-2xl": "31.25rem",
        "bg-hero-lg": "23.75rem",
        "sports-car-lg": "32.5rem",
      },
      aspectRatio: {
        "bg-hero-2xl-aspect-ratio": "2/1",
        "bg-hero-lg-aspect-ratio": "1080/380",
      },
      width: {
        "sports-car": "28.125rem",
      },
    },
  },
  plugins: [],
};
