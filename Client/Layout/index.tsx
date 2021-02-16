import React from "react";

import Header from "./Header";
import Footer from "./Footer"
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

      <Footer />
    </>
  );
};

export default withTheme(index);

// =================================================================
