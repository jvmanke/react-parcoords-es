// Module Imports
import React from "react"
import { action } from "@storybook/addon-actions"
import {
  withKnobs,
  number,
  color,
  object,
  boolean
} from "@storybook/addon-knobs"
import { storiesOf } from "@storybook/react"

// Relative Imports
import Parcoords from "./Parcoords"

const data = []
for (let i = 0; i < 1000; i++) {
  data.push({
    a: Math.random() * 4,
    b: Math.random() * 5 - 2.5,
    c: Math.random() * -3
  })
}

const stories = storiesOf("Parcoords", module)

stories.addDecorator(withKnobs).add("css Styles", () => (
  <Parcoords
    data={data.slice(0, 10)}
    width={number("width", 500)}
    height={number("height", 300)}
    axisTitleColor={color("axisTitleColor", "black")}
    background={color("background", "white")}
    margin={object("margin", {
      top: 24,
      bottom: 12,
      left: 20,
      right: 20
    })}
  />
))

stories.addDecorator(withKnobs).add(
  "responsive",
  () => {
    const width = number("Parent Width", 500)
    const height = number("Parent, Height", 300)
    return (
      <div
        style={{
          display: "inline-block",
          width,
          height
        }}
      >
        <Parcoords data={data.slice(0, 20)} watch={[width, height]} />
      </div>
    )
  },
  {
    notes:
      "In this example we are only controlling the size of the parent component"
  }
)

stories
  .addDecorator(withKnobs)
  .add("queuing", () => (
    <Parcoords
      width={500}
      height={300}
      data={data}
      brushed
      queued={boolean("queued", true)}
    />
  ))
