import React from 'react'

import ProductContextProvider from "./ProductContext";
import ProductTable from "./ProductTable";


export const Product = () => {
    return (
        <ProductContextProvider>
            <ProductTable/>
        </ProductContextProvider>
    )
}
