import { put, call, takeEvery, fork, all } from 'redux-saga/effects'

import * as actionCreators from './action-creators'
import { apiRepository } from '../maco'
import * as routing from '../routing'
import * as actionTypes from '../api-details/action-types'

function * getDetails (action) {
  yield put(actionCreators.loadApiStarted())
  const api = yield call(apiRepository.getDetails, action.payload)
  yield put(actionCreators.loadApiSucceeded(api))
}

function * updateApi (action) {
  yield call(apiRepository.update, action.payload)
  yield put(actionCreators.updateApiSucceeded(action.payload))
}

function * removeApi (action) {
  yield call(apiRepository.remove, action.payload)
  yield put(actionCreators.removeApiSucceeded())
  yield put(routing.actionCreators.goToApisList()) // TODO: Change route to go back to previous page
}

function * watchGoToApiDetails () {
  yield takeEvery(routing.actionTypes.GO_TO_API_DETAILS, getDetails)
}

function * watchUpdate () {
  yield takeEvery(actionTypes.UPDATE_API_STARTED, updateApi)
}

function * watchRemove () {
  yield takeEvery(actionTypes.REMOVE_API_STARTED, removeApi)
}

function * sagas () {
  yield all([
    fork(watchGoToApiDetails),
    fork(watchUpdate),
    fork(watchRemove)
  ])
}

export default sagas
