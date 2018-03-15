import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { connectRoutes } from 'redux-first-router'
import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'

import rootReducer from './modules/root-reducer'
import rootSaga from './modules/root-saga'

const sagaMiddleware = createSagaMiddleware()
const history = createHistory()

const routesMap = {
  HOME: '/'
}

const {
  reducer: routingReducer,
  middleware: routingMiddleware,
  enhancer: routingEnhancer
} = connectRoutes(history, routesMap)

const initialState = {}
const enhancers = [routingEnhancer]
const middlewares = [
  routingMiddleware,
  sagaMiddleware
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
)

const store = createStore(
  combineReducers({ location: routingReducer, ...rootReducer }),
  initialState,
  composedEnhancers,
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

sagaMiddleware.run(rootSaga)

export default store
