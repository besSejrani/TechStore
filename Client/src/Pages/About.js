import React from "react";

import Hero from "../components/Hero/Hero";
import AboutBcg from "../images/aboutBcg.jpeg";
import Info from "../components/About/About";

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
