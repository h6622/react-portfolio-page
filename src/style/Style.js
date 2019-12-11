import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  .canvas {
    transform: scale(0.9, 0.9);
  }
`;

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        overflow-x: hidden;
    }
    button {
      padding: 0;
      border: none;
      background: none;
    }
`;
