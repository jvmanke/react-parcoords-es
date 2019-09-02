// Module Imports
import React from "react"
import ReactDOM from "react-dom"

// Relative Imports
import Parcoords from "./Parcoords"

ReactDOM.render(
  <div style={{ height: 300 }}>
    <Parcoords
      data={[
        [0, -0, 0, 0, 0, 1],
        [1, -1, 1, 2, 1, 1],
        [2, -2, 4, 4, 0.5, 1],
        [3, -3, 9, 6, 0.33, 1],
        [4, -4, 16, 8, 0.25, 1]
      ]}
    />
  </div>,
  document.querySelector("#root")
)
