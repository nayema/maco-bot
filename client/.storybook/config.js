import { configure } from '@storybook/react'

function loadStories () {
  require('../src/routes/clients-editor/ClientsEditor.stories')
}

configure(loadStories, module)
