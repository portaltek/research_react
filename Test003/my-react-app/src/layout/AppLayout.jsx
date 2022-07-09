import { createTheme, ThemeProvider, Toolbar, Box, alpha } from "@mui/material";
import { Navbar } from "./navbar/Navbar";
import { useContext } from "react";
import { AppContext } from "./AppContext";

function darkTheme(app) {
  return createTheme({
    palette: {
      mode: app.theme.mode,
      table: {
        header: {
          backgroundColor: "#444",
          color: "#eee",
        },
        selectedRow: {
          backgroundColor: alpha("#fff", 0.2),
          color: "#111",
        },
        oddRow: {
          backgroundColor: "#202020",
          color: "#111",
        },
        evenRow: {
          backgroundColor: "#232323",
          color: "#111",
        },
      },
    },
  });
}

function lightTheme(app) {
  return createTheme({
    palette: {
      mode: app.theme.mode,
      table: {
        header: {
          backgroundColor: "#eee",
          color: "#444",
        },
        selectedRow: {
          backgroundColor: "#eee",
          color: "#444",
        },
        oddRow: {
          backgroundColor: "#eee",
          color: "#444",
        },
        evenRow: {
          backgroundColor: "#eee",
          color: "#444",
        },
      },
    },
  });
}

export const AppLayout = ({ children }) => {
  const { app } = useContext(AppContext);
  const theme = app.theme.mode === "light" ? lightTheme(app) : darkTheme(app);
  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Toolbar />
        <main>{children}</main>
      </Box>
    </ThemeProvider>
  );
};
