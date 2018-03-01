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

  describe('when adding a new client', () => {
    it('changes new client name', () => {
      const previousState = { newClient: { name: '' } }
      const changeNewClientAction = actionCreators.changeNewClient('name', 'Some New Client')

      const nextState = reducer(previousState, changeNewClientAction)

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
        newClient: client,
        clientAddingInProgress: false
      }))
    })
  })

  describe('when updating an existing client', () => {
    it('starts', () => {
      const previousState = { clients: [{ id: 999, name: 'Some Client' }] }
      const client = { id: 999 }
      const editClientAction = actionCreators.editClient(client)

      const nextState = reducer(previousState, editClientAction)

      expect(nextState).toEqual(expect.objectContaining({
        clients: [{
          id: 999,
          name: 'Some Client',
          isEditing: true,
          edit: { id: 999, name: 'Some Client' }
        }]
      }))
    })

    it('changes client name', () => {
      const previousState = { clients: [{ id: 999 }] }
      const changeEditAccountAction = actionCreators.changeEditClient(999, 'name', 'Some Edited Client')

      const nextState = reducer(previousState, changeEditAccountAction)

      expect(nextState).toEqual(expect.objectContaining({
        clients: [{
          id: 999,
          edit: { id: 999, name: 'Some Edited Client' }
        }]
      }))
    })

    it('succeeds', () => {
      const previousState = { clients: [{ id: 999, name: 'Some Client' }] }
      const client = { id: 999, name: 'Some Updated Client' }
      const updateClientSucceededAction = actionCreators.updateClientSucceeded(client)

      const nextState = reducer(previousState, updateClientSucceededAction)

      expect(nextState).toEqual(expect.objectContaining({
        clients: [{ id: 999, name: 'Some Updated Client' }]
      }))
    })

    it('cancels', () => {
      const previousState = { clients: [{ id: 999, isEditing: true }] }
      const client = { id: 999 }
      const cancelEditClientAction = actionCreators.cancelClientEdit(client)

      const nextState = reducer(previousState, cancelEditClientAction)

      expect(nextState).toEqual(expect.objectContaining({
        clients: [{ id: 999, isEditing: false }]
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
