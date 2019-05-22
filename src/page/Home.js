import React, { Component } from "react";

import Hero from "../components/Hero";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <>
        <Hero title="Awesome phones" max>
          <Link
            to="/products"
            className="main-link"
            style={{ marginTop: "30px" }}
          >
            Our products
          </Link>
        </Hero>
      </>
    );
  }
}

export default Home;
