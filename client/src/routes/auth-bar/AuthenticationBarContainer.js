import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as auth from '../../modules/auth'
import Authentication from './Authentication'

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loginRequestStarted: auth.actionCreators.loginRequestStarted,
  logoutRequestStarted: auth.actionCreators.logoutRequestStarted
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Authentication)
