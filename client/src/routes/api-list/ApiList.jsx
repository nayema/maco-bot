import React from 'react'
import LinkContainer from 'redux-first-router-link'
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

const AddApiRow = ({ classes, newApi, apiAddingInProgress, addApiStarted, changeNewApi }) => (
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

const ApiRow = ({ classes, api, Link }) => (
  <TableRow>
    <TableCell>
      <Link to={`/apis/${api['id']}`}>{api['name']}</Link>
    </TableCell>
    <TableCell>{api['adi']}</TableCell>
  </TableRow>
)

const LoadingApiProgress = () => (
  <TableRow>
    <TableCell colSpan={2}>
      <LinearProgress mode="query"/>
    </TableCell>
  </TableRow>
)

const ApiList = ({ classes, apiList, newApi, loadingApiList, apiAddingInProgress, apiUpdatingInProgress, changeNewApi, addApiStarted, Link = LinkContainer }) => (
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
            Link={Link}
          />
        )}
      </TableBody>
    </Table>
  </div>
)

export default withStyles(styles)(ApiList)
