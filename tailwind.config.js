module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "slide-down": "slideDown 1s ease-in-out",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
