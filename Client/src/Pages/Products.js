import React from "react";

import Productss from "../Components/Products/Products";
import Hero from "../Components/Hero/Hero";

import ProductBcg from "../images/productsBcg.jpeg";

const Products = () => {
  return (
    <>
      <Hero img={ProductBcg} />
      <Productss />
    </>
  );
};

export default Products;

// =================================================================
