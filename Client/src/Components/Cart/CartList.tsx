import React from "react";
import CartItem from "./CartItem";

// Redux
import { IAppState } from "../../Redux/rootReducer";
import { useSelector } from "react-redux";

const CartList = () => {
  const selectCart = useSelector((state: IAppState) => state.product.cart);

  const renderCart = (selectCart) => {
    if (selectCart.length === 0) {
      return <h1 className="text-title text-center text-capitalize my-4">Your cart is currently empty</h1>;
    }
    return (
      <>
        {selectCart.map((item) => {
          return <CartItem key={item.id} cartItem={item} />;
        })}
      </>
    );
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">{renderCart(selectCart)}</div>
      </div>
    </div>
  );
};

export default CartList;

// =================================================================
