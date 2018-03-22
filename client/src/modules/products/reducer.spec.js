import * as actionCreators from './action-creators'
import reducer from './reducer'

describe('reducer', () => {
  it('returns the initial state if not provided with a state', () => {
    const initialAction = { type: 'XXXXX' }

    const nextState = reducer(undefined, initialAction)

    expect(nextState).toEqual(expect.objectContaining({
      products: [],
      productDetails: null,
      newProduct: { name: '', clientId: null },
      loadingProducts: false,
      loadingProductDetails: false,
      productAddingInProgress: false,
      productUpdatingInProgress: false
    }))
  })

  describe('when loading products', () => {
    it('starts', () => {
      const loadProductsStartedAction = actionCreators.loadProductsStarted()

      const nextState = reducer(undefined, loadProductsStartedAction)

      expect(nextState).toEqual(expect.objectContaining({
        loadingProducts: true
      }))
    })

    it('succeeds', () => {
      const previousState = { products: [], loadingProducts: true }
      const products = [{ name: 'Some Product' }]
      const loadProductsSucceededAction = actionCreators.loadProductsSucceeded(products)

      const nextState = reducer(previousState, loadProductsSucceededAction)

      expect(nextState).toEqual(expect.objectContaining({
        products: products,
        loadingProducts: false
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

  describe('when updating an existing product', () => {
    it('starts', () => {
      const previousState = { products: [{ id: 999, name: 'Some Product' }] }
      const product = { id: 999 }
      const editProductAction = actionCreators.editProduct(product)

      const nextState = reducer(previousState, editProductAction)

      expect(nextState).toEqual(expect.objectContaining({
        products: [{
          id: 999,
          name: 'Some Product',
          isEditing: true,
          edit: { id: 999, name: 'Some Product' }
        }]
      }))
    })

    it('changes product name', () => {
      const previousState = { products: [{ id: 999 }] }
      const changeEditAccountAction = actionCreators.changeEditProduct(999, 'name', 'Some Edited Product')

      const nextState = reducer(previousState, changeEditAccountAction)

      expect(nextState).toEqual(expect.objectContaining({
        products: [{
          id: 999,
          edit: { id: 999, name: 'Some Edited Product' }
        }]
      }))
    })

    it('succeeds', () => {
      const previousState = { products: [{ id: 999, name: 'Some Product' }] }
      const product = { id: 999, name: 'Some Updated Product' }
      const updateProductSucceededAction = actionCreators.updateProductSucceeded(product)

      const nextState = reducer(previousState, updateProductSucceededAction)

      expect(nextState).toEqual(expect.objectContaining({
        products: [{ id: 999, name: 'Some Updated Product' }]
      }))
    })

    it('cancels', () => {
      const previousState = { products: [{ id: 999, isEditing: true }] }
      const product = { id: 999 }
      const cancelEditProductAction = actionCreators.cancelEditProduct(product)

      const nextState = reducer(previousState, cancelEditProductAction)

      expect(nextState).toEqual(expect.objectContaining({
        products: [{ id: 999, isEditing: false }]
      }))
    })
  })

  describe('when removing a product', () => {
    it('succeeds', () => {
      const previousState = { products: [{ id: 999 }] }
      const product = { id: 999 }
      const removeProductSuceededAction = actionCreators.removeProductSucceeded(product)

      const nextState = reducer(previousState, removeProductSuceededAction)

      expect(nextState).toEqual(expect.objectContaining({
        products: []
      }))
    })
  })
})
