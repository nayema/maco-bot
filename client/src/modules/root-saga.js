import { fork, all } from 'redux-saga/effects'

import * as auth from './auth'
import * as maco from './maco'

export default function * rootSaga () {
  yield all([
    fork(auth.sagas),
    fork(maco.sagas)
  ])
}
