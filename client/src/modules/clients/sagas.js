import { put, call, takeEvery, fork, all } from 'redux-saga/effects'

import * as actionCreators from './action-creators'
import * as actionTypes from './action-types'
import * as repository from './repository'
import * as auth from '../auth'
import * as routing from '../routing'

function * getAll () { // TODO: Encapsulate authentication state
  if (localStorage.getItem('idToken')) {
    yield put(actionCreators.loadClientsStarted())
    const clients = yield call(repository.getAll)
    yield put(actionCreators.loadClientsSucceeded(clients))
  }
}

function * getDetails (action) {
  yield put(actionCreators.loadClientDetailsStarted())
  const clientDetails = yield call(repository.getDetails, action.payload)
  yield put(actionCreators.loadClientDetailsSucceeded(clientDetails))
}

function * add (action) {
  const client = yield call(repository.add, action.payload)
  yield put(actionCreators.addClientSucceeded(client))
}

function * update (action) {
  yield call(repository.update, action.payload)
  yield put(actionCreators.updateClientSucceeded(action.payload))
}

function * remove (action) {
  yield call(repository.remove, action.payload)
  yield put(routing.actionCreators.goToClientsList())
}

function * watchLoginRequestSucceeded () {
  yield takeEvery(auth.actionTypes.LOGIN_REQUEST_SUCCEEDED, getAll)
}

function * watchGoToClientsList () {
  yield takeEvery(routing.actionTypes.GO_TO_CLIENTS_LIST, getAll)
}

function * watchGoToClientDetails () {
  yield takeEvery(routing.actionTypes.GO_TO_CLIENT_DETAILS, getDetails)
}

function * watchAdd () {
  yield takeEvery(actionTypes.ADD_CLIENT_STARTED, add)
}

function * watchUpdate () {
  yield takeEvery(actionTypes.UPDATE_CLIENT_STARTED, update)
}

function * watchRemove () {
  yield takeEvery(actionTypes.REMOVE_CLIENT_STARTED, remove)
}

function * sagas () {
  yield all([
    fork(watchLoginRequestSucceeded),
    fork(watchGoToClientsList),
    fork(watchGoToClientDetails),
    fork(watchAdd),
    fork(watchUpdate),
    fork(watchRemove)
  ])
}

export default sagas
