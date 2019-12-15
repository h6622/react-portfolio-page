import React from "react";
import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";
import styled from "styled-components";

import { Container } from "../../../style/Style";

const Styled = styled.div`
  font-size: 1em;
  text-align: center;
  #radarchart {
    width: 50%;
  }
`;

const data = [
  {
    data: {
      programming: 0.9,
      graphic: 0.65,
      design: 0.75,
      health: 0.95,
      english: 0.6,
      japanese: 0.7
    },
    meta: { color: "green" }
  }
];

const captions = {
  programming: "Programming",
  graphic: "Graphic",
  design: "Design",
  english: "English",
  health: "Health",
  japanese: "Japanese"
};

const defaultOptions = {
  captionProps: () => ({
    className: "caption",
    textAnchor: "middle",
    fontSize: 20
  })
};

const About = props => {
  return (
    <>
      <Container id={props.id}>
        <Styled>
          <h1>About Me</h1>
          <RadarChart
            id="radarchart"
            captions={captions}
            data={data}
            size={600}
            options={defaultOptions}
          />
        </Styled>
      </Container>
    </>
  );
};

export default About;
