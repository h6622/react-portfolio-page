import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
    }
`;
