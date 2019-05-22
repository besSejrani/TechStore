import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Title from "../Title";
import Product from "../Product";

const Featured = ({ featured }) => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Featured products" center />
        <div className="row">
          {featured.map(product => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            <Link
              to="/products"
              className="main-link"
              style={{ marginTop: "30px" }}
            >
              Our products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapState = state => ({
  featured: state.product.featuredProducts
});

export default connect(mapState)(Featured);
