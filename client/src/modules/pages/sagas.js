import { fork, all } from 'redux-saga/effects'

import * as clientList from '../client-list'
import * as clientDetails from '../client-details'

export default function * rootSaga () {
  yield all([
    fork(clientList.sagas),
    fork(clientDetails.sagas)
  ])
}
