import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const Content = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Contents = props => {
  const background = props.color;
  return (
    <>
      <Content style={{ background }}>
        <h1>{props.title}</h1>
      </Content>
    </>
  );
};

export default Contents;
