import React from "react";

//React-Router-DOM
import { Link } from "react-router-dom";

// Redux
import { useSelector } from "react-redux";

import Product from "../Card/Card";

import { Button } from "@material-ui/core";

const Featured = () => {
  const selectFeature = useSelector((state) => state.product.featuredProducts);

  return (
    <section className="py-5">
      <div className="container">
        <div className="row my-5">
          {selectFeature.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            <Button
              component={Link}
              to="/products"
              variant="outlined"
              className="main-link"
              style={{ marginTop: "30px" }}
            >
              Our products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
