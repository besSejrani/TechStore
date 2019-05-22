import React, { Component } from "react";

import Logo from "../images/logo.svg";

import { FaBars, FaCartPlus } from "react-icons/fa";
import styled from "styled-components";

import { connect } from "react-redux";
import { sidebarCart, sidebarToggle } from "../actions";

class Header extends Component {
  render() {
    return (
      <header>
        <NavWrapper>
          <div className="nav-center">
            <FaBars
              className="nav-icon"
              onClick={() => this.props.sidebarToggle()}
            />
            <img src={Logo} alt="Bestech logo" />
            <div className="nav-cart">
              <FaCartPlus
                className="nav-icon"
                onClick={() => this.props.sidebarCart()}
              />
              <div className="cart-items">{this.props.cartItem}</div>
            </div>
          </div>
        </NavWrapper>
      </header>
    );
  }
}

const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  background: var(--mainGrey);
  border-bottom: 3px solid var(--primaryColor);

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

  .cart-items {
    position: absolute;
    top: -8px;
    right: -10px;
    background: var(--primaryColor);
    color: var(--mainWhite);
    font-size: 0.85rem;
    padding: 0 5px;
    border-radius: 50%;
  }

  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const mapState = state => ({
  cartItem: state.product.cartItems
});

export default connect(
  mapState,
  { sidebarToggle, sidebarCart }
)(Header);
