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
import { validateMargin, validateDimensions } from "./utils"

function Parcoords({
  className,
  data,
  dimensions,

  width,
  height,
  margin,

  config,

  queued = false,
  reorderable = false,
  brushed = false,
  brushMode = "1D-axes",
  onBrush,

  color = "#069",
  brushedColor = null,
  alphaOnBrushed = 0,

  highlight
}) {
  const chartRef = useRef(null)

  const valMargin = validateMargin(margin)
  const valDimensions = validateDimensions(dimensions, data)

  const pc = usePC(chartRef, config, [width, height, ...valMargin])

  useMargin(pc, valMargin)

  useQueued(pc, queued)
  useData(pc, data)
  useDimensions(pc, valDimensions)

  useColor(pc, color)
  useRender(pc, true, [data, color, reorderable, ...valMargin, dimensions])

  useBrush(pc, brushed, brushMode, brushedColor, alphaOnBrushed, onBrush)
  useHighlight(pc, highlight)
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
