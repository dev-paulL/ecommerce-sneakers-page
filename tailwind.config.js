/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontSize: {
      mini: "0.55rem",
      xs: "0.7rem",
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    colors: {
      Orange: "hsl(26, 100%, 55%)",
      PaleOrange: "hsl(25, 100%, 94%)",
      VeryDarkBlue: "hsl(220, 13%, 13%)",
      DarkGrayishBlue: "hsl(219, 9%, 45%)",
      GrayishBlue: "hsl(220, 14%, 75%)",
      LightGrayishBlue: "hsl(223, 64%, 98%)",
      White: "hsl(0, 0%, 100%)",
      Black: "hsl(0, 0%, 0%)",
    },
    gridTemplateColumns: {
      main: "auto auto",
      images: "repeat(4, 1fr)",
      cartItem: "min-content auto-fill min-content",
    },
  },
  plugins: [],
};
