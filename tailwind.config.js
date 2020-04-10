const colors = {
  gray: {
    100: "#EDEDEE",
    200: "#D2D3D4",
    300: "#B7B9B9",
    400: "#818485",
    500: "#4B4F51",
    600: "#444749",
    700: "#2D2F31",
    800: "#222424",
    900: "#171818"
  },
  green: {
    100: "#E8F8F1",
    200: "#C7EDDD",
    300: "#A5E2C8",
    400: "#61CD9F",
    500: "#1DB776",
    600: "#1AA56A",
    700: "#116E47",
    800: "#0D5235",
    900: "#093723"
  },
  blue: {
    100: "#ECEDF0",
    200: "#D1D2DA",
    300: "#B5B7C3",
    400: "#7D8196",
    500: "#454B69",
    600: "#3E445F",
    700: "#292D3F",
    800: "#1F222F",
    900: "#151720"
  },
  red: "#FA5652",
  yellow: {
    100: "#FEF9E6",
    200: "#FDF0C1",
    300: "#FBE69C",
    400: "#F8D452",
    500: "#F5C108",
    600: "#DDAE07",
    700: "#937405",
    800: "#6E5704",
    900: "#4A3A02"
  },
  pink: "#FFB9B9",
  title: "#2F2E41",
  white: "#FFF"
};

module.exports = {
  theme: {
    extend: {
      height: {
        map: "500px",
        modal: "720px",
        "14": "3.5rem"
      },
      width: {
        hp: "500px",
        "carousel-image": "250px",
        perx: "350px",
        congrats: "650px",
        input: "450px"
      },
      lineHeight: {
        "extra-tight": "1.1"
      },
      borderRadius: {
        "25": "25px"
      },
      fontSize: {
        h1: "80px"
      },
      inset: {
        button: "10px",
        chat: "1rem",
        maxWidth: {
          input: "22rem"
        },
        boxShadow: {
          button: "px 4px 6px rgba(0, 0, 0, 0.15)",
          input: "0px 6px 80px rgba(0, 0, 0, 0.12);"
        }
      },
      colors: colors,
      textColors: colors,
      backgroundColors: colors
    },
    variants: {},
    plugins: []
  }
};
