import { Roboto, Poppins } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      backgroundAccent: "#11001D",
    },
    secondary: {
      main: "#D97D54",
    },
    background: {
      backgroundAccent: "#17141c",
    },
    backgroundAccent: "#17141c",
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontSize: "3rem",
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "2.5rem",
      lineHeight: 1.2,
    },
    h3: {
      fontSize: "2rem",
      lineHeight: 1.2,
    },
    h4: {
      fontSize: {
        md: "28px",
        sm: "24px",
        xs: "18px",
      },
      lineHeight: 1.2,
    },

    h5: {
      fontSize: "1.2rem",
      lineHeight: 1.2,
    },
    h6: {
      fontSize: "1rem",
      lineHeight: 1.2,
    },

    body: {
      fontSize: "0.8rem",
      fontWeight: "light",
      lineHeight: 1.5,
    },

    body1: {
      fontSize: "1.2rem",
      lineHeight: 1.5,
    },
    button: {
      textTransform: "none",
      fontWeight: "bold",
      fontSize: "1rem",
      padding: "0.5rem 1rem",
    },
  },
});

export default theme;
