import "./App.css";
import React from "react";

import "primereact/resources/themes/arya-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { MenubarDemo } from "./components/_primereact-tutorial/primereact/MenubarDemo";

function App() {
  return (
    <div className="App">
      <MenubarDemo />
    </div>
  );
}

export default App;
