import * as actionCreators from './action-creators'
import reducer from './reducer'

describe('reducer', () => {
  it('returns the initial state if not provided with a state', () => {
    const initialAction = { type: 'XXXXX' }

    const nextState = reducer(undefined, initialAction)

    expect(nextState).toEqual(expect.objectContaining({
      product: null,
      apiList: [],
      loadingProduct: false,
      productUpdatingInProgress: false,
      newSelectApi: { id: '' },
      apiAddingInProgress: false
    }))
  })

  describe('when loading product details', () => {
    it('starts', () => {
      const loadProductStartedAction = actionCreators.loadProductStarted()

      const nextState = reducer(undefined, loadProductStartedAction)

      expect(nextState).toEqual(expect.objectContaining({
        loadingProduct: true
      }))
    })

    it('succeeds', () => {
      const previousState = { product: '', loadingProduct: true }
      const product = { name: 'Some Product', clientId: 999 }
      const apiList = [{ name: 'Some API' }]
      const loadProductSucceededAction = actionCreators.loadProductSucceeded(product, apiList)

      const nextState = reducer(previousState, loadProductSucceededAction)

      expect(nextState).toEqual(expect.objectContaining({
        product: product,
        apiList: apiList,
        loadingProduct: false
      }))
    })
  })

  describe('when updating an existing product', () => {
    it('starts editing', () => {
      const previousState = {
        product: {
          id: 999,
          name: 'Some Product',
          clientId: 777,
          isEditing: false
        }
      }
      const editProductAction = actionCreators.editProduct()

      const nextState = reducer(previousState, editProductAction)

      expect(nextState).toEqual(expect.objectContaining({
        product: {
          id: 999,
          name: 'Some Product',
          clientId: 777,
          isEditing: true
        }
      }))
    })

    it('cancels editing', () => {
      const previousState = { product: { id: 999, isEditing: true } }
      const cancelEditProductAction = actionCreators.cancelEditProduct()

      const nextState = reducer(previousState, cancelEditProductAction)

      expect(nextState).toEqual(expect.objectContaining({
        product: { id: 999, isEditing: false }
      }))
    })

    it('starts updating', () => {
      const updateProductStartedAction = actionCreators.updateProductStarted('Some Edited Product')

      const nextState = reducer(undefined, updateProductStartedAction)

      expect(nextState).toEqual(expect.objectContaining({
        productUpdatingInProgress: true
      }))
    })

    it('succeeds updating', () => {
      const previousState = {
        productUpdatingInProgress: true
      }
      const updateProductSucceededAction = actionCreators.updateProductSucceeded()

      const nextState = reducer(previousState, updateProductSucceededAction)

      expect(nextState).toEqual(expect.objectContaining({
        productUpdatingInProgress: false
      }))
    })
  })

  describe('when removing a product', () => {
    it('succeeds', () => {
      const previousState = { product: { id: 999 } }
      const removeProductSuceededAction = actionCreators.removeProductSucceeded()

      const nextState = reducer(previousState, removeProductSuceededAction)

      expect(nextState).toEqual(expect.objectContaining({
        product: null
      }))
    })
  })

  describe('when adding an existing api', () => {
    it('changes new api name', () => {
      const changeNewApiAction = actionCreators.changeNewApi('id', 999)

      const nextState = reducer(undefined, changeNewApiAction)

      expect(nextState).toEqual(expect.objectContaining({
        newSelectApi: expect.objectContaining({ id: 999 })
      }))
    })

    it('starts', () => {
      const addApiStartedAction = actionCreators.addApiStarted()

      const nextState = reducer(undefined, addApiStartedAction)

      expect(nextState).toEqual(expect.objectContaining({
        apiAddingInProgress: true
      }))
    })

    it('succeeds', () => {
      const previousState = { product: { apis: [] }, apiAddingInProgress: true, apiList: [{ 'id': 999 }]}
      const api = { id: 999 }
      const addApiSucceededAction = actionCreators.addApiSucceeded(api)

      const nextState = reducer(previousState, addApiSucceededAction)

      expect(nextState).toEqual(expect.objectContaining({
        product: { apis: [api] },
        newSelectApi: { id: '' },
        apiAddingInProgress: false
      }))
    })
  })
})
