import React from "react";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 2em;
  padding-left: 2em;
  background-color: white;
  position: sticky;
  top: 0;
  ul {
    li {
      display: inline-block;
      margin-right: 0.75em;
      a {
        text-decoration: none;
        color: #000;
      }
    }
  }
`;

const sections = ["Home", "About", "Skill", "Project", "Contact"];

const navLinks = sections.map(section => {
  return (
    <li key={section}>
      <Link
        activeClass="active"
        to={section}
        spy={true}
        smooth={true}
        offset={-30}
        duration={1000}
      >
        {section}
      </Link>
    </li>
  );
});

const Navigation = () => {
  return (
    <>
      <Nav>
        <h1 onClick={scroll.scrollToTop}>Navigation</h1>
        <ul>{navLinks}</ul>
      </Nav>
    </>
  );
};

export default Navigation;
