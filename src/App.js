import React from "react";

import { GlobalStyle } from "./style/Style";
import Navbar from "./components/nav/Navbar";
import Home from "./components/contents/home/Home";
import About from "./components/contents/about/About";
import Skill from "./components/contents/skill/Skill";
import Project from "./components/contents/project/Project";
import Contact from "./components/contents/contact/Contact";

const App = () => {
  const contents = ["Home", "About", "Skill", "Project", "Contact"];

  // temp
  const tempColor = ["red", "orange", "yellow", "green", "skyblue"];

  return (
    <>
      <GlobalStyle />
      <Navbar id={contents} />
      <Home id={contents[0]} color={tempColor[0]} />
      <About id={contents[1]} color={tempColor[1]} />
      <Skill id={contents[2]} color={tempColor[2]} />
      <Project id={contents[3]} color={tempColor[3]} />
      <Contact id={contents[4]} color={tempColor[4]} />
    </>
  );
};

export default App;
