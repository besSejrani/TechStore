import React, { Component } from "react";

import Hero from "../components/Hero";
import cartBcg from "../images/storeBcg.jpeg";
import CartSection from "../components/CartPage";

class Cart extends Component {
  /*  componentDidMount = () => {
    this.forceUpdate();
  }; */

  render() {
    return (
      <>
        <Hero img={cartBcg} />
        <CartSection />
      </>
    );
  }
}

export default Cart;
