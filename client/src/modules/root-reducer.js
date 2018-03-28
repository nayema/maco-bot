import * as routing from './routing'
import * as auth from './auth'
import * as pages from './pages'

export default {
  auth: auth.reducer,
  routing: routing.reducer,
  pages: pages.reducer,
}
