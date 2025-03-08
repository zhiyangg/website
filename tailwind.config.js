/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": { width: "0%" }, /* start typing */
          "50%": { width: "100%" }, /* finish typing */
          "60%": { width: "100%" }, /* small pause */
          "100%": { width: "0%" }, /* delete the written text */
        },
        blink: {
          "50%": { borderColor: "transparent" },
          "100%": { borderColor: "black" },
        },
      },
      animation: {
        typing: "typing 5s steps(80, end) infinite",
        blink: "blink 0.75s step-end infinite",
      },
    },
  },
  plugins: [],
};