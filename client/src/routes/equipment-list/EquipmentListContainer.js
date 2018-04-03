import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as equipmentList from '../../modules/equipment-list'
import EquipmentList from './EquipmentList'

const mapStateToProps = (state) => ({
  equipmentList: state.pages.equipmentList.equipmentList,
  newEquipment: state.pages.equipmentList.newEquipment,
  loadingEquipmentList: state.pages.equipmentList.loadingEquipmentList,
  equipmentAddingInProgress: state.pages.equipmentList.equipmentAddingInProgress,
  equipmentUpdatingInProgress: state.pages.equipmentList.equipmentUpdatingInProgress
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addEquipmentStarted: equipmentList.actionCreators.addEquipmentStarted,
  changeNewEquipment: equipmentList.actionCreators.changeNewEquipment,
  editEquipment: (id) => equipmentList.actionCreators.editEquipment({ id }),
  changeEditEquipment: equipmentList.actionCreators.changeEditEquipment,
  cancelEditEquipment: (id) => equipmentList.actionCreators.cancelEditEquipment({ id }),
  updateEquipmentStarted: equipmentList.actionCreators.updateEquipmentStarted,
  removeEquipmentStarted: (id) => equipmentList.actionCreators.removeEquipmentStarted({ id })
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EquipmentList)
