import { configure } from '@storybook/react'

function loadStories () {
  require('../src/modules/maco/clients/ClientsEditor.stories')
}

configure(loadStories, module)
