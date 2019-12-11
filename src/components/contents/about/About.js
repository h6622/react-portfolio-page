import React from "react";
import { Container } from "../../../style/Style";

import Canvas from "./Canvas";

const About = props => {
  const background = props.color;

  return (
    <>
      <Container id={props.id} style={{ background }}>
        <Canvas />
      </Container>
    </>
  );
};

export default About;
