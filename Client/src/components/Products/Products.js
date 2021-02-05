import React from "react";

// Redux
import { useSelector } from "react-redux";

import Product from "../Card/Card";

const Products = () => {
  const selectProducts = useSelector((state) => state.product.storeProducts);

  return (
    <section className="py-5">
      <div className="container">
        <div className="row py-5">
          {selectProducts.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
