import React from "react";
import styled from "styled-components";

const Content = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Contents = props => {
  const background = props.color;
  return (
    <>
      <Content style={{ background }}>
        <h1 id={props.id}>{props.id}</h1>
      </Content>
    </>
  );
};

export default Contents;
