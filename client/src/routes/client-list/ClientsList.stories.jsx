import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ClientsList from './ClientsList'

const Link = ({ children }) => <a>{children}</a>

storiesOf('Clients List', ClientsList)
  .add('with no clients', () =>
    <ClientsList
      newClient={{ 'name': '' }}
      clients={[]}
    />
  )
  .add('with loading all clients', () =>
    <ClientsList
      newClient={{ 'name': '' }}
      clients={[{
        'id': 999,
        'name': 'Some Client'
      }]}
      loadingClients={true}
      addClientStarted={action('add client started')}
      changeNewClient={action('change new client')}
      Link={Link}
    />
  )
  .add('with adding a new client', () =>
    <ClientsList
      newClient={{
        'id': 777,
        'name': 'Some New Client'
      }}
      clients={[{
        'id': 999,
        'name': 'Some Client'
      }]}
      clientAddingInProgress={true}
      addClientStarted={action('add client started')}
      changeNewClient={action('change new client')}
      Link={Link}
    />
  )
