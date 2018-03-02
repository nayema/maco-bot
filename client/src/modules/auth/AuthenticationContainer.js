import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actionCreators from './action-creators'
import Authentication from './Authentication'

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loginRequestStarted: actionCreators.loginRequestStarted,
  logoutRequestStarted: actionCreators.logoutRequestStarted
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Authentication)
