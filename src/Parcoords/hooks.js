import { select } from "d3-selection"
import parcoords from "parcoord-es"
import { useEffect, useState } from "react"

export function usePC(containerRef, config, dependencies = []) {
  const [pc, setPC] = useState(null)

  useEffect(() => {
    console.log("usePC")
    const container = containerRef.current
    if (container) {
      const localPC = parcoords(config)(container)

      setPC(() => localPC)

      return () => {
        select(container)
          .selectAll("*")
          .remove()
      }
    }
  }, [config, containerRef, ...dependencies]) // eslint-disable-line

  return pc
}

export function useData(pc, data) {
  useEffect(() => {
    console.log("useData")
    if (pc) {
      pc.data(data)
    }
  }, [pc, data])
}

export function useRender(pc, render, dependencies = []) {
  useEffect(() => {
    console.log("useRender")
    if (render) {
      if (pc) {
        pc.render()
        pc.createAxes()
      }
    }
  }, [pc, render, ...dependencies]) // eslint-disable-line
}

export function useMargin(pc, margin) {
  const [top, right, bottom, left] = margin

  useEffect(() => {
    console.log("useMargin")
    if (pc) {
      pc.margin({
        top,
        bottom,
        right,
        left
      })
    }
  }, [pc, top, bottom, right, left])
}

export function useQueued(pc, queued) {
  useEffect(() => {
    console.log("useQueued")
    if (pc) {
      if (queued) {
        pc.mode("queue")
      } else {
        pc.mode("default")
      }
    }
  }, [pc, queued])
}

export function useColor(pc, color) {
  useEffect(() => {
    console.log("useColor")
    if (pc) {
      pc.color(color)
    }
  }, [pc, color])
}

export function useReorderable(pc, reorderable) {
  useEffect(() => {
    console.log("useReorderable")
    if (pc) {
      if (reorderable) {
        pc.reorderable()
      }
    }
  }, [pc, reorderable])
}

export function useBrush(pc, brushed, mode, color, alpha, onBrush) {
  useEffect(() => {
    console.log("useBrush")
    if (pc) {
      if (brushed) {
        pc.brushMode(mode)
        pc.alphaOnBrushed(alpha)
        pc.brushedColor(color)
        if (onBrush) {
          pc.on("brush", sel => onBrush(sel))
        }
      } else {
        pc.brushMode("None")
      }
    }
  }, [pc, brushed, mode, color, alpha, onBrush])
}

const emptyHighlight = []
export function useHighlight(pc, highlight = emptyHighlight) {
  useEffect(() => {
    console.log("useHighlight")
    if (pc) {
      if (highlight.length > 0) {
        pc.highlight(highlight)
      } else {
        pc.unhighlight()
      }
    }
  }, [pc, highlight])
}

const noDimensions = {}
export function useDimensions(pc, dimensions = noDimensions) {
  useEffect(() => {
    console.log("useDimensions")
    if (pc) {
      pc.dimensions(dimensions)
    }
  }, [pc, dimensions])
}
