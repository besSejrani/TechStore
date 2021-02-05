import React from "react";

import Form from "../components/Contact/Contact";

import Hero from "../components/Hero/Hero";
import contactImg from "../images/contactBcg.jpeg";

const Contact = () => {
  return (
    <>
      <Hero max title="Contact Us" img={contactImg} />
      <Form />
    </>
  );
};

export default Contact;

// =================================================================
