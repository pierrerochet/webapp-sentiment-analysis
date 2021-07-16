import { createTheme } from "@material-ui/core/styles";

const primaryColor = "#7CD06A";
const theme = createTheme({
  typography: {
    allVariants: {
      color: "#ffffff",
    },
  },
  palette: {
    text: {
      primary: primaryColor,
      secondary: "#ffffff",
    },
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: "#5D6D7E",
    },
  },
});

export default theme;
