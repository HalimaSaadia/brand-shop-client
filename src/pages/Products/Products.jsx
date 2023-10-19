import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";
import ProductsPageSlider from "../../components/ProductsPageSlider/ProductsPageSlider";

const Products = () => {
  return (
    <div className="px-3 md:px-10">
      <ProductsPageSlider />
      <ProductsContainer />
    </div>
  );
};

export default Products;
