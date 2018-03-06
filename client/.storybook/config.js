import { configure } from '@storybook/react'

function loadStories () {
  require('../src/views/clients-editor/ClientsEditor.stories')
}

configure(loadStories, module)
