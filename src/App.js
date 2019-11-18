import React from "react";
import { createGlobalStyle } from "styled-components";
import Navigation from "./Navigation";
import Contents from "./Contents";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        
    }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Contents />
      <Contents />
      <Contents />
      <Contents />
      <Contents />
    </>
  );
};

export default App;
