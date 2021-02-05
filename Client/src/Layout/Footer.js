import React from "react";

//Redux
import { useSelector } from "react-redux";

import styled from "styled-components";

const Footer = () => {
  const selectSocial = useSelector((state) => state.product.social);

  return (
    <FooterWrapper>
      <div className="container py-3">
        <div className="row">
          <div className="col-md-6">
            <p className="text-capitalize">
              Copyright Bestech &copy; {new Date().getFullYear()}. All rights
              reserved
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-between">
            {selectSocial.map((link) => {
              return (
                <a href={link.url} key={link.id}>
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

// =================================================================

const FooterWrapper = styled.footer`
  background: var(--darkGrey);
  color: var(--mainWhite);

  .icon {
    font-size: 30px;
    color: var(--mainWhite);
    transition: var(--mainTransition);
  }

  .icon:hover {
    cursor: pointer;
    color: var(--primaryColor);
  }
`;
