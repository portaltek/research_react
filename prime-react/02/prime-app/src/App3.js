import "./App.css";
import React, { useState, createContext } from "react";

import "primereact/resources/themes/arya-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { ComponentA } from "./components/test03/ComponentA";

export const AppContext = createContext();

function App() {
  const [app, setApp] = useState("App");
  return (
    <div className="App">
      <AppContext.Provider>
        <ComponentA value={[app, setApp]} />
      </AppContext.Provider>
    </div>
  );
}

export default App;
