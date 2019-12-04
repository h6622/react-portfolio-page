import React from "react";

import { Container } from "../../../style/Style";

const Skill = props => {
  const background = props.color;

  return (
    <>
      <Container id={props.id} style={{ background }}>
        <h1>{props.id}</h1>
      </Container>
    </>
  );
};

export default Skill;
