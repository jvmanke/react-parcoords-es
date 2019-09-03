import { configure } from "@storybook/react"

function loadStories() {
  require("../src/Parcoords/Parcoords.story.js")
}

configure(loadStories, module)
