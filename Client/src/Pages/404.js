import React from "react";

import { Link } from "react-router-dom";

import Hero from "../components/Hero/Hero";
import defaultBcg from "../images/defaultBcg.jpeg";

const NotFound = () => {
  return (
    <>
      <Hero img={defaultBcg} title="404, sorry dude, not found" max>
        <Link to="/" className="main-link" style={{ marginTop: "30px" }}>
          Return Home
        </Link>
      </Hero>
    </>
  );
};

export default NotFound;

// =================================================================
