import React, { useEffect, useRef, useState } from "react"
import ReactDOM from "react-dom"
import Parcoords from "parcoord-es"

import styled from "styled-components"

function FunctionParcoords({ className, onMount = () => {} }) {
  const [parcoord, setPC] = useState(null)
  const chartRef = useRef(null)

  useEffect(() => {
    if (chartRef !== null) {
      // use default config;
      const pc = Parcoords()(chartRef.current).data([
        [0, -0, 0, 0, 0, 1],
        [1, -1, 1, 2, 1, 1],
        [2, -2, 4, 4, 0.5, 1],
        [3, -3, 9, 6, 0.33, 1],
        [4, -4, 16, 8, 0.25, 1]
      ])

      setPC(() => pc)
      onMount(() => pc)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartRef])
  return <ChartContainer ref={chartRef} className={className} />
}

const Wrapper = () => {
  const [parcoord, setPC] = useState(null)
  return (
    <>
      <button
        type="button"
        onClick={() => {
          parcoord.render()
          parcoord.createAxes()
        }}
      />
      <FunctionParcoords onMount={setPC} />
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
  </div>,
  document.querySelector("#root")
)
