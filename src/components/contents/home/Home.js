import React from "react";
import Typing from "react-typing-animation";
import styled from "styled-components";

import { Container } from "../../../style/Style";
import DownBtn from "./DownBtn";

const message = [
  "This page is created by React.",
  "이 페이지는 리액트로 제작하였습니다.",
  "このページはリアクトで作りました。"
];

const Div = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  font-size: 3em;
  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

const Home = props => {
  return (
    <>
      <Container id={props.id}>
        <Typing speed={75} loop={true} hideCursor={true}>
          <Div>{message[0]}</Div>
          <Typing.Backspace count={message[0].length + 1} delay={2000} />
          <Typing.Delay ms={1000} />
          <Div>{message[1]}</Div>
          <Typing.Backspace count={message[1].length + 1} delay={2000} />
          <Typing.Delay ms={1000} />
          <Div>{message[2]}</Div>
          <Typing.Backspace count={message[2].length + 1} delay={2000} />
          <Typing.Delay ms={1000} />
        </Typing>
        <DownBtn />
      </Container>
    </>
  );
};

export default Home;
