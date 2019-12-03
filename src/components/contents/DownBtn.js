import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

import downIcon from "../../images/keyboard_arrow_down-24px.svg";

const DownIcon = styled.img`
  width: 7.5em;
  height: 7.5em;
  position: sticky;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const DownBtn = () => {
  return (
    <>
      <Link
        activeClass="active"
        to="About"
        spy={true}
        smooth={true}
        offset={-80}
        duration={1000}
      >
        <DownIcon src={downIcon} />
      </Link>
    </>
  );
};

export default DownBtn;
