import { configure } from '@storybook/react'

function loadStories () {
  require('../src/routes/clients/ClientsList.stories')
}

configure(loadStories, module)
