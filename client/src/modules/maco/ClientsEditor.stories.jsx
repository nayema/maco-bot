import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ClientsEditor from './ClientsEditor'

storiesOf('Clients List', ClientsEditor)
  .add('with no clients', () =>
    <ClientsEditor
      newClient={{ 'name': '' }}
      clients={[]}
    />
  )
  .add('with loading all clients', () =>
    <ClientsEditor
      newClient={{ 'name': '' }}
      clients={[{
        'id': 999,
        'name': 'Some Client'
      }]}
      loadingClients={true}
      addClientStarted={action('add client started')}
      changeNewClient={action('change new client')}
      editClient={action('edit client')}
      changeEditClient={action('change edit client')}
      cancelEditClient={action('cancel edit client')}
      removeClientStarted={action('remove client started')}
    />
  )
  .add('with adding a new client', () =>
    <ClientsEditor
      newClient={{
        'id': 777,
        'name': 'Some New Client'
      }}
      clients={[{
        'id': 999,
        'name': 'Some Client',
        'isEditing': true
      }]}
      clientAddingInProgress={true}
      addClientStarted={action('add client started')}
      changeNewClient={action('change new client')}
      editClient={action('edit client')}
      changeEditClient={action('change edit client')}
      cancelEditClient={action('cancel edit client')}
      updateClientStarted={action('update client started')}
    />
  )
  .add('with editing an existing client', () =>
    <ClientsEditor
      newClient={{ 'name': '' }}
      clients={[{
        'id': 999,
        'name': 'Some Client',
        'isEditing': true
      }]}
      changeNewClient={action('change new client')}
      addClientStarted={action('add client started')}
      editClient={action('edit client')}
      changeEditClient={action('change edit client')}
      cancelEditClient={action('cancel edit client')}
      updateClientStarted={action('update client started')}
      removeClientStarted={action('remove client started')}
    />
  )
