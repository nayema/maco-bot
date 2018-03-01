import { configure } from '@storybook/react'

function loadStories () {
  require('../src/clients-editor/ClientsEditor.stories')
}

configure(loadStories, module)
