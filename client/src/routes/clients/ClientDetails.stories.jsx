import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ClientDetails from './ClientDetails'

storiesOf('Client Details', ClientDetails)
  .add('when loading', () =>
    <ClientDetails
      client={null}
      loadingClientDetails={true}
    />
  )
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
  .add('when editing', () =>
    <ClientDetails
      client={{
        'id': 999,
        'name': 'Some Client',
        'isEditing': true
      }}
      loadingClientDetails={false}
      changeEditClient={action('change edit client')}
      updateClientStarted={action('update client started')}
      clientUpdatingInProgress={false}
      cancelEditClient={action('cancel edit client')}
    />
  )
  .add('when updating', () =>
    <ClientDetails
      client={{
        'id': 999,
        'name': 'Some Client',
        'isEditing': true
      }}
      loadingClientDetails={false}
      changeEditClient={action('change edit client')}
      updateClientStarted={action('update client started')}
      clientUpdatingInProgress={true}
      cancelEditClient={action('cancel edit client')}
    />
  )
