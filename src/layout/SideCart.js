import React from "react";

import { connect } from "react-redux";
import { sidebarCart } from "../actions";

import styled from "styled-components";

const SideCart = ({ cart, cartOpen, sidebarCart }) => {
  return (
    <CartWrapper show={cartOpen} onClick={() => sidebarCart()}>
      <p>cart items</p>
    </CartWrapper>
  );
};

const CartWrapper = styled.aside`
  position: fixed;
  top: 60px;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 1;
  border-left: 4px solid var(--primaryColor);
  transition: var(--mainTransition);

  transform: ${props => (props.show ? "translateX(0)" : "translateX(100%)")};

  @media (min-width: 576px) {
    width: 20rem;
  }
`;

const mapState = state => ({
  cartOpen: state.product.cartOpen,
  cart: state.product.cart
});

export default connect(
  mapState,
  { sidebarCart }
)(SideCart);
