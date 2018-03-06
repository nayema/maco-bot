import { configure } from '@storybook/react'

function loadStories () {
  require('../src/views/configuration-tabs/clients-editor/ClientsEditor.stories')
}

configure(loadStories, module)
