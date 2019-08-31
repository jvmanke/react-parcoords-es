import React, { useEffect, useRef } from "react"
import ReactDOM from "react-dom"
import Parcoords from "parcoord-es"
// import "parcoord-es/dist/parcoords.css"

function Test({ data }) {
  const chartRef = useRef(null)
  useEffect(() => {
    if (chartRef !== null) {
      // use default config;
      const chart = Parcoords()(chartRef.current)
        .data(data)
        .render()
        .createAxes()
    }
  }, [chartRef])

  return (
    <div>
      <div style={{ height: `100px` }} ref={chartRef} className={"parcoords"} />
    </div>
  )
}

ReactDOM.render(
  <>
    <Test data={[[3, -3, 9, 6, 0.33, 1], [4, -4, 16, 8, 0.25, 1]]} />
    <Test
      data={[[0, -0, 0, 0, 0, 1], [1, -1, 1, 2, 1, 1], [2, -2, 4, 4, 0.5, 1]]}
    />
  </>,
  document.querySelector("#root")
)
