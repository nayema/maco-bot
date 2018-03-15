import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'

import rootReducer from './modules/root-reducer'
import rootSaga from './modules/root-saga'
import * as routing from './modules/routing'

const sagaMiddleware = createSagaMiddleware()
const history = createHistory()

const { routingEnhancer, routingMiddleware, routingReducer } = routing.routes(history)

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
