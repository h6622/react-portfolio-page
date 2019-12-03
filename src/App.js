import React from "react";
import { createGlobalStyle } from "styled-components";

import Navbar from "./components/nav/Navbar";
import Contents from "./components/contents/Contents";

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
      <Navbar />
      <Contents id="Home" color="red" />
      <Contents id="About" color="orange" />
      <Contents id="Skill" color="yellow" />
      <Contents id="Project" color="green" />
      <Contents id="Contact" color="blue" />
    </>
  );
};

export default App;
