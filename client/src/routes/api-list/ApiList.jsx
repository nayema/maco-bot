import React from 'react'
import Input from 'material-ui/Input'
import Button from 'material-ui/Button'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
import { LinearProgress, CircularProgress } from 'material-ui/Progress'
import Typography from 'material-ui/Typography'
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

const AddApiRow = ({ classes, apiList, newApi, apiAddingInProgress, addApiStarted, changeNewApi }) => (
  <TableRow>
    <TableCell>
      <Input
        disabled={apiAddingInProgress}
        placeholder="API Name"
        onChange={(e) => changeNewApi('name', e.target.value)}
        value={newApi['name']}
      />
    </TableCell>
    <TableCell>
      <Input
        disabled={apiAddingInProgress}
        placeholder="0.0"
        onChange={(e) => changeNewApi('adi', e.target.value)}
        value={newApi['adi']}
      />
    </TableCell>
    <TableCell className={classes.actionCell}>
      <div className={classes.wrapper}>
        <Button
          disabled={apiAddingInProgress}
          color="primary"
          onClick={() => addApiStarted(newApi)}
        >
          Add
        </Button>
        {apiAddingInProgress && <CircularProgress size={25} className={classes.buttonProgress}/>}
      </div>
    </TableCell>
  </TableRow>
)

const EditableField = ({ isEditing, displayValue, children }) =>
  isEditing ? children : <span>{displayValue}</span>

const ApiRow = ({ classes, api, updateApiStarted, apiUpdatingInProgress, editApi, changeEditApi, cancelEditApi, removeApiStarted }) => (
  <TableRow>
    <TableCell>
      <EditableField isEditing={api.isEditing} displayValue={api['name']}>
        <Input
          onChange={(e) => changeEditApi({ id: api.id, 'name': e.target.value })}
          value={api.edit && api.edit['name']}
        />
      </EditableField>
    </TableCell>
    <TableCell>
      <EditableField isEditing={api.isEditing} displayValue={api['adi']}>
        <Input
          onChange={(e) => changeEditApi({ id: api.id, 'adi': e.target.value })}
          value={api.edit && api.edit['adi']}
        />
      </EditableField>
    </TableCell>
    <TableCell className={classes.actionCell}>
      {
        api.isEditing ? <span>
          <Button color="primary" onClick={() => updateApiStarted(api.edit)}>Update</Button>
          <Button onClick={() => cancelEditApi(api.id)}>Cancel</Button>
        </span> : <span>
          <Button onClick={() => editApi(api.id)}>Edit</Button>
          <Button color="secondary" onClick={() => removeApiStarted(api.id)}>Remove</Button>
        </span>
      }
    </TableCell>
  </TableRow>
)

const LoadingApiProgress = () => (
  <TableRow>
    <TableCell colSpan={2}>
      <LinearProgress mode="query"/>
    </TableCell>
  </TableRow>
)

const ApiList = ({ classes, apiList, newApi, loadingApiList, apiAddingInProgress, apiUpdatingInProgress, changeNewApi, addApiStarted, editApi, changeEditApi, cancelEditApi, updateApiStarted, removeApiStarted }) => (
  <div>
    <Typography variant="title" gutterBottom>API List</Typography>
    <Table className={classes.root}>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Acceptable Daily Intake (mg)</TableCell>
          <TableCell/>
        </TableRow>
      </TableHead>
      <TableBody>
        <AddApiRow
          classes={classes}
          apiList={apiList}
          newApi={newApi}
          apiAddingInProgress={apiAddingInProgress}
          addApiStarted={addApiStarted}
          changeNewApi={changeNewApi}
        />
        {loadingApiList && <LoadingApiProgress loadingApi={loadingApiList}/>}
        {apiList.map(api =>
          <ApiRow
            key={api.id}
            classes={classes}
            api={api}
            changeEditApi={changeEditApi}
            editApi={editApi}
            cancelEditApi={cancelEditApi}
            updateApiStarted={updateApiStarted}
            removeApiStarted={removeApiStarted}
          />
        )}
      </TableBody>
    </Table>
  </div>
)

export default withStyles(styles)(ApiList)
