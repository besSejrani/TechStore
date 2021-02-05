import React from "react";

import Hero from "../components/Hero";
import cartBcg from "../images/storeBcg.jpeg";
import CartSection from "../components/CartPage";

const Cart = props => {
  console.log(props);
  return (
    <>
      <Hero img={cartBcg} />
      <CartSection history={props.history} />
    </>
  );
};

export default Cart;
