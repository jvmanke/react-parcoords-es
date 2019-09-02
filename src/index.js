// Module Imports
import React, { useState } from "react"
import ReactDOM from "react-dom"

// Relative Imports
import Parcoords from "./Parcoords"
const data = [
  [0, -0, 0, 0, 0, 1],
  [1, -1, 1, 2, 1, 1],
  [2, -2, 4, 4, 0.5, 1],
  [3, -3, 9, 6, 0.33, 1],
  [4, -4, 16, 8, 0.25, 1]
]

const Wrapper = () => {
  const [sw, setSwitch] = useState(true)
  return (
    <>
      <button type="button" onClick={() => setSwitch(!sw)}>
        Click!
      </button>
      <div style={{ height: 300 }}>
        <Parcoords
          data={data}
          brushed
          highlight={[[1, -1, 1, 2, 1, 1], [2, -2, 4, 4, 0.5, 1]]}
        />
      </div>
    </>
  )
}

ReactDOM.render(<Wrapper />, document.querySelector("#root"))
