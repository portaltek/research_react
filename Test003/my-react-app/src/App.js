import "./App.css";

import { Box, Stack, createTheme, ThemeProvider } from "@mui/material";
import { Feed } from "./pages/common/feed/Feed";
import { Navbar } from "./pages/common/navbar/Navbar";
import { CreatePostButton } from "./pages/common/post/CreatePostButton";
import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Page0 } from "./pages/page1/Page0";
import { Page1 } from "./pages/page1/Page1";
import { Page2 } from "./pages/page1/Page2";
import { SideDrawer } from "./pages/common/SideDrawer";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            {/* <Sidebar setMode={setMode} mode={mode} /> */}
            <SideDrawer setMode={setMode} mode={mode} />
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/Page0" element={<Page0 />} />
              <Route path="/Page1" element={<Page1 />} />
              <Route path="/Page2" element={<Page2 />} />
            </Routes>

            <CreatePostButton />
          </Stack>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;
