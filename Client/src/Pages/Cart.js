import React from "react";

import Hero from "../Components/Hero/Hero";
import cartBcg from "../images/storeBcg.jpeg";
import CartSection from "../Components/Cart";

const Cart = ({ history }) => {
  return (
    <>
      <Hero img={cartBcg} />
      <CartSection history={history} />
    </>
  );
};

export default Cart;

// =================================================================
