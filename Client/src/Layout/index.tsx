import React from "react";

import Header from "./Header";
import SideDrawerNavigation from "./SideDrawerNavigation";
import SideDrawerCart from "./SideDrawerCart";

import { withTheme } from "./Theme";

const index = ({ children }) => {
  return (
    <>
      <Header />

      <SideDrawerNavigation />
      <SideDrawerCart />
      {children}
    </>
  );
};

export default withTheme(index);

// =================================================================
