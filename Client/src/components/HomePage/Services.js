import React, { Component } from "react";

import styled from "styled-components";

import ShippingIcon from "@material-ui/icons/LocalShipping";
import ReturnIcon from "@material-ui/icons/Redo";
import SecureIcon from "@material-ui/icons/Security";

export class Services extends Component {
  state = {
    services: [
      {
        id: 0,
        icon: <ShippingIcon />,
        title: "Free Shipping",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ipsum",
      },
      {
        id: 1,
        icon: <ReturnIcon />,
        title: "30 days return policy",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ipsum",
      },
      {
        id: 2,
        icon: <SecureIcon />,
        title: "Secure payment",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ipsum",
      },
    ],
  };

  render() {
    return (
      <ServiceWrapper className="py-5">
        <div className="container">
          <div className="row">
            {this.state.services.map((item) => {
              return (
                <div
                  className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3 "
                  key={item.id}
                >
                  <div className="service-icon">{item.icon}</div>
                  <div
                    className="mt-3 text-capitalize"
                    style={{ color: "var(--mainWhite)" }}
                  >
                    {item.title}
                  </div>
                  <div className="mt-3" style={{ color: "var(--mainWhite)" }}>
                    {item.text}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ServiceWrapper>
    );
  }
}
const ServiceWrapper = styled.section`
  background: rgba(95, 183, 234, 0.5);

  .service-icon {
    font-size: 2.5rem;
    color: var(--mainWhite);
  }
  p {
    color: var(--mainWhite);
  }
`;

export default Services;
