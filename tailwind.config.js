/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "neutral-100": "#FFFFFF",
      "neutral-200": "hsl(234, 9%, 51%)",
      "neutral-900": "hsl(231, 14%, 10%)",
      primary: "#F5C249",
      "primary-hover": "hsla(42, 90%, 62%, 0.7)",
      "bg-1": "hsla(231, 14%, 10%, 1)",
      "bg-2": "hsla(225, 15%, 15%, 1)",
      gradient: "hsl(234, 9%, 51%, 0.29)",
    },
    extend: {
      fontFamily: { poppins: ["Poppins"] },
    },
  },
  plugins: [],
};

//hsla(234, 9%, 51%, 1), hsla(234, 9%, 51%, 0.29)
