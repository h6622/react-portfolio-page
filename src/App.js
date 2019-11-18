import React from "react";
import { createGlobalStyle } from "styled-components";
import Navigation from "./Navigation";

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        background-color: pink;
    }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <h1>Hello React</h1>
    </>
  );
};

export default App;
