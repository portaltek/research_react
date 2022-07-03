import "./App.css";

import { Box, Stack } from "@mui/material";
import { Sidebar } from "./pages/common/Sidebar";
import { Rightbar } from "./pages/common/Rightbar";
import { Feed } from "./pages/common/feed/Feed";
import { Navbar } from "./pages/common/navbar/Navbar";

function App() {
  return (
    <Box sx={{ backgroundColor: "lightgrey" }}>
      <Navbar></Navbar>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar></Sidebar>
        <Feed></Feed>
        <Rightbar></Rightbar>
      </Stack>
    </Box>
  );
}
export default App;
