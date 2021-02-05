import React, { Component } from "react";

import Logo from "../images/logo.svg";
import { Link } from "react-router-dom";

import { Badge } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CartIcon from "@material-ui/icons/ShoppingCart";

import styled from "styled-components";

// Redux
import { IAppState } from "../Redux/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import { sidebarCart, sidebarToggle } from "../Redux/product/productAction";

const Header = () => {
  const dispatch = useDispatch();
  const selectProducts = useSelector((state: IAppState) => state.product.cartItems);

  return (
    <header>
      <NavWrapper>
        <div className="nav-center">
          <MenuIcon className="nav-icon" onClick={() => dispatch(sidebarToggle())} />
          <Link to="/">
            <img src={Logo} alt="Bestech logo" />
          </Link>
          <div className="nav-cart">
            <Badge badgeContent={selectProducts} color="secondary">
              <CartIcon className="nav-icon" onClick={() => dispatch(sidebarCart())} />
            </Badge>
          </div>
        </div>
      </NavWrapper>
    </header>
  );
};

export default Header;

// =================================================================

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
