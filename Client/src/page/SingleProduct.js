import React, { Component } from "react";

import { connect } from "react-redux";
import { getSingleProduct, addToCart } from "../Redux/actions";

import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import singleProductImage from "../images/singleProductBcg.jpeg";

class SingleProduct extends Component {
  componentDidMount = () => {
    this.props.getSingleProduct();
  };
  render() {
    const {
      company,
      description,
      id,
      price,
      title,
      image
    } = this.props.singleProduct;

    if (this.props.product) {
      return <h1>product is loading ...</h1>;
    }

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

                <button
                  className="main-link"
                  type="button"
                  style={{ margin: "0.75rem" }}
                  onClick={() => this.props.addToCart(id)}
                >
                  Add to Cart
                </button>

                <Link
                  to="/products"
                  className="main-link"
                  style={{ margin: "0.75rem" }}
                >
                  Back to Products
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

const mapState = state => ({
  singleProduct: state.product.singleProduct,
  loading: state.product.loading
});

export default connect(
  mapState,
  { getSingleProduct, addToCart }
)(SingleProduct);
