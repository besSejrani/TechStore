import React from "react";

import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

const Cart = ({ history }) => {
  return (
    <section className="py-5">
      <CartColumns />
      <CartList />
      <CartTotals history={history} />
    </section>
  );
};

export default Cart;
