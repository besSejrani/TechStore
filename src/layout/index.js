import React from "react";

import Header from "./Header";

const index = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default index;
