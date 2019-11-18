import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const Content = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: yellowgreen;
`;

const Contents = () => {
  return (
    <>
      <Content>
        <h1>Contents</h1>
      </Content>
    </>
  );
};

export default Contents;
