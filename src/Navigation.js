import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 2em;
  padding-left: 2em;
  background-color: white;
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
      <a href={section}>{section}</a>
    </li>
  );
});

const Navigation = () => {
  return (
    <>
      <Nav>
        <h1>Navigation</h1>
        <ul>{navLinks}</ul>
      </Nav>
    </>
  );
};

export default Navigation;
