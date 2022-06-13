import "./App.css";
import React from "react";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import DataTableCrudDemo from "./app-ui/components/tutorial/product/DataTableCrudDemo";

function App() {
  return (
    <div className="App">
      <DataTableCrudDemo />
    </div>
  );
}

export default App;
