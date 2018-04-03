import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ClientEditor from './ClientEditor'

storiesOf('Client Editor', ClientEditor)
  .add('with a client', () =>
    <ClientEditor
      client={{
        'id': 999,
        'name': 'Some Client'
      }}
      editClient={action('edit client')}
      removeClientStarted={action('remove client started')}
    />
  )
  .add('when editing', () =>
    <ClientEditor
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
    <ClientEditor
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
