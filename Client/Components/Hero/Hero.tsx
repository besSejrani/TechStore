import React from "react";

import styled from "styled-components";

const Hero = ({ children, title, max }) => {
  return (
    <HeroWrapper max={max}>
      <div className="banner">
        <h1 className="title">{title}</h1>
        {children}{" "}
      </div>
    </HeroWrapper>
  );
};

export default Hero;

// =================================================================

const HeroWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${(props) => (props.max ? "100vh" : "60vh")};
  color: var(--mainWhite);
  background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA)),
    url(${(props) => props.img}) center/cover no-repeat;

  .title {
    padding-top: 2rem;
    font-size: 3.5rem;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
    text-transform: uppercase;
    letter-spacing: var(--mainSpacing);
  }
`;
