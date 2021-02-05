import React from "react";

import { connect } from "react-redux";
import { sidebarCart } from "../Redux/product/actions";

import { Link } from "react-router-dom";
import styled from "styled-components";

const SideCart = ({ cart, cartOpen, sidebarCart, cartTotal }) => {
  return (
    <CartWrapper show={cartOpen} onClick={() => sidebarCart()}>
      <ul>
        {cart.map((item) => {
          return (
            <li key={item.id} className="cart-item mb-4">
              <img width="70" src={`../${item.image}`} alt="cart item" />
              <div className="mt-3">
                <h6 className="text-uppercase">{item.title}</h6>
                <h6 className="text-title text-capitalize">
                  Amount: {item.count}
                </h6>
              </div>
            </li>
          );
        })}
      </ul>
      <h4 className="text-capitalize text-main">cart total: {cartTotal} CHF</h4>
      <div className="text-center my-5">
        <Link to="/cart" className="main-link">
          Cart Page
        </Link>
      </div>
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

  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};

  @media (min-width: 576px) {
    width: 20rem;
  }

  overflow: scroll;
  padding: 2rem;
  ul {
    padding: 0 !important;
  }
  .cart-item {
    list-style: none;
  }
`;

const mapState = (state) => ({
  cartOpen: state.product.cartOpen,
  cart: state.product.cart,
  cartTotal: state.product.cartTotal,
});

export default connect(mapState, { sidebarCart })(SideCart);
