import { configure } from '@storybook/react'

function loadStories () {
  require('../src/routes/client-details/ClientHeader.stories')
  require('../src/routes/client-list/ClientsList.stories')
  require('../src/routes/product-details/ProductHeader.stories')
}

configure(loadStories, module)
