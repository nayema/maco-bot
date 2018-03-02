import { configure } from '@storybook/react'

function loadStories () {
  require('../src/modules/clients-editor/ClientsEditor.stories')
}

configure(loadStories, module)
