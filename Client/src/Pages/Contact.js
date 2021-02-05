import React from "react";

import Form from "../Components/Contact/Contact";

import Hero from "../Components/Hero/Hero";
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
