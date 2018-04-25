import { connect } from 'react-redux'

import ApiHeader from './ApiHeader'

const mapStateToProps = (state) => ({
  api: state.pages.apiDetails.api
})

export default connect(mapStateToProps)(ApiHeader)
