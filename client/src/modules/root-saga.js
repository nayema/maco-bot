import { fork, all } from 'redux-saga/effects'

import * as clientsEditor from './clients-editor/index'

export default function * rootSaga () {
  yield all([
    fork(clientsEditor.sagas)
  ])
}
