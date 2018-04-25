import React from 'react'
import LinkContainer from 'redux-first-router-link'
import Button from 'material-ui/Button'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
import Select from 'material-ui/Select'
import { MenuItem } from 'material-ui/Menu'
import { CircularProgress } from 'material-ui/Progress'
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

const AddApiRow = ({ classes, apiList, product, newSelectApi, apiAddingInProgress, addApiStarted, changeNewApi }) => (
  <TableRow>
    <TableCell>
      <Select
        onChange={(e) => changeNewApi('id', e.target.value)}
        value={newSelectApi['id']}
      >
        {apiList.map(api => <MenuItem key={api.id} value={api.id}>{api.name}</MenuItem>)}
      </Select>
    </TableCell>
    <TableCell className={classes.actionCell}>
      <div className={classes.wrapper}>
        <Button
          disabled={apiAddingInProgress}
          color="primary"
          onClick={() => addApiStarted(product, newSelectApi)}
        >
          Add
        </Button>
        {apiAddingInProgress && <CircularProgress size={25} className={classes.buttonProgress}/>}
      </div>
    </TableCell>
  </TableRow>
)

const ProductRow = ({ classes, api, removeApiStarted, Link }) => (
  <TableRow>
    <TableCell>
      <Link to={`/apis/${api['id']}`}>{api['name']}</Link>
    </TableCell>
  </TableRow>
)

const ApiSelectList = ({ classes, product, apiList, newSelectApi, apiAddingInProgress, addApiStarted, changeNewApi, removeApiStarted, Link = LinkContainer }) => (
  <Table className={classes.root}>
    <TableHead>
      <TableRow>
        <TableCell>API Name</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <AddApiRow
        classes={classes}
        product={product}
        apiList={apiList}
        newSelectApi={newSelectApi}
        apiAddingInProgress={apiAddingInProgress}
        addApiStarted={addApiStarted}
        changeNewApi={changeNewApi}
      />
      {product.apis.map(api =>
        <ProductRow
          key={api.id}
          classes={classes}
          api={api}
          Link={Link}
        />
      )}
    </TableBody>
  </Table>
)

export default withStyles(styles)(ApiSelectList)
