import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ClientHeader from './ClientHeader'

storiesOf('Client Header', ClientHeader)
  .add('with a client', () =>
    <ClientHeader
      client={{
        'id': 999,
        'name': 'Some Client'
      }}
      editClient={action('edit client')}
      removeClientStarted={action('remove client started')}
    />
  )
  .add('when editing', () =>
    <ClientHeader
      client={{
        'id': 999,
        'name': 'Some Client',
        'isEditing': true
      }}
      changeEditClient={action('change edit client')}
      updateClientStarted={action('update client started')}
      clientUpdatingInProgress={false}
      cancelEditClient={action('cancel edit client')}
    />
  )
  .add('when updating', () =>
    <ClientHeader
      client={{
        'id': 999,
        'name': 'Some Client',
        'isEditing': true
      }}
      changeEditClient={action('change edit client')}
      updateClientStarted={action('update client started')}
      clientUpdatingInProgress={true}
      cancelEditClient={action('cancel edit client')}
    />
  )
