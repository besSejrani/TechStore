import React from "react";

import { connect } from "react-redux";
import Product from "../Product";
import Title from "../Title";

const Products = ({ products }) => {
  return (
    <section className="py-5">
      <div className="container">
        <Title center title="Our Products" />

        <div className="row py-5">
          {products.map(product => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </div>
    </section>
  );
};

const mapState = state => ({
  products: state.product.storeProducts
});

export default connect(mapState)(Products);
