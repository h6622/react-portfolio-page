import React, { createContext } from "react";
import { GlobalStyle } from "./style/Style";
import { Link } from "react-scroll";

import Navbar from "./components/nav/Navbar";
import Home from "./components/contents/home/Home";
import About from "./components/contents/about/About";
import Skill from "./components/contents/skill/Skill";
import Project from "./components/contents/project/Project";
import Contact from "./components/contents/contact/Contact";

export const AppContext = createContext();

const App = () => {
  const contents = ["Home", "About", "Skill", "Project", "Contact"];
  const navLists = contents.map(content => {
    return (
      <li key={content}>
        <Link
          activeClass="active"
          to={content}
          spy={true}
          smooth={true}
          offset={-77}
          duration={1000}
        >
          {content}
        </Link>
      </li>
    );
  });

  // temp
  const tempColor = ["red", "orange", "yellow", "green", "skyblue"];

  return (
    <AppContext.Provider value={navLists}>
      <GlobalStyle />
      <Navbar id={contents} />
      <Home id={contents[0]} color={tempColor[0]} />
      <About id={contents[1]} color={tempColor[1]} />
      <Skill id={contents[2]} color={tempColor[2]} />
      {/* <Project id={contents[3]} color={tempColor[3]} />
      <Contact id={contents[4]} color={tempColor[4]} /> */}
    </AppContext.Provider>
  );
};

export default App;
