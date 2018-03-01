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
        loadingClients: false,
        clients: clients
      }))
    })
  })
})
