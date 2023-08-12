import React from "react";
import { NewProduct } from "../../pages/product/NewProduct";
import { ProductTable } from "./ProductTable";

const product = () => {
  return (
    <div>
      <NewProduct />
      <ProductTable />
    </div>
  );
};

export default product;
