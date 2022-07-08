/* eslint-disable no-unused-vars */
import "./App.css";

import { BrowserRouter } from "react-router-dom";

import { AppLayout } from "./layout/AppLayout";
import { AppContextProvider } from "./layout/AppContext";
import { AppPages } from "./pages/AppPages";
import { Sidebar } from "./layout/sidebar/Sidebar";
import { Box } from "@mui/material";

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <AppLayout>
          <Box flex={1} p={2} sx={{ display: "flex" }}>
            <Sidebar />
          </Box>
          <Box flex={4} p={2}>
            <AppPages />
          </Box>
        </AppLayout>
      </BrowserRouter>
    </AppContextProvider>
  );
}
export default App;
