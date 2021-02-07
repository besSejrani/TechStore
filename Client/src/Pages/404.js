import React from "react";

import { Link } from "react-router-dom";

import Hero from "../Components/Hero/Hero";

const NotFound = () => {
  return (
    <>
      <Hero title="404, sorry dude, not found" max>
        <Link to="/" className="main-link" style={{ marginTop: "30px" }}>
          Return Home
        </Link>
      </Hero>
    </>
  );
};

export default NotFound;

// =================================================================
