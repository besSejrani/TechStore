import React from "react";

import { connect } from "react-redux";

import styled from "styled-components";

const Footer = ({ social }) => {
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
            {social.map(link => {
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

const mapState = state => ({
  social: state.product.social
});

export default connect(mapState)(Footer);
