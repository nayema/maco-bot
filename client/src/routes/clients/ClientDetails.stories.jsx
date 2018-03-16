import React from 'react'

import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'

import ClientDetails from './ClientDetails'

storiesOf('Client Details', ClientDetails)
  .add('with a client', () =>
    <ClientDetails
      client={{
        'id': 999,
        'name': 'Some Client'
      }}
      loadingClientDetails={false}
    />
  )
