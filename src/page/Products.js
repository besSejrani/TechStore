import React from "react";

import Productss from "../components/ProductsPage/Products";
import Hero from "../components/Hero";

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
