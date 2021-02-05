import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct, addToCart } from "../Redux/product/actions";

import { Link } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import singleProductImage from "../images/singleProductBcg.jpeg";

import { Button } from "@material-ui/core";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const selectProduct = useSelector((state) => state.product.singleProduct);

  const { company, description, id, price, title, image } = selectProduct;

  useEffect(() => {
    dispatch(getSingleProduct());
  });

  return (
    <>
      <Hero img={singleProductImage} title="single product" />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-sm-8 col-md-6 my-5">
              <img
                src={`../${image}`}
                alt="single product"
                className="img-fluid"
              />
            </div>
            <div className="col-10 mx-auto col-sm-8 col-md-6 my-5">
              <h5 className="text-title text-capitalize mb-4">
                Model :{title}
              </h5>
              <h5 className="text-capitalize text-muted mb-4">{company}</h5>

              <h5 className="text-main text-capitalize">{price} CHF</h5>

              <p className="text-capitalize text title mt-3">
                Some info about product:
              </p>
              <p>{description}</p>

              <Button
                variant="outlined"
                className="main-link"
                onClick={() => dispatch(addToCart(id))}
                style={{ marginTop: "30px" }}
              >
                Add to Cart
              </Button>

              <Button
                component={Link}
                to="/products"
                variant="outlined"
                className="main-link"
                style={{ marginTop: "30px" }}
              >
                Back to Products
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;

// =================================================================
