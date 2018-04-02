import { put, call, takeEvery, fork, all } from 'redux-saga/effects'

import * as actionCreators from './action-creators'
import * as actionTypes from './action-types'
import { clientRepository } from '../maco'
import * as auth from '../auth'
import * as routing from '../routing'

function * getAll () { // TODO: Encapsulate authentication state
  if (localStorage.getItem('idToken')) {
    yield put(actionCreators.loadClientsStarted())
    const clients = yield call(clientRepository.getAll)
    yield put(actionCreators.loadClientsSucceeded(clients))
  }
}

function * add (action) {
  const client = yield call(clientRepository.add, action.payload)
  yield put(actionCreators.addClientSucceeded(client))
}

function * watchLoginRequestSucceeded () {
  yield takeEvery(auth.actionTypes.LOGIN_REQUEST_SUCCEEDED, getAll)
}

function * watchGoToClientsList () {
  yield takeEvery(routing.actionTypes.GO_TO_CLIENTS_LIST, getAll)
}

function * watchAdd () {
  yield takeEvery(actionTypes.ADD_CLIENT_STARTED, add)
}

function * sagas () {
  yield all([
    fork(watchLoginRequestSucceeded),
    fork(watchGoToClientsList),
    fork(watchAdd)
  ])
}

export default sagas
