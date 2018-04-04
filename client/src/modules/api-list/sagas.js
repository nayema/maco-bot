import { put, call, takeEvery, fork, all } from 'redux-saga/effects'

import * as actionCreators from './action-creators'
import * as actionTypes from './action-types'
import { apiRepository } from '../maco'
import * as auth from '../auth'
import * as routing from '../routing'

function * getAll () { // TODO: Encapsulate authentication state
  if (localStorage.getItem('idToken')) {
    yield put(actionCreators.loadApiListStarted())
    const apiList = yield call(apiRepository.getAll)
    yield put(actionCreators.loadApiListSucceeded(apiList))
  }
}

function * add (action) {
  const api = yield call(apiRepository.add, action.payload)
  yield put(actionCreators.addApiSucceeded(api))
}

function * update (action) {
  yield call(apiRepository.update, action.payload)
  yield put(actionCreators.updateApiSucceeded(action.payload))
}

function * remove (action) {
  yield call(apiRepository.remove, action.payload)
  yield put(actionCreators.removeApiSucceeded())
  yield put(routing.actionCreators.goToApisList())
}

function * watchLoginRequestSucceeded () {
  yield takeEvery(auth.actionTypes.LOGIN_REQUEST_SUCCEEDED, getAll)
}

function * watchGoToApiList () {
  yield takeEvery(routing.actionTypes.GO_TO_APIS_LIST, getAll)
}

function * watchAdd () {
  yield takeEvery(actionTypes.ADD_API_STARTED, add)
}

function * watchUpdate () {
  yield takeEvery(actionTypes.UPDATE_API_STARTED, update)
}

function * watchRemove () {
  yield takeEvery(actionTypes.REMOVE_API_STARTED, remove)
}

function * sagas () {
  yield all([
    fork(watchLoginRequestSucceeded),
    fork(watchGoToApiList),
    fork(watchAdd),
    fork(watchUpdate),
    fork(watchRemove)
  ])
}

export default sagas
