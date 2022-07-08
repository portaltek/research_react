import React from "react";
import { ProductTable } from "./ProductTable";
import { ProductTable2 } from "./ProductTable2";
import { ProductTable3 } from "./ProductTable3";
import EnhancedTable from "./ProductTable4";

export const Product = () => {
  return (
    <>
      <div></div>
      <EnhancedTable />
      {/* <ProductTable3 /> */}
      <ProductTable2 />
      {/* <ProductTable /> */}
    </>
  );
};
