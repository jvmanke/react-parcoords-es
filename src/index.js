// Module Imports
import React, { useState } from "react"
import ReactDOM from "react-dom"

// Relative Imports
import Parcoords from "./Parcoords"
const data = [
  { name: 0, protein: -0 },
  { name: 1, protein: -1 },
  { name: 2, protein: -2 },
  { name: 3, protein: -3 },
  { name: 4, protein: -4 }
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
          dimensions={
            sw
              ? {
                  name: {
                    title: "NAME"
                  },
                  protein: {}
                }
              : undefined
          }
        />
      </div>
    </>
  )
}

ReactDOM.render(<Wrapper />, document.querySelector("#root"))
