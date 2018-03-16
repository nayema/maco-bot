import { connectRoutes } from 'redux-first-router'

import * as actionTypes from './action-types'

const routesMap = {
  [actionTypes.GO_TO_HOME]: '/',
  [actionTypes.GO_TO_CLIENTS_LIST]: '/clients',
  [actionTypes.GO_TO_CLIENT_DETAILS]: '/clients/:id'
}

function routes (history) {
  const {
    enhancer: routingEnhancer,
    middleware: routingMiddleware,
    reducer: routingReducer
  } = connectRoutes(history, routesMap)
  return { routingEnhancer, routingMiddleware, routingReducer }
}

export default routes
