import React, { useContext, useState } from "react";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";

import { AppContext } from "../../App";
import MoreBtn from "./MoreBtn";
import NavMobile from "./NavMobile";
import CloseBtn from "./CloseBtn";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  font-family: "Shadows Into Light", cursive;
  z-index: 1;
  h1 {
    padding-left: 2em;
    font-size: 3em;
  }
  .topMenu {
    li {
      display: inline-block;
      margin-right: 0.75em;
      font-size: 1.5em;
    }
  }
  .moreBtn {
    position: absolute;
    left: 85%;
  }
  .navMobile {
    position: fixed;
    top: 2.5%;
    left: 85%;
    font-size: 1em;
  }
  @media (max-width: 768px) {
    justify-content: center;
    h1 {
      padding-left: 0;
    }
    .topMenu {
      display: none;
    }
  }
  @media (min-width: 769px) {
    .moreBtn {
      display: none;
    }
    .navMobile {
      display: none;
    }
  }
`;

const Navbar = () => {
  const navLists = useContext(AppContext);
  const [clicked, setClicked] = useState(false);

  const onClickBtn = () => {
    if (clicked === true) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  };
  return (
    <>
      <StyledNav>
        <h1 onClick={scroll.scrollToTop}>h662</h1>
        <ul className="topMenu">{navLists}</ul>
        {!clicked && (
          <button className="moreBtn" onClick={onClickBtn}>
            <MoreBtn />
          </button>
        )}
        {clicked && (
          <ul className="navMobile">
            <li>
              <button className="closeBtn" onClick={onClickBtn}>
                <CloseBtn />
              </button>
            </li>
            <NavMobile />
          </ul>
        )}
      </StyledNav>
    </>
  );
};

export default Navbar;
