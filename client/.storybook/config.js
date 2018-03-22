import { configure } from '@storybook/react'

function loadStories () {
  require('../src/routes/clients/list/ClientsList.stories')
  require('../src/routes/clients/details/ClientHeader.stories')
  require('../src/routes/clients/details/ProductsList.stories')
}

configure(loadStories, module)
