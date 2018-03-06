import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as configurationTabs from '../../modules/configuration-tabs'
import ConfigurationTabs from './ConfigurationTabs'

const mapStateToProps = (state) => ({
  activeTabIndex: state.configurationTabs.activeTabIndex
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeConfigTab: configurationTabs.actionCreators.changeConfigTab
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ConfigurationTabs)
