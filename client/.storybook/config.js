import { configure } from '@storybook/react'

function loadStories () {
  require('../src/routes/clients/ClientsList.stories')
  require('../src/routes/clients/ClientDetails.stories')
}

configure(loadStories, module)
