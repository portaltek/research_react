/* eslint-disable no-unused-vars */
import "./App.css";

import { BrowserRouter } from "react-router-dom";

import { AppLayout } from "./layout/AppLayout";
import { AppContextProvider } from "./layout/AppContext";
import { AppRoutes } from "./pages/AppRoutes";

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <AppLayout>
          <AppRoutes />
        </AppLayout>
      </BrowserRouter>
    </AppContextProvider>
  );
}
export default App;
