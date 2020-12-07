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
      gray: "#141414",
      white: "#FFFFFF",
      yellow: "#FFB906",
      hue: "#F86849",
      none: "transparent",
    },
    fontFamily: {
      display: ["Sporting Grotesque", "sans-serif", "Arial"],
      text: ["trade-gothic-next", "sans-serif", "Arial"],
    },
    transitionDuration: {
      DEFAULT: "300ms",
    },
    transitionTimingFunction: {
      DEFAULT: "cubic-bezier(0.2, 0.8, 0.2, 1)",
    },
    extend: {
      fontSize: {
        xs: ".8125rem",
      },
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
      opacity: {
        5: ".05",
        15: ".15",
        90: ".9",
      },
      translate: {
        50: "50%",
        "-50": "-50%",
        25: "25%",
        "-25": "-25%",
      },
      scale: {
        103: "1.03",
      },
      transitionDuration: {
        0: "0",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(100% / -3))" },
        },
      },
      animation: {
        marquee: "marquee 60s linear infinite",
      },
    },
  },
  variants: {},
  plugins: [],
};
