import React, { useEffect, useRef, useState } from "react"
import ReactDOM from "react-dom"
import Parcoords from "parcoord-es"

import styled from "styled-components"

function FunctionParcoords({ className }) {
  const [parcoord] = useState(() => Parcoords())
  const chartRef = useRef(null)
  useEffect(() => {
    if (chartRef !== null) {
      // use default config;
      parcoord(chartRef.current)
        .data([
          [0, -0, 0, 0, 0, 1],
          [1, -1, 1, 2, 1, 1],
          [2, -2, 4, 4, 0.5, 1],
          [3, -3, 9, 6, 0.33, 1],
          [4, -4, 16, 8, 0.25, 1]
        ])
        .render()
        .createAxes()
    }
  }, [chartRef, parcoord])

  return <ChartContainer ref={chartRef} className={className} />
}

class ClassParcoords extends React.Component {
  constructor() {
    super()
    this.aRef = React.createRef()
  }

  componentDidMount() {
    this.parcoords = Parcoords()(this.aRef.current)
      .data([
        [0, -0, 0, 0, 0, 1],
        [1, -1, 1, 2, 1, 1],
        [2, -2, 4, 4, 0.5, 1],
        [3, -3, 9, 6, 0.33, 1],
        [4, -4, 16, 8, 0.25, 1]
      ])
      .createAxes()
  }

  render() {
    return <ChartContainer ref={this.aRef} />
  }
}

const Wrapper = () => {
  const ref = useRef(null)

  return (
    <>
      <button
        type="button"
        onClick={() => {
          ref.current.parcoords.render()
          ref.current.parcoords.createAxes()
        }}
      />
      <ClassParcoords ref={ref} />
    </>
  )
}

const ChartContainer = styled.div`
  & > svg,
  & > canvas {
    font-size: 1em;
    font-family: ${({ fontFamily }) => fontFamily || "sans-serif"};
    position: absolute;
  }

  & > canvas {
    pointer-events: none;
  }

  & text.label {
    cursor: default;
    fill: ${({ tickColor, axisColor }) => tickColor || axisColor || "black"};
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
    stroke: ${({ axisColor }) => axisColor || "#222"};
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
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
`

ReactDOM.render(
  <div style={{ height: 300 }}>
    <Wrapper />
    <FunctionParcoords />
  </div>,
  document.querySelector("#root")
)
