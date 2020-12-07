module.exports = {
  purge: ["./site/**/*.njk"],
  theme: {
    container: {
      center: true,
      padding: {
        default: "1rem",
        sm: "2rem",
        lg: "3rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1120px",
    },
    colors: {
      gray: "#2E2F2B",
      white: "#FFFFFF",
      hue: "#B5C840",
      none: "transparent",
    },
    fontFamily: {
      display: ["Sporting Grotesque", "sans-serif", "Arial"],
      text: ["trade-gothic-next", "sans-serif", "Arial"],
    },
    extend: {
      fontSize: {},
      spacing: {
        "2-5": ".625rem",
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        full: "100%",
      },
      zIndex: {
        "-1": "-1",
      },
      translate: {
        50: "50%",
        "-50": "-50%",
        25: "25%",
        "-25": "-25%",
      },
      transitionDuration: {
        0: "0",
      },
      keyframes: {
        color: {
          "0%": { filter: "hue-rotate(0deg)" },
          "100%": { filter: "hue-rotate(360deg)" },
        },
      },
      animation: {
        hue: "color 20s ease-in-out infinite",
      },
    },
  },
  variants: {},
  plugins: [],
};
