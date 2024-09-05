module.exports = {
  purge: {
    //enabled: true,
    content: ["./templates/**/*.twig", "./public/js/*.js"],
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      maxWidth: {
        contained: "1700px",
      },

      fontSize: {
        big: "32px",
        "big-lg": "80px",
        lead: "20px",
        "lead-lg": "24px",
        link: "16px",
        "link-lg": "18px",
        "body-lg": "18px",
        small: "16px",
        "small-lg": "16px",
      },

      lineHeight: {
        big: "1.1",
        "big-lg": "1.1",
        lead: "1.4",
        "lead-lg": "1.4",
        link: "1.48",
        "link-lg": "1.4",
        small: "1.48",
        "small-lg": "1.4",
      },

      colors: {
        primary: "#FFCB05",
        grey1: "#F4F7F8",
        grey2: "#E6EAEC",
        grey3: "#979797",
        grey4: "#6C6C6C",
        errors: "#ed0c31",
        default: "#73634c",
      },

      spacing: {
        px: "1px",
        0: "0",
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        10: "2.5rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem",
        15: "3.75rem",
        16: "4rem",
        18: "4.5rem",
        20: "5rem",
        24: "6rem",
        26: "6.5rem",
        32: "8rem",
        40: "10rem",
        48: "12rem",
        56: "14rem",
        64: "16rem",
      },

      screens: {
        pc: { max: "1024px" },
        // xs: '414px',
        // sm: '640px',
        // md: '768px',
        //lg: '1024px',
        lgx: "1180px",
        lgxx: "1236px",
        // xl: '1280px',
        // xxl: '1440px',
        xxxl: "1600px",
      },
    },

    fontFamily: {
      headings: ["ABC Diatype Medium"],
      medium75: ["ABC Diatype Medium"],
      body: ["ABC Diatype Regular"],
    },
    container: {
      center: true,
    },
  },
  variants: {
    opacity: [],
    textColor: [],
    cursor: ["hover"],
  },
  plugins: [
    require("@tailwindcss/forms"),

    function ({ addUtilities }) {
      const newUtilities = {
        ".absolute-center-x": {
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        },
        ".absolute-center-y": {
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
        },
        ".absolute-center": {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
