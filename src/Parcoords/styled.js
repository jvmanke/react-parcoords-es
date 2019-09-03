//Module Imports
import styled from "styled-components"

export const Container = styled.div`
  & > svg,
  & > canvas {
    font-size: 1em;
    font-family: "sans-serif";
    position: absolute;
  }

  & > canvas {
    pointer-events: none;
  }

  & text.label {
    cursor: default;
    fill: ${({ axisTitleColor }) => axisTitleColor || "black"};
  }

  & rect.background {
    fill: transparent;
  }

  & rect.background:hover {
    fill: rgba(120, 120, 120, 0.2);
  }

  & .resize rect {
    fill: rgba(0, 0, 0, 0.1);
  }

  & rect.extent {
    fill: rgba(255, 255, 255, 0.25);
    stroke: rgba(0, 0, 0, 0.6);
  }

  & .axis line,
  & .axis path {
    fill: none;
    stroke: "#222";
    shape-rendering: crispEdges;
  }

  & canvas {
    opacity: 1;
    transition: opacity 0.3s;
  }

  & canvas.faded {
    opacity: 0.25;
  }

  & canvas.dimmed {
    opacity: 0.85;
  }

  -webkit-touch-callout: none;
  user-select: none;
  background-color: ${({ background }) => background || "white"};
  display: "inline-block";
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
`
