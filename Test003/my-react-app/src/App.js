/* eslint-disable no-unused-vars */
import "./App.css";

import { BrowserRouter } from "react-router-dom";

import { AppContextProvider } from "./layout/AppContext";
import { AppPages } from "./pages/AppPages";
import { Sidebar } from "./layout/sidebar/Sidebar";
import { Stack } from "@mui/material";
import { AppLayout } from "./layout/AppLayout";

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <AppLayout>
          <Stack direction="row" spacing={1} justifyContent="space-between">
            <Sidebar />
            <AppPages />
          </Stack>
        </AppLayout>
      </BrowserRouter>
    </AppContextProvider>
  );
}
export default App;
