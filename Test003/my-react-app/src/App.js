import "./App.css";

import { Feed } from "./pages/Feed";
import { Sidebar } from "./pages/Sidebar";
import { Rightbar } from "./pages/Rightbar";
import { Box, Stack } from "@mui/material";
import { Navbar } from "./pages/Navbar";

function App() {
  return (
    <div className="App">
      <Box>
        <Navbar></Navbar>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar></Sidebar>
          <Feed></Feed>
          <Rightbar></Rightbar>
        </Stack>
      </Box>
    </div>
  );
}
export default App;
