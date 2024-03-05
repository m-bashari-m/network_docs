/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#1A202C",
          secondary: "#2D3748",
        },
        text: {
          primary: "#E2E8F0",
          secondary: "#CBD5E0",
        },
        tags: {
          blue: "#63B3ED",
          green: "#68D391",
          red: "#FC8181",
          orange: "#F6AD55",
          purple: "#B794F4",
        },
      },
    },
  },
  plugins: [],
};
