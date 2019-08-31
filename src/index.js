import React, { useEffect, useRef } from "react"
import ReactDOM from "react-dom"
import Parcoords from "parcoord-es"
import "parcoord-es/dist/parcoords.css"

function Test() {
  const chartRef = useRef(null)
  useEffect(() => {
    if (chartRef !== null) {
      // use default config;
      Parcoords()(chartRef.current)
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
  }, [chartRef])

  return (
    <div style={{ height: 300 }}>
      <div style={{ height: `100%` }} ref={chartRef} className={"parcoords"} />
    </div>
  )
}

ReactDOM.render(<Test />, document.querySelector("#root"))
