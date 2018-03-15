import * as auth from './auth'
import * as clients from './clients'
import * as products from './products'
import * as configurationTabs from './configuration-tabs'

export default {
  auth: auth.reducer,
  clients: clients.reducer,
  products: products.reducer,
  configurationTabs: configurationTabs.reducer
}
