/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
          "100%": { borderColor: "orange" },
        },
      },
      animation: {
        typing: "typing 3.5s steps(40, end) forwards",
        blink: "blink 0.75s step-end infinite",
      },
    },
  },
  plugins: [],
};