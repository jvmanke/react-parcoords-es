// Module Imports
import React, { useRef } from "react"

// Relative Imports
import { usePC, useData, useRender } from "./hooks"
import { Container } from "./styled"

function Parcoords({ className, data }) {
  const chartRef = useRef(null)

  const pc = usePC(chartRef)
  useData(pc, data)
  useRender(pc, true, [data])

  return <Container ref={chartRef} className={className} />
}

export default Parcoords
