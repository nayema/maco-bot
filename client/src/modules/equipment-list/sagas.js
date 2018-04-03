import { put, call, takeEvery, fork, all } from 'redux-saga/effects'

import * as actionCreators from './action-creators'
import * as actionTypes from './action-types'
import { equipmentRepository } from '../maco'
import * as auth from '../auth'
import * as routing from '../routing'

function * getAll () { // TODO: Encapsulate authentication state
  if (localStorage.getItem('idToken')) {
    yield put(actionCreators.loadEquipmentStarted())
    const equipmentList = yield call(equipmentRepository.getAll)
    yield put(actionCreators.loadEquipmentSucceeded(equipmentList))
  }
}

function * add (action) {
  const equipment = yield call(equipmentRepository.add, action.payload)
  yield put(actionCreators.addEquipmentSucceeded(equipment))
}

function * update (action) {
  yield call(equipmentRepository.update, action.payload)
  yield put(actionCreators.updateEquipmentSucceeded(action.payload))
}

function * remove (action) {
  yield call(equipmentRepository.remove, action.payload)
  yield put(actionCreators.removeEquipmentSucceeded())
  yield put(routing.actionCreators.goToEquipmentList())
}

function * watchLoginRequestSucceeded () {
  yield takeEvery(auth.actionTypes.LOGIN_REQUEST_SUCCEEDED, getAll)
}

function * watchGoToEquipmentList () {
  yield takeEvery(routing.actionTypes.GO_TO_EQUIPMENT_LIST, getAll)
}

function * watchAdd () {
  yield takeEvery(actionTypes.ADD_EQUIPMENT_STARTED, add)
}

function * watchUpdate () {
  yield takeEvery(actionTypes.UPDATE_EQUIPMENT_STARTED, update)
}

function * watchRemove () {
  yield takeEvery(actionTypes.REMOVE_EQUIPMENT_STARTED, remove)
}

function * sagas () {
  yield all([
    fork(watchLoginRequestSucceeded),
    fork(watchGoToEquipmentList),
    fork(watchAdd),
    fork(watchUpdate),
    fork(watchRemove)
  ])
}

export default sagas
