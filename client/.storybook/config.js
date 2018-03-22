import { configure } from '@storybook/react'

function loadStories () {
  require('../src/routes/clients-list/ClientsList.stories')
  require('../src/routes/client-details/ClientHeader.stories')
  require('../src/routes/client-details/ProductsList.stories')
}

configure(loadStories, module)
