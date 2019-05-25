import React from "react";
import CartItem from "./CartItem";

import { connect } from "react-redux";

const CartList = ({ cart }) => {
  const renderCart = cart => {
    if (cart.length === 0) {
      return (
        <h1 className="text-title text-center text-capitalize my-4">
          Your cart is currently empty
        </h1>
      );
    }
    return (
      <>
        {cart.map(item => {
          return (
            <CartItem
              key={item.id}
              cartItem={item}
              //increment={increment}
              //decrement={decrement}
              //removeItem={removeItem}
            />
          );
        })}
      </>
    );
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">{renderCart(cart)}</div>
      </div>
    </div>
  );
};

const mapState = state => ({
  cart: state.product.cart
});

export default connect(mapState)(CartList);
