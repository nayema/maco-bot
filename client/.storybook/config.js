import { configure } from '@storybook/react'

function loadStories () {
  require('../src/modules/maco/ClientsEditor.stories')
}

configure(loadStories, module)
