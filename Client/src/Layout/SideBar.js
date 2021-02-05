import React from "react";

import { Link } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { sidebarToggle } from "../Redux/product/actions";

import styled from "styled-components";

const SideBar = () => {
  const dispatch = useDispatch();

  const selectNav = useSelector((state) => state.product.links);
  const selectMenu = useSelector((state) => state.product.sidebarOpen);

  return (
    <SideWrapper show={selectMenu}>
      <ul>
        {selectNav.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className="sidebar-link"
                onClick={() => dispatch(sidebarToggle())}
              >
                {item.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </SideWrapper>
  );
};

export default SideBar;

// =================================================================

const SideWrapper = styled.nav`
  position: fixed;
  top: 60px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 1;
  border-right: 4px solid var(--primaryColor);
  transition: var(--mainTransition);
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(-100%)")};

  ul {
    list-style: none;
    padding: 0px !important;
  }

  .sidebar-link {
    display: block;
    font-size: 1.5 rem;
    text-transform: capitalize;
    color: var(--mainBlack);
    padding: 0.5rem 1.5rem;
    background: transparent;
    transition: var(--mainTransition);
  }

  .sidebar-link:hover {
    background: var(--primaryColor);
    color: var(--mainWhite);
    padding: 0.5rem 1.5rem 0.5rem 2.5rem;
    text-decoration: none;
  }

  @media (min-width: 576px) {
    width: 20rem;
  }
`;
