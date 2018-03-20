import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ClientDetails from './ClientDetails'

storiesOf('Client Details', ClientDetails)
  .add('with a client', () =>
    <ClientDetails
      client={{
        'id': 999,
        'name': 'Some Client'
      }}
      loadingClientDetails={false}
      editClient={action('edit client')}
      removeClientStarted={action('remove client started')}
    />
  )
  .add('with loading client details', () =>
    <ClientDetails
      client={{
        'id': 999,
        'name': 'Some Client',
        'isEditing': false
      }}
      loadingClientDetails={true}
      editClient={action('edit client')}
      removeClientStarted={action('remove client started')}
    />
  )
  .add('with editing client details', () =>
    <ClientDetails
      client={{
        'id': 999,
        'name': 'Some Client',
        'isEditing': true
      }}
      loadingClientDetails={false}
      changeEditClient={action('change edit client')}
      updateClientStarted={action('update client started')}
      cancelEditClient={action('cancel edit client')}
    />
  )
