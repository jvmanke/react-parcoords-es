// Module Imports
import React, { useRef } from "react"

// Relative Imports
import {
  usePC,
  useData,
  useRender,
  useMargin,
  useQueued,
  useColor,
  useReorderable,
  useBrush,
  useHighlight,
  useDimensions
} from "./hooks"
import { Container } from "./styled"
import { convertMargin } from "./utils"

function Parcoords({
  className,
  data,
  config,
  width,
  height,
  margin,
  queued = false,
  color = "#069",
  reorderable = false,
  brushed = false,
  brushMode = "1D-axes",
  brushedColor = null,
  alphaOnBrushed = 0,
  onBrush,
  highlight,
  dimensions
}) {
  const chartRef = useRef(null)

  const convMargin = convertMargin(margin)

  const pc = usePC(chartRef, config, [width, height, ...convMargin])
  useMargin(pc, convMargin)
  useQueued(pc, queued)
  useData(pc, data)
  useDimensions(pc, dimensions)
  useColor(pc, color)
  useRender(pc, true, [data, color, reorderable, ...convMargin, dimensions])
  useHighlight(pc, highlight)
  useBrush(pc, brushed, brushMode, brushedColor, alphaOnBrushed, onBrush)
  useReorderable(pc, reorderable)

  return (
    <Container
      ref={chartRef}
      className={className}
      width={typeof width === "string" || !width ? width : `${width}px`}
      height={typeof height === "string" || !height ? height : `${height}px`}
    />
  )
}

export default Parcoords
