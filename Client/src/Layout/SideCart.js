import React from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { sidebarCart } from "../Redux/product/actions";

import { Link } from "react-router-dom";
import styled from "styled-components";

import { Button } from "@material-ui/core";

const SideCart = () => {
  const dispatch = useDispatch();
  const selectCartOpen = useSelector((state) => state.product.cartOpen);
  const selectCart = useSelector((state) => state.product.cart);
  const selectCartTotal = useSelector((state) => state.product.cartTotal);

  return (
    <CartWrapper show={selectCartOpen} onClick={() => dispatch(sidebarCart())}>
      <ul>
        {selectCart.map((item) => {
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
      <h4 className="text-capitalize text-main">
        cart total: {selectCartTotal} CHF
      </h4>
      <div className="text-center my-5">
        <Button
          component={Link}
          to="/cart"
          variant="outlined"
          className="main-link"
          style={{ marginTop: "30px" }}
        >
          Cart Page
        </Button>
      </div>
    </CartWrapper>
  );
};

export default SideCart;

// =================================================================

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
