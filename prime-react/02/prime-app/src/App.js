import "./App.css";
import React from "react";

// import ProductContextProvider from "./app-ui/contexts/product/ProductContext";
// import ProductList from "./app-ui/components/product/ProductList";

//import "primereact/resources/themes/lara-dark-indigo/theme.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
//import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import DataTableCrudDemo from "./app-ui/components/tutorial/product/DataTableCrudDemo";
function App() {
  return (
    <div className="App">
      {/* <ProductContextProvider>
        <ProductList />
      </ProductContextProvider> 
      */}
      <DataTableCrudDemo />
    </div>
  );
}

export default App;
