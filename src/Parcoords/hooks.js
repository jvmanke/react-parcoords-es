import { select } from "d3-selection"
import parcoords from "parcoord-es"
import { useEffect, useState } from "react"

export function usePC(containerRef, config = {}, event = () => {}) {
  const [pc, setPC] = useState(null)

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      const localPC = parcoords(config)(container)

      setPC(() => localPC)
      event(localPC)

      return () => {
        select(container)
          .selectAll("*")
          .remove()
      }
    }
  }, [config, containerRef]) // eslint-disable-line

  return pc
}

export function useData(pc, data) {
  useEffect(() => {
    if (pc) {
      pc.data(data)
    }
  }, [pc, data])
}

export function useRender(pc, render, dependencies = []) {
  useEffect(() => {
    if (render) {
      if (pc) {
        pc.render()
        pc.createAxes()
      }
    }
  }, [pc, render, ...dependencies]) // eslint-disable-line
}
