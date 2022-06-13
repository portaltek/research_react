import "./App.css";
import React from "react";

import ProductContextProvider from "./app-ui/contexts/product/ProductContext";
import ProductList from "./app-ui/components/product/ProductList";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

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
