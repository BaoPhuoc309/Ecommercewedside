import React from "react";
import ProductList from "../../component/ProductList";
import Fillter from "../../component/Fillter";

const NewProducts = () => {
  return (
    <div className="container">
      <Fillter />
      <ProductList />
    </div>
  );
};

export default NewProducts;
