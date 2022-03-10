import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // mobile
      sm: 600, // iphone
      md: 900, // ipad
      lg: 1200, // ipad pro
      xl: 1536, // desktop
    },
  },
  palette: {
    primary: {
      main: "#0000FF",
      contrastText: "#000",
    },
    secondary: {
      main: "#000",
      contrastText: "#fff",
    },
    error: {
      main: "#f44336",
      contrastText: "#fff",
    },
    warning: {
      main: "#fabd23",
      contrastText: "#000",
    },
    info: {
      main: "#1F84C7",
      contrastText: "#fff",
    },
    success: {
      main: "#4caf50",
      contrastText: "#000",
    },
    grey: {
      A700: "#7E7E7E",
    },
    background: {
      default: "#fafafa",
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: "questrial",
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      // fontFamily: "Prompt",
      // fontWeight: 400,
      fontSize: 80,
      lineHeight: 1.2,
    },
    h2: {
      // fontFamily: "questrial",
      // fontWeight: 400,
      fontSize: 70,
      lineHeight: 1.2,
    },
    h3: {
      // fontFamily: "Prompt",
      // fontWeight: 400,
      fontSize: 60,
      lineHeight: 1.2,
    },
    h4: {
      // fontFamily: "Prompt",
      // fontWeight: 400,
      fontSize: 50,
      lineHeight: 1.2,
    },
    h5: {
      // fontFamily: "Prompt",
      // fontWeight: 400,
      fontSize: 40,
      lineHeight: 1.2,
    },
    h6: {
      // fontFamily: "Prompt",
      // fontWeight: 400,
      fontSize: 30,
      lineHeight: 1.2,
    },
    subtitle1: {
      // fontFamily: "Prompt",
      fontWeight: 700,
      fontSize: 25,
      lineHeight: 1.2,
    },
    subtitle2: {
      // fontFamily: "Prompt",
      // fontWeight: 400,
      fontSize: 20,
      lineHeight: 1.2,
    },
    body1: {
      // fontFamily: "Prompt",
      // fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.2,
    },
    body2: {
      // fontFamily: "Prompt",
      // fontWeight: 400,
      fontSize: 12,
      lineHeight: 1.2,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
