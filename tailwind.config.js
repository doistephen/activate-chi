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
      white: "#ffffff",
      yellow: "#FFB906",
      hue: "#F86849",
      none: "transparent",
    },
    fontFamily: {
      display: ["Sporting Grotesque", "sans-serif", "Arial"],
      text: ["trade-gothic-next", "sans-serif", "Arial"],
    },
    extend: {
      fontSize: {
        xs: ".8125rem",
        base: [
          "1rem",
          {
            lineHeight: "1.5",
          },
        ],
        xl: [
          "1.25rem",
          {
            lineHeight: "1.5",
            letterSpacing: "0.025em",
          },
        ],
        "2xl": [
          "1.5rem",
          {
            lineHeight: "1.5",
            letterSpacing: "0.025em",
          },
        ],
      },
      spacing: {
        38: "9.5rem",
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
      transitionDuration: {
        DEFAULT: "300ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.2, 0.8, 0.2, 1)",
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
      rotate: {
        135: "135deg",
      },
      scale: {
        103: "1.03",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 60s linear infinite",
      },
    },
  },
  variants: {
    extend: {
      translate: ["focus"],
    },
  },
  plugins: [],
};
