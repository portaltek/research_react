import React from "react";
import { ProductTable } from "./table/ProductTable";
import { ProductTable2 } from "./other/ProductTable2";
import { ProductTable3 } from "./other/ProductTable3";

export const Product = () => {
  return (
    <>
      <ProductTable />
      <ProductTable2 />
      <ProductTable3 />
    </>
  );
};
