import { Box, Stack, createTheme, ThemeProvider } from "@mui/material";
import { Navbar } from "./navbar/Navbar";
import { Sidebar } from "./sidebar/Sidebar";
import { useState } from "react";

export const AppLayout = ({ children }) => {
  const [themeMode, setThemeMode] = useState("light");
  const [displayDrawer, setDisplayDrawer] = useState(true);
  const darkTheme = createTheme({
    palette: {
      mode: themeMode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar
          setDisplayDrawer={setDisplayDrawer}
          displayDrawer={displayDrawer}
        />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar
            themeMode={themeMode}
            setThemeMode={setThemeMode}
            displayDrawer={displayDrawer}
          />
          <main>{children}</main>
        </Stack>
      </Box>
    </ThemeProvider>
  );
};
