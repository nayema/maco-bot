import React from 'react'
import { Formik } from 'formik'
import Typography from 'material-ui/Typography'
import { LinearProgress } from 'material-ui/Progress'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {
    width: 'auto',
    margin: 'auto'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  }
})

const LoadingClientDetailsProgress = () => <LinearProgress mode="query"/>

const ClientDetails = ({ classes, client, loadingClientDetails, updateClientStarted, clientUpdatingInProgress, cancelEditClient, editClient, removeClientStarted }) =>
  <div className={classes.root}>
    {loadingClientDetails && <LoadingClientDetailsProgress loadingClientDetails={loadingClientDetails}/>}
    {client && <div>
      <Formik
        initialValues={client}
        onSubmit={(values) => updateClientStarted(values)}
        render={props => (
          <form>
            <Typography variant="display3" gutterBottom>{client['name']}</Typography>
            <div>
              {
                client.isEditing ? <span>
                  <Button
                    variant="raised"
                    className={classes.button}
                    color="primary"
                    disabled={clientUpdatingInProgress}
                    onClick={props.handleSubmit}>
                    Update
                  </Button>
                  <Button
                    variant="raised"
                    className={classes.button}
                    disabled={clientUpdatingInProgress}
                    onClick={cancelEditClient}>
                    Cancel
                  </Button>
                </span> : <span>
                  <Button
                    variant="raised"
                    className={classes.button}
                    onClick={editClient}>
                    Edit
                  </Button>
                  <Button
                    variant="raised"
                    className={classes.button}
                    color="secondary"
                    onClick={() => removeClientStarted(client.id)}>
                    Remove
                  </Button>
                </span>
              }
            </div>
            <div>
              <TextField
                disabled={clientUpdatingInProgress}
                inputProps={{ readOnly: !client.isEditing }}
                id="name"
                label="Name"
                className={classes.textField}
                value={props.values.name}
                onChange={props.handleChange}
                margin="normal"
              />
            </div>
          </form>
        )}
      />
    </div>
    }
  </div>

export default withStyles(styles)(ClientDetails)
