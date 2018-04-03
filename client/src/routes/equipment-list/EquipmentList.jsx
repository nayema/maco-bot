import React from 'react'
import Input from 'material-ui/Input'
import Button from 'material-ui/Button'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
import { LinearProgress, CircularProgress } from 'material-ui/Progress'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {
    width: 'auto',
    margin: 'auto'
  },
  wrapper: {
    margin: theme.spacing.unit,
    position: 'relative'
  },
  actionCell: {
    textAlign: 'center',
    width: 176
  },
  buttonProgress: {
    position: 'absolute',
    top: '13%',
    left: '44%'
  }
})

const AddEquipmentRow = ({ classes, equipmentList, newEquipment, equipmentAddingInProgress, addEquipmentStarted, changeNewEquipment }) => (
  <TableRow>
    <TableCell>
      <Input
        disabled={equipmentAddingInProgress}
        placeholder="Equipment Name"
        onChange={(e) => changeNewEquipment('name', e.target.value)}
        value={newEquipment['name']}
      />
    </TableCell>
    <TableCell>
      <Input
        disabled={equipmentAddingInProgress}
        placeholder="0000"
        onChange={(e) => changeNewEquipment('assetId', e.target.value)}
        value={newEquipment['assetId']}
      />
    </TableCell>
    <TableCell>
      <Input
        disabled={equipmentAddingInProgress}
        placeholder="1111.11"
        onChange={(e) => changeNewEquipment('productContactSurfaceArea', e.target.value)}
        value={newEquipment['productContactSurfaceArea']}
      />
    </TableCell>
    <TableCell>
      <Input
        disabled={equipmentAddingInProgress}
        placeholder="1.11"
        onChange={(e) => changeNewEquipment('minimumBatchSize', e.target.value)}
        value={newEquipment['minimumBatchSize']}
      />
    </TableCell>
    <TableCell className={classes.actionCell}>
      <div className={classes.wrapper}>
        <Button
          disabled={equipmentAddingInProgress}
          color="primary"
          onClick={() => addEquipmentStarted(newEquipment)}
        >
          Add
        </Button>
        {equipmentAddingInProgress && <CircularProgress size={25} className={classes.buttonProgress}/>}
      </div>
    </TableCell>
  </TableRow>
)

const EditableField = ({ isEditing, displayValue, children }) =>
  isEditing ? children : <span>{displayValue}</span>

const EquipmentRow = ({ classes, equipment, updateEquipmentStarted, equipmentUpdatingInProgress, editEquipment, changeEditEquipment, cancelEditEquipment, removeEquipmentStarted  }) => (
  <TableRow>
    <TableCell>
      <EditableField isEditing={equipment.isEditing} displayValue={equipment['name']}>
        <Input
          onChange={(e) => changeEditEquipment({ id: equipment.id, 'name': e.target.value })}
          value={equipment.edit && equipment.edit['name']}
        />
      </EditableField>
    </TableCell>
    <TableCell>
      <EditableField isEditing={equipment.isEditing} displayValue={equipment['assetId']}>
        <Input
          onChange={(e) => changeEditEquipment({ id: equipment.id, 'assetId': e.target.value })}
          value={equipment.edit && equipment.edit['assetId']}
        />
      </EditableField>
    </TableCell>
    <TableCell>
      <EditableField isEditing={equipment.isEditing} displayValue={equipment['productContactSurfaceArea']}>
        <Input
          onChange={(e) => changeEditEquipment({ id: equipment.id, 'productContactSurfaceArea': e.target.value })}
          value={equipment.edit && equipment.edit['productContactSurfaceArea']}
        />
      </EditableField>
    </TableCell>
    <TableCell>
      <EditableField isEditing={equipment.isEditing} displayValue={equipment['minimumBatchSize']}>
        <Input
          onChange={(e) => changeEditEquipment({ id: equipment.id, 'minimumBatchSize': e.target.value })}
          value={equipment.edit && equipment.edit['minimumBatchSize']}
        />
      </EditableField>
    </TableCell>
    <TableCell className={classes.actionCell}>
      {
        equipment.isEditing ? <span>
          <Button color="primary" onClick={() => updateEquipmentStarted(equipment.edit)}>Update</Button>
          <Button onClick={() => cancelEditEquipment(equipment.id)}>Cancel</Button>
        </span> : <span>
          <Button onClick={() => editEquipment(equipment.id)}>Edit</Button>
          <Button color="secondary" onClick={() => removeEquipmentStarted(equipment.id)}>Remove</Button>
        </span>
      }
    </TableCell>
  </TableRow>
)

const LoadingEquipmentProgress = () => (
  <TableRow>
    <TableCell colSpan={2}>
      <LinearProgress mode="query"/>
    </TableCell>
  </TableRow>
)

const EquipmentList = ({ classes, equipmentList, newEquipment, loadingEquipmentList, equipmentAddingInProgress, equipmentUpdatingInProgress, addEquipmentStarted, changeNewEquipment, changeEditEquipment, editEquipment, cancelEditEquipment, updateEquipmentStarted, removeEquipmentStarted }) => (
  <Table className={classes.root}>
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Asset ID</TableCell>
        <TableCell>Product Contact Surface Area (cm2)</TableCell>
        <TableCell>Minimum Batch Size (kg)</TableCell>
        <TableCell/>
      </TableRow>
    </TableHead>
    <TableBody>
      <AddEquipmentRow
        classes={classes}
        equipmentList={equipmentList}
        newEquipment={newEquipment}
        equipmentAddingInProgress={equipmentAddingInProgress}
        addEquipmentStarted={addEquipmentStarted}
        changeNewEquipment={changeNewEquipment}
      />
      {loadingEquipmentList && <LoadingEquipmentProgress loadingEquipment={loadingEquipmentList}/>}
      {equipmentList.map(equipment =>
        <EquipmentRow
          key={equipment.id}
          classes={classes}
          equipment={equipment}
          changeEditEquipment={changeEditEquipment}
          editEquipment={editEquipment}
          cancelEditEquipment={cancelEditEquipment}
          updateEquipmentStarted={updateEquipmentStarted}
          removeEquipmentStarted={removeEquipmentStarted}
        />
      )}
    </TableBody>
  </Table>
)

export default withStyles(styles)(EquipmentList)
