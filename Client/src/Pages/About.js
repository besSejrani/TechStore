import React from "react";

import Hero from "../Components/Hero/Hero";
import AboutBcg from "../images/aboutBcg.jpeg";
import Info from "../Components/About/About";

const About = () => {
  return (
    <>
      <Hero img={AboutBcg} title="About Us" />
      <Info />
    </>
  );
};

export default About;

// =================================================================
