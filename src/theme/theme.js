import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#0353E3",
      accent: "#70c6bf",
      answer: "#9BBDEE"
    },
    secondary: {
      main: "#F7F9FA",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
