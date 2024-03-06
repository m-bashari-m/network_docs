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
        animation: {
          sparkle: "extend 1s 1, rotate 1s 1s infinite",
        },
        keyframes: {
          extend: {
            from: { transform: "scale(1) " },
            to: { transform: "scale(1.5) " },
          },
          rotate: {
            "0%, 100%": { transform: "rotate(-15deg) scale(1.5) " },
            "50%": { transform: "rotate(15deg) scale(1.5) " },
          },
        },
      },
    },
  },
  plugins: [],
};
