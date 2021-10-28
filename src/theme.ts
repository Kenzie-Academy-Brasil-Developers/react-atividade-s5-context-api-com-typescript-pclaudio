import { Theme } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme: Theme = createTheme({
  palette: {
    background: {
      default: "#eaeef3",
    },
  },
  colors: {
    carmineRed: "#f72585",
    frenchGrey: "#b7b7a4",
    indanthroneBlue: "#023e8a",
  },
});

export default theme;
