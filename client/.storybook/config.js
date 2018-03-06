import { configure } from '@storybook/react'

function loadStories () {
  require('../src/modules/clients/ClientsEditor.stories')
}

configure(loadStories, module)
