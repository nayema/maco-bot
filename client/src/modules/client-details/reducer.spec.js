import * as actionCreators from './action-creators'
import reducer from './reducer'

describe('reducer', () => {
  it('returns the initial state if not provided with a state', () => {
    const initialAction = { type: 'XXXXX' }

    const nextState = reducer(undefined, initialAction)

    expect(nextState).toEqual({
      client: null,
      loadingClient: false,
      clientUpdatingInProgress: false,
      products: [],
      newProduct: { name: '', clientId: null },
      productAddingInProgress: false
    })
  })

  describe('when loading client details', () => {
    it('starts', () => {
      const loadClientStartedAction = actionCreators.loadClientStarted()

      const nextState = reducer(undefined, loadClientStartedAction)

      expect(nextState).toEqual(expect.objectContaining({
        loadingClient: true
      }))
    })

    it('succeeds', () => {
      const previousState = { client: null, loadingClient: true }
      const client = { name: 'Some Client' }
      const products = [{ name: 'Some Product' }]
      const loadClientSucceededAction = actionCreators.loadClientSucceeded(client, products)

      const nextState = reducer(previousState, loadClientSucceededAction)

      expect(nextState).toEqual(expect.objectContaining({
        client: client,
        products: products,
        loadingClient: false
      }))
    })
  })

  describe('when updating an existing client', () => {
    it('starts editing', () => {
      const previousState = { client: { id: 999, name: 'Some Client', isEditing: false } }
      const editClientAction = actionCreators.editClient()

      const nextState = reducer(previousState, editClientAction)

      expect(nextState).toEqual(expect.objectContaining({
        client: { id: 999, name: 'Some Client', isEditing: true }
      }))
    })

    it('cancels editing', () => {
      const previousState = { client: { id: 999, isEditing: true } }
      const cancelEditClientAction = actionCreators.cancelEditClient()

      const nextState = reducer(previousState, cancelEditClientAction)

      expect(nextState).toEqual(expect.objectContaining({
        client: { id: 999, isEditing: false }
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
        clientUpdatingInProgress: true
      }
      const updateClientSucceededAction = actionCreators.updateClientSucceeded()

      const nextState = reducer(previousState, updateClientSucceededAction)

      expect(nextState).toEqual(expect.objectContaining({
        clientUpdatingInProgress: false
      }))
    })
  })

  describe('when removing a client', () => {
    it('succeeds', () => {
      const previousState = { client: { id: 999 } }
      const removeClientSuceededAction = actionCreators.removeClientSucceeded()

      const nextState = reducer(previousState, removeClientSuceededAction)

      expect(nextState).toEqual(expect.objectContaining({
        client: {}
      }))
    })
  })

  describe('when adding a new product', () => {
    it('changes new product name', () => {
      const changeNewProductAction = actionCreators.changeNewProduct('name', 'Some New Product')

      const nextState = reducer(undefined, changeNewProductAction)

      expect(nextState).toEqual(expect.objectContaining({
        newProduct: expect.objectContaining({ name: 'Some New Product' })
      }))
    })

    it('starts', () => {
      const addProductStartedAction = actionCreators.addProductStarted()

      const nextState = reducer(undefined, addProductStartedAction)

      expect(nextState).toEqual(expect.objectContaining({
        productAddingInProgress: true
      }))
    })

    it('succeeds', () => {
      const previousState = { products: [], productAddingInProgress: true }
      const product = { name: 'Some Product' }
      const addProductSucceededAction = actionCreators.addProductSucceeded(product)

      const nextState = reducer(previousState, addProductSucceededAction)

      expect(nextState).toEqual(expect.objectContaining({
        products: [product],
        newProduct: { name: '', clientId: null },
        productAddingInProgress: false
      }))
    })
  })
})
