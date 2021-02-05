import React, { Component } from "react";

import Hero from "../components/Hero";
import { Link } from "react-router-dom";

import Services from "../components/HomePage/Services";
import Featured from "../components/HomePage/Featured";

class Home extends Component {
  render() {
    return (
      <>
        <Hero title="Awesome phones" max="true">
          <Link
            to="/products"
            className="main-link"
            style={{ marginTop: "30px" }}
          >
            Our products
          </Link>
        </Hero>

        <Services />
        <Featured />
      </>
    );
  }
}

export default Home;
