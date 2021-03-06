import { connectRoutes } from 'redux-first-router'

import * as actionTypes from './action-types'

const routesMap = {
  [actionTypes.HANDLE_AUTH_CALLBACK]: '/callback',
  [actionTypes.GO_TO_HOME]: '/',
  [actionTypes.GO_TO_CLIENTS_LIST]: '/clients',
  [actionTypes.GO_TO_CLIENT_DETAILS]: '/clients/:id',
  [actionTypes.GO_TO_PRODUCT_DETAILS]: '/products/:id',
  [actionTypes.GO_TO_EQUIPMENT_LIST]: '/equipment',
  [actionTypes.GO_TO_APIS_LIST]: '/apis',
  [actionTypes.GO_TO_API_DETAILS]: '/apis/:id'
}

function routes (history) {
  const {
    enhancer: routingEnhancer,
    middleware: routingMiddleware,
    reducer: routingReducer,
    initialDispatch
  } = connectRoutes(history, routesMap, { initialDispatch: false })
  return { routingEnhancer, routingMiddleware, routingReducer, initialDispatch }
}

export default routes
