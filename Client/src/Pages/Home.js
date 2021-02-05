import React from "react";

import Hero from "../Components/Hero/Hero";
import { Link } from "react-router-dom";

import Services from "../Components/Services/Services";
import Featured from "../Components/Features/Features";

import { Button } from "@material-ui/core";

const Home = () => {
  return (
    <>
      <Hero title="Awesome phones" max="true">
        <Button component={Link} to="/products" variant="outlined" className="main-link" style={{ marginTop: "30px" }}>
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
