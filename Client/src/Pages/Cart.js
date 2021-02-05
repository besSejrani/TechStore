import React from "react";

import Hero from "../components/Hero/Hero";
import cartBcg from "../images/storeBcg.jpeg";
import CartSection from "../components/Cart/";

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
