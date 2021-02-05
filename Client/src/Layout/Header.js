import React, { Component } from "react";

import Logo from "../images/logo.svg";

import { Badge } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CartIcon from "@material-ui/icons/ShoppingCart";

import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { sidebarCart, sidebarToggle } from "../Redux/product/actions";

const Header = () => {
  const dispatch = useDispatch();
  const selectProducts = useSelector((state) => state.product.cartItems);

  return (
    <header>
      <NavWrapper>
        <div className="nav-center">
          <MenuIcon
            className="nav-icon"
            onClick={() => dispatch(sidebarToggle())}
          />
          <img src={Logo} alt="Bestech logo" />
          <div className="nav-cart">
            <Badge badgeContent={selectProducts} color="secondary">
              <CartIcon
                className="nav-icon"
                onClick={() => dispatch(sidebarCart())}
              />
            </Badge>
          </div>
        </div>
      </NavWrapper>
    </header>
  );
};

const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  background: var(--mainGrey);
  border-bottom: 3px solid var(--primaryColor);
  z-index: 1;

  .nav-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1170px;
    margin: 0 auto;
  }

  .nav-cart {
    position: relative;
  }

  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export default Header;
