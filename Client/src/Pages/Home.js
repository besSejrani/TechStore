import React from "react";

import Hero from "../components/Hero/Hero";
import { Link } from "react-router-dom";

import Services from "../components/Services/Services";
import Featured from "../components/Features/Features";

import { Button } from "@material-ui/core";

const Home = () => {
  return (
    <>
      <Hero title="Awesome phones" max="true">
        <Button
          component={Link}
          to="/products"
          variant="outlined"
          className="main-link"
          style={{ marginTop: "30px" }}
        >
          Our products
        </Button>
      </Hero>

      <Services />
      <Featured />
    </>
  );
};

export default Home;

// =================================================================
