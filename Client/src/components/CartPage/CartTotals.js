import React from "react";

import { connect } from "react-redux";
import { clearCart } from "../../Redux/product/actions";

const CartTotals = ({ cartSubTotal, cartTax, clearCart, history }) => {
  const renderTotal = (sub, tax) => {
    let subNumb = Number(sub);
    let taxNumb = Number(tax);

    return parseFloat(subNumb + taxNumb).toFixed(2);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col text-title text-center my-4">
            <button
              className="btn btn-outline-danger text-capitalize mb-4"
              onClick={() => clearCart(history)}
            >
              Clear Cart
            </button>
            <h5>subTotal: {cartSubTotal} CHF</h5>
            <h5>tax : {cartTax} CHF</h5>
            <h5>total: {renderTotal(cartSubTotal, cartTax)} CHF</h5>
          </div>
        </div>
      </div>
    </>
  );
};

const mapState = (state) => ({
  cartSubTotal: state.product.cartSubTotal,
  cartTax: state.product.cartTax,
});

export default connect(mapState, { clearCart })(CartTotals);
