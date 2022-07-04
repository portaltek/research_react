import "./App.css";
import React, { useRef, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";

import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons

function App() {
  const [text, setText] = useState("hello");
  const toastRef = useRef();

  const onButtonClick = () => {
    if (text) {
      toastRef.current.show({
        severity: "info",
        summary: "Success",
        detail: text,
      });
    } else {
      toastRef.current.show({
        severity: "error",
        summary: "Error",
        detail: "Value required",
      });
    }
  };
  return (
    <div className="App">
      <Toast ref={toastRef} />
      <header className="App-header">
        <InputText value={text} onChange={(e) => setText(e.target.value)} />
        <Button label="Save" onClick={onButtonClick} />
        <Button label="Click" icon="pi pi-check" />
      </header>
    </div>
  );
}

export default App;
