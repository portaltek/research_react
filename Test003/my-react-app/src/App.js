/* eslint-disable no-unused-vars */
import "./App.css";

import { BrowserRouter } from "react-router-dom";

import { AppContextProvider } from "./layout/AppContext";
import { AppPages } from "./pages/AppPages";
import { Sidebar } from "./layout/sidebar/Sidebar";
import { Box, Stack, Toolbar, createTheme } from "@mui/material";
import { AppLayout } from "./layout/AppLayout";

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <AppLayout>
          <Stack direction="row" spacing={2} justifyContent="space-between">
            {/* <Box flex={1} p={1} sx={{ display: "flex" }}> */}
            <Sidebar />
            {/* </Box> */}
            {/* <Box flex={6} p={1}> */}
            <AppPages />
            {/* </Box> */}
          </Stack>
        </AppLayout>
      </BrowserRouter>
    </AppContextProvider>
  );
}
export default App;
