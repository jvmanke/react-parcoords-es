export function validateMargin(margin = {}) {
  let { top = 24, bottom = 12, right = 20, left = 20 } = margin

  if (typeof margin === "number") {
    top = margin
    bottom = margin
    right = margin
    left = margin
  } else if (Array.isArray(margin)) {
    if (margin.length > 3) {
      top = margin[0] || top
      bottom = margin[2] || bottom
      right = margin[1] || right
      left = margin[3] || left
    } else if (margin.length > 1) {
      top = margin[0] || top
      bottom = margin[0] || bottom
      right = margin[1] || right
      left = margin[1] || left
    } else if (margin.length > 0) {
      top = margin[0] || top
      bottom = margin[0] || bottom
      right = margin[0] || right
      left = margin[0] || left
    }
  }

  return [top, right, bottom, left]
}

export function validateDimensions(dimensions, data) {
  if (!Array.isArray(data[0])) {
    return dimensions
  }
}
