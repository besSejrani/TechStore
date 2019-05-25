import React from "react";

import { connect } from "react-redux";

const CartTotals = ({ cartTotal, cartSubTotal, cartTax }) => {
  const clearCart = () => {
    localStorage.clear();
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col text-title text-center my-4">
            <button
              className="btn btn-outline-danger text-capitalize mb-4"
              onClick={() => clearCart()}
            >
              Clear Cart
            </button>
            <h3>subTotal: {cartSubTotal} CHF</h3>
            <h3>tax : {cartTax} CHF</h3>
            <h3>total: {cartTotal + cartTax} CHF</h3>
          </div>
        </div>
      </div>
    </>
  );
};

const mapState = state => ({
  cartTotal: state.product.cartTotal,
  cartSubTotal: state.product.cartSubTotal,
  cartTax: state.product.cartTax
});

export default connect(mapState)(CartTotals);
