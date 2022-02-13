import { createTheme } from "@mui/material/styles";
import { purple, blue, grey, orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    common: {
      grey: grey[700],
      lightgrey: grey[200],
      aceOrange: orange[500],
      dark: "#000",
    },
    secondary: {
      main: purple[500],
    },
    warning: {
      main: "#EDC126",
    },
    info: {
      main: "#00bcd4",
    },
    default: {
      main: "#fff",
    },
  },
});

export { theme };
