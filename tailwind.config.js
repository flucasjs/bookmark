/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "xs": "375px",
      },
      gridTemplateRows: {
        "16": "repeat(16, minmax(0, 1fr))",
      },
      gridTemplateColumns: {
        "16": "repeat(16, minmax(0, 1fr))",
      },
      container: {
        padding: {
          DEFAULT: "2rem",
          "lg": "6rem",
          "xl": "10rem",
          "2xl": "15rem",
        },
      },
      fontSize: {
        "sm": ['0.9375rem', {
          lineHeight: '1.667',
          letterSpacing: '0',
          fontWeight: '400',
        }],
        "md": "clamp(0.9375rem, 0.8715rem + 0.2817vw, 1.125rem)",
        "lg": "clamp(1.875rem, 1.4789rem + 1.6901vw, 3rem)",
        "xl": "clamp(2rem, -0.8169rem + 12.0188vw, 10rem)",
      },
      colors: {
        "color-background": "hsl(var(--color-background) / <alpha-value>)",
        "color-primary": "hsl(var(--color-primary) / <alpha-value>)",
        "color-secondary": "hsl(var(--color-secondary) / <alpha-value>)",
        "color-accent": "hsl(var(--color-accent) / <alpha-value>)",
      },
      fontFamily: {
        "sans": ["var(--font-rubik)", "Helvetica", "Tahoma", "Trebuchet MS", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
