import React, { Component } from "react";

import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <>
        <NavLink to="/" exact activeStyle={{ color: "red" }}>
          Home
        </NavLink>
        <NavLink to="/about" exact activeStyle={{ color: "green" }}>
          About
        </NavLink>
        <NavLink to="/products" exact activeStyle={{ color: "blue" }}>
          Products
        </NavLink>
      </>
    );
  }
}

export default Header;
