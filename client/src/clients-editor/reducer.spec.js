import * as actionCreators from './action-creators'
import reducer from './reducer'

describe('reducer', () => {
  it('returns the initial state if not provided with a state', () => {
    const initialAction = { type: 'XXXXX' }

    const nextState = reducer(undefined, initialAction)

    expect(nextState).toEqual(expect.objectContaining({
      clients: [],
      newClient: { name: '' },
      loadingClients: false,
      clientAddingInProgress: false
    }))
  })

  describe('when loading clients', () => {
    it('starts loading', () => {
      const loadClientsStartedAction = actionCreators.loadClientsStarted()

      const nextState = reducer(undefined, loadClientsStartedAction)

      expect(nextState).toEqual(expect.objectContaining({
        loadingClients: true
      }))
    })

    it('succeeds loading', () => {
      const previousState = { clients: [], loadingClients: true }
      const clients = [{ name: 'Some Client' }]
      const loadClientsSucceededAction = actionCreators.loadClientsSucceeded(clients)

      const nextState = reducer(previousState, loadClientsSucceededAction)

      expect(nextState).toEqual(expect.objectContaining({
        clients: clients,
        loadingClients: false
      }))
    })
  })

  describe('when adding a new client', () => {
    it('changes new client name', () => {
      const previousState = { newClient: { name: '' } }
      const changeNewClientAction = actionCreators.changeNewClient('name', 'Some New Client')

      const nextState = reducer(previousState, changeNewClientAction)

      expect(nextState).toEqual(expect.objectContaining({
        newClient: { name: 'Some New Client' }
      }))
    })

    it('starts adding', () => {
      const addClientStartedAction = actionCreators.addClientStarted()

      const nextState = reducer(undefined, addClientStartedAction)

      expect(nextState).toEqual(expect.objectContaining({
        clientAddingInProgress: true
      }))
    })

    it('succeeds adding', () => {
      const previousState = { clients: [], clientAddingInProgress: true }
      const client = { name: 'Some Client' }
      const addClientSucceededAction = actionCreators.addClientSucceeded(client)

      const nextState = reducer(previousState, addClientSucceededAction)

      expect(nextState).toEqual(expect.objectContaining({
        clients: [client],
        newClient: client,
        clientAddingInProgress: false
      }))
    })
  })
})
