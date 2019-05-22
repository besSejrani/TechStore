import React from "react";

import { connect } from "react-redux";
import { addToCart, setSingleProduct } from "../actions";

import { Link } from "react-router-dom";

import styled from "styled-components";
import { FaSearch, FaCartPlus } from "react-icons/fa";

const Product = ({ product, addToCart, setSingleProduct }) => {
  return (
    <ProductWrapper className="col-10 mx-auto col-sm-8 col-md-6 col-lg-4 my-3">
      <div className="card">
        <div className="img-container">
          <img
            src={product.image}
            alt="product"
            className="card-img-top p-5"
            style={{ height: "320px" }}
          />

          <div className="product-icon">
            <Link
              to={`/products/${product.id}`}
              onClick={() => setSingleProduct(product.id)}
            >
              <FaSearch className="icon" />
            </Link>

            <FaCartPlus
              className="icon"
              onClick={() => addToCart(product.id)}
            />
          </div>
        </div>
        <div className="card-body d-flex justify-content-between">
          <p className="mb-0">{product.title}</p>
          <p className="mb-0">{product.price} CHF</p>
        </div>
      </div>
    </ProductWrapper>
  );
};

const ProductWrapper = styled.div`
  .card {
    box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.2);
    transition: var(--mainTransition);
    height: 100%;
    text-transform: uppercase;
  }

  .card:hover {
    box-shadow: 7px 8px 5px 0px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;

export default connect(
  null,
  { addToCart, setSingleProduct }
)(Product);
