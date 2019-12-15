import React from "react";
import { Container } from "../../../style/Style";
import styled from "styled-components";

import Canvas from "./Canvas";
import SelfIntroduction from "./SelfIntroduction";

import bgImg from "../../../images/bg.png";
import { AppContext } from "../../../App";

const Styled = styled.div`
  background: no-repeat center url(${bgImg});
  background-position-y: 300%;
  @media (max-width: 768px) {
    background-position-y: 1000%;
  }
`;

const AboutCp = props => {
  const size = [window.innerWidth, window.innerHeight];
  console.log(size);
  return (
    <Styled>
      <AppContext.Provider value={size}>
        <Container id={props.id}>
          <Canvas width={size[0]} height={size[1]} />
          <SelfIntroduction />
        </Container>
      </AppContext.Provider>
    </Styled>
  );
};

export default AboutCp;
