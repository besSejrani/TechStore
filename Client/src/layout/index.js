import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";
import SideCart from "./SideCart";

const index = ({ children }) => {
  return (
    <>
      <Header />
      <SideBar />
      <SideCart />
      {children}

      <Footer />
    </>
  );
};

export default index;
