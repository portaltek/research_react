import "./App.css";

import { Box, Stack, createTheme, ThemeProvider } from "@mui/material";
import { Sidebar } from "./pages/common/Sidebar";
import { Rightbar } from "./pages/common/Rightbar";
import { Feed } from "./pages/common/feed/Feed";
import { Navbar } from "./pages/common/navbar/Navbar";
import { CreatePostButton } from "./pages/common/post/CreatePostButton";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
          <CreatePostButton />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
export default App;
