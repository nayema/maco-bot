import { configure } from '@storybook/react'

function loadStories () {
  require('../src/routes/client-details/ClientEditor.stories')
  require('../src/routes/client-list/ClientsList.stories')
  require('../src/routes/product-details/ProductEditor.stories')
  // require('../src/routes/equipment-list/EquipmentList.stories')
}

configure(loadStories, module)
