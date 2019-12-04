import React from "react";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 2em;
  padding-left: 4em;
  background-color: white;
  position: sticky;
  top: 0;
  font-family: "Shadows Into Light", cursive;
  z-index: 1;
  @media (max-width: 768px) {
    justify-content: center;
    ul {
      display: none;
    }
  }
  h1 {
    font-size: 3em;
  }
  ul {
    li {
      display: inline-block;
      margin-right: 0.75em;
      font-size: 1.5em;
    }
  }
`;

const Navbar = props => {
  const navLinks = props.id.map(section => {
    return (
      <li key={section}>
        <Link
          activeClass="active"
          to={section}
          spy={true}
          smooth={true}
          offset={-80}
          duration={1000}
        >
          {section}
        </Link>
      </li>
    );
  });
  return (
    <>
      <Nav>
        <h1 onClick={scroll.scrollToTop}>h662</h1>
        <ul>{navLinks}</ul>
      </Nav>
    </>
  );
};

export default Navbar;
