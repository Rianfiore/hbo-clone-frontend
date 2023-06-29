/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/design-system-medclub/dist/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    spacing: {
      xxxs: "2px",
      xxs: "4px",
      xs: "8px",
      sm: "16px",
      base: "24px",
      lg: "32px",
      xl: "48px",
      "2xl": "64px",
    },
    colors: {
      brand: {
        pure: "#5B1CE6",
        light: "#9E86FF",
      },
      neutral: {
        white: "#FFFFFF",
        grey000: "#F0F0F0",
        grey100: "#999999",
        grey200: "#3C3C3Ci",
      },
    },
    screens: {
      mobile: "743px",
      tablet: "1200px",
      fullhd: "1920px",
      quadhd: "2560px",
      ultrahd: "3840px",
    },
    borderWidth: {
      none: "0",
      xxs: "1px",
      xs: "2px",
      sm: "4px",
      base: "8px",
      lg: "16px",
      xl: "24px",
      "2xl": "32px",
    },
    borderRadius: {
      none: "0",
      xs: "2px",
      sm: "4px",
      base: "8px",
      lg: "16px",
      xl: "24px",
      "2xl": "32px",
    },
    fontFamily: {
      primary: ["Sintony", "sans-serif"],
    },
    fontWeight: {
      regular: 400,
      bold: 700,
    },
    fontSize: {
      xs: "10px",
      sm: "14px",
      base: "16px",
      lg: "22px",
      xl: "32px",
      "2xl": "48px",
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents, addVariant }) {
      addVariant("path", "&>path");
      addComponents({
        ".main-px": {
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          maxWidth: "1920px",

          "@screen sm": {
            paddingLeft: "2rem",
            paddingRight: "2rem",
          },

          "@screen xl": {
            paddingLeft: "3rem",
            paddingRight: "3rem",
          },

          "@screen 2xl": {
            paddingLeft: "4rem",
            paddingRight: "4rem",
          },
        },
        ".text-link": {
          animationDuration: "250ms",
          fontSize: "1rem",
          fontWeight: "400",
          lineHeight: "1.5",
          textDecoration: "underline",
          textUnderlineOffset: "1.5px",
        },
      });
    }),
  ],
};
