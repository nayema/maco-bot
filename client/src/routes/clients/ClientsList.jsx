import React from 'react'
import LinkContainer from 'redux-first-router-link'
import keyPress from 'react-keypress'
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

const AddClientRow = ({ classes, newClient, clientAddingInProgress, addClientStarted, changeNewClient }) => (
  <TableRow>
    <TableCell>
      <Input
        disabled={clientAddingInProgress}
        placeholder="New Client Name"
        onChange={(e) => changeNewClient('name', e.target.value)}
        onKeyPress={keyPress('enter', (e) => addClientStarted({ ...newClient, 'name': e.target.value }))}
        value={newClient['name']}
      />
    </TableCell>
    <TableCell className={classes.actionCell}>
      <div className={classes.wrapper}>
        <Button
          disabled={clientAddingInProgress}
          color="primary"
          onClick={() => addClientStarted(newClient)}
        >
          Add
        </Button>
        {clientAddingInProgress && <CircularProgress size={25} className={classes.buttonProgress}/>}
      </div>
    </TableCell>
  </TableRow>
)

const ClientRow = ({ classes, client, Link }) => (
  <TableRow>
    <TableCell>
      <Link to={`/clients/${client['id']}`}>{client['name']}</Link>
    </TableCell>
  </TableRow>
)

const LoadingClientsProgress = () => (
  <TableRow>
    <TableCell colSpan={2}>
      <LinearProgress mode="query"/>
    </TableCell>
  </TableRow>
)

const ClientsList = ({ classes, newClient, clients, loadingClients, clientAddingInProgress, addClientStarted, changeNewClient, Link = LinkContainer }) => (
  <Table className={classes.root}>
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <AddClientRow
        classes={classes}
        newClient={newClient}
        clientAddingInProgress={clientAddingInProgress}
        addClientStarted={addClientStarted}
        changeNewClient={changeNewClient}
      />
      {loadingClients && <LoadingClientsProgress loadingClients={loadingClients}/>}
      {clients.map(client =>
        <ClientRow
          key={client.id}
          classes={classes}
          client={client}
          Link={Link}
        />
      )}
    </TableBody>
  </Table>
)

export default withStyles(styles)(ClientsList)
