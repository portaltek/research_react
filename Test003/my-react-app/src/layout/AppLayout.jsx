import { createTheme, ThemeProvider, Toolbar, Box } from "@mui/material";
import { Navbar } from "./navbar/Navbar";
import { useContext } from "react";
import { AppContext } from "./AppContext";

export const AppLayout = ({ children }) => {
  const { app } = useContext(AppContext);
  const darkTheme = createTheme({
    palette: {
      mode: app.theme.mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Toolbar />
        <main>{children}</main>
      </Box>
    </ThemeProvider>
  );
};
