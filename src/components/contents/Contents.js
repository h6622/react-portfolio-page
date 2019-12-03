import React from "react";
import styled from "styled-components";

import DownBtn from "./DownBtn";

const Content = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Contents = props => {
  const background = props.color;
  return (
    <>
      <Content style={{ background }}>
        <h1 id={props.id}>{props.id}</h1>
        {props.id === "Home" && <DownBtn></DownBtn>}
      </Content>
    </>
  );
};

export default Contents;
