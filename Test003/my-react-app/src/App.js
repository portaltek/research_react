/* eslint-disable no-unused-vars */
import "./App.css";

import { BrowserRouter } from "react-router-dom";

import { AppLayout } from "./layout/AppLayout";
import { AppPages } from "./pages/AppPages";

// TODO: Add AppContext
// TODO: Add DataTable CRUD Template
// TODO: LocalStore common user Stuff such theme.

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <AppPages />
      </AppLayout>
    </BrowserRouter>
  );
}
export default App;
