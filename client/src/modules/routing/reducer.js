import { handleActions } from 'redux-actions'
import { NOT_FOUND } from 'redux-first-router'

import * as actionTypes from './action-types'

const initialState = {
  page: 'home'
}

const reducer = handleActions({
  [NOT_FOUND]: () => ({
    page: 'notFound'
  }),
  [actionTypes.GO_TO_HOME]: () => ({
    page: 'home'
  }),
  [actionTypes.GO_TO_CLIENTS_LIST]: () => ({
    page: 'clientList'
  }),
  [actionTypes.GO_TO_CLIENT_DETAILS]: () => ({
    page: 'clientDetails'
  }),
  [actionTypes.GO_TO_PRODUCT_DETAILS]: () => ({
    page: 'productDetails'
  }),
  [actionTypes.GO_TO_EQUIPMENT_LIST]: () => ({
    page: 'equipmentList'
  }),
  [actionTypes.GO_TO_APIS_LIST]: () => ({
    page: 'apiList'
  })
}, initialState)

export default reducer
