import React from "react";

import Hero from "../components/Hero";
import AboutBcg from "../images/aboutBcg.jpeg";
import Info from "../components/AboutPage/Info";

const About = () => {
  return (
    <>
      <Hero img={AboutBcg} title="About Us" />
      <Info />
    </>
  );
};

export default About;
