import { Stack, createTheme, ThemeProvider, Toolbar, Box } from "@mui/material";
import { Navbar } from "./navbar/Navbar";
import { useContext } from "react";
import { AppContext } from "./AppContext";

export const AppLayout = ({ children }) => {
  const { config } = useContext(AppContext);
  const darkTheme = createTheme({
    palette: {
      mode: config.theme.mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Toolbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <main>{children}</main>
        </Stack>
      </Box>
    </ThemeProvider>
  );
};
