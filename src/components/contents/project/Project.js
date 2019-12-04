import React from "react";

import { Container } from "../Style";

const Project = props => {
  const background = props.color;

  return (
    <>
      <Container id={props.id} style={{ background }}>
        <h1>{props.id}</h1>
      </Container>
    </>
  );
};

export default Project;
