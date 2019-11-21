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
      <Contents title="Home" color="red" />
      <Contents title="About" color="orange" />
      <Contents title="Skill" color="yellow" />
      <Contents title="Project" color="green" />
      <Contents title="Contact" color="blue" />
    </>
  );
};

export default App;
