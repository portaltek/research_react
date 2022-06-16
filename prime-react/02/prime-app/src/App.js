import "./App.css";
import React from "react";

import "primereact/resources/themes/arya-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { TestContextA } from "./components/test03/TestContextA";

function App() {
  return (
    <div className="App">
      <TestContextA />
    </div>
  );
}

export default App;
