import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import SideDrawerNavigation from "./SideDrawerNavigation";
import SideCart from "./SideCart";

import { withTheme } from "./Theme";

const index = ({ children }) => {
  return (
    <>
      <Header />

      <SideDrawerNavigation />
      <SideCart />
      {children}

      <Footer />
    </>
  );
};

export default withTheme(index);

// =================================================================
