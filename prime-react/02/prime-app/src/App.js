import "./App.css";
import React from "react";
//import "primereact/resources/themes/lara-dark-blue";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import ProductContextProvider from "./api/contexts/ProductContext";
import ProductList from "./api/components/ProductList";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <ProductList />
      </ProductContextProvider>
    </div>
  );
}

export default App;
