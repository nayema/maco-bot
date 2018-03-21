import * as actionCreators from './action-creators'
import reducer from './reducer'

describe('reducer', () => {
  it('returns the initial state if not provided with a state', () => {
    const initialAction = { type: 'XXXXX' }

    const nextState = reducer(undefined, initialAction)

    expect(nextState).toEqual(expect.objectContaining({
      clients: [],
      clientDetails: null,
      newClient: { name: '' },
      loadingClients: false,
      loadingClientDetails: false,
      clientAddingInProgress: false
    }))
  })

  describe('when loading clients', () => {
    it('starts', () => {
      const loadClientsStartedAction = actionCreators.loadClientsStarted()

      const nextState = reducer(undefined, loadClientsStartedAction)

      expect(nextState).toEqual(expect.objectContaining({
        loadingClients: true
      }))
    })

    it('succeeds', () => {
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

  describe('when loading client details', () => {
    it('starts', () => {
      const loadClientDetailsStartedAction = actionCreators.loadClientDetailsStarted()

      const nextState = reducer(undefined, loadClientDetailsStartedAction)

      expect(nextState).toEqual(expect.objectContaining({
        loadingClientDetails: true
      }))
    })

    it('succeeds', () => {
      const previousState = { clientDetails: null, loadingClientDetails: true }
      const client = { name: 'Some Client' }
      const loadClientDetailsSucceededAction = actionCreators.loadClientDetailsSucceeded(client)

      const nextState = reducer(previousState, loadClientDetailsSucceededAction)

      expect(nextState).toEqual(expect.objectContaining({
        clientDetails: client,
        loadingClientDetails: false
      }))
    })
  })

  describe('when adding a new client', () => {
    it('changes new client name', () => {
      const changeNewClientAction = actionCreators.changeNewClient('name', 'Some New Client')

      const nextState = reducer(undefined, changeNewClientAction)

      expect(nextState).toEqual(expect.objectContaining({
        newClient: { name: 'Some New Client' }
      }))
    })

    it('starts', () => {
      const addClientStartedAction = actionCreators.addClientStarted()

      const nextState = reducer(undefined, addClientStartedAction)

      expect(nextState).toEqual(expect.objectContaining({
        clientAddingInProgress: true
      }))
    })

    it('succeeds', () => {
      const previousState = { clients: [], clientAddingInProgress: true }
      const client = { name: 'Some Client' }
      const addClientSucceededAction = actionCreators.addClientSucceeded(client)

      const nextState = reducer(previousState, addClientSucceededAction)

      expect(nextState).toEqual(expect.objectContaining({
        clients: [client],
        newClient: { name: '' },
        clientAddingInProgress: false
      }))
    })
  })

  describe('when updating an existing client', () => {
    it('starts editing', () => {
      const previousState = { clientDetails: { id: 999, name: 'Some Client', isEditing: false } }
      const editClientAction = actionCreators.editClient()

      const nextState = reducer(previousState, editClientAction)

      expect(nextState).toEqual(expect.objectContaining({
        clientDetails: { id: 999, name: 'Some Client', isEditing: true }
      }))
    })

    it('cancels editing', () => {
      const previousState = { clientDetails: { id: 999, isEditing: true } }
      const cancelEditClientAction = actionCreators.cancelEditClient()

      const nextState = reducer(previousState, cancelEditClientAction)

      expect(nextState).toEqual(expect.objectContaining({
        clientDetails: { id: 999, isEditing: false }
      }))
    })

    it('starts updating', () => {
      const updateClientStartedAction = actionCreators.updateClientStarted('Some Edited Client')

      const nextState = reducer(undefined, updateClientStartedAction)

      expect(nextState).toEqual(expect.objectContaining({
        clientUpdatingInProgress: true
      }))
    })

    it('succeeds updating', () => {
      const previousState = {
        clientDetails: { id: 999, name: 'Some Client', isEditing: false },
        clientUpdatingInProgress: true
      }
      const updateClientSucceededAction = actionCreators.updateClientSucceeded()

      const nextState = reducer(previousState, updateClientSucceededAction)

      expect(nextState).toEqual(expect.objectContaining({
        clientDetails: { id: 999, name: 'Some Client', isEditing: false },
        clientUpdatingInProgress: false
      }))
    })
  })

  describe('when removing a client', () => {
    it('succeeds', () => {
      const previousState = { clients: [{ id: 999 }] }
      const client = { id: 999 }
      const removeClientSuceededAction = actionCreators.removeClientSucceeded(client)

      const nextState = reducer(previousState, removeClientSuceededAction)

      expect(nextState).toEqual(expect.objectContaining({
        clients: []
      }))
    })
  })
})
