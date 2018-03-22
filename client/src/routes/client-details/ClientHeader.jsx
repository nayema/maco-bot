import React from 'react'
import { Formik } from 'formik'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  }
})

const EditableTextField = ({ props, classes, fieldName, label, model, modelUpdateInProgress }) =>
  <TextField
    disabled={modelUpdateInProgress}
    inputProps={{ readOnly: !model.isEditing }}
    label={label}
    id={fieldName}
    className={classes.textField}
    value={props.values[fieldName]}
    onChange={props.handleChange}
    margin="normal"
  />

const UpdateCancelEditRemoveButtons = ({ props, classes, client, clientUpdatingInProgress, cancelEditClient, editClient, removeClientStarted }) =>
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

const ClientHeader = ({ client, updateClientStarted, classes, clientUpdatingInProgress, cancelEditClient, editClient, removeClientStarted }) =>
  <Formik
    initialValues={client}
    onSubmit={(values) => updateClientStarted(values)}
    render={props => (
      <form>
        <Typography variant="display3" gutterBottom>{props.values['name']}</Typography>
        <UpdateCancelEditRemoveButtons
          props={props}
          classes={classes}
          client={client}
          clientUpdatingInProgress={clientUpdatingInProgress}
          cancelEditClient={cancelEditClient}
          editClient={editClient}
          removeClientStarted={removeClientStarted}
        />
        <EditableTextField
          props={props}
          classes={classes}
          fieldName="name"
          label="Name"
          model={client}
          modelUpdateInProgress={clientUpdatingInProgress}
        />
      </form>
    )}
  />

export default withStyles(styles)(ClientHeader)
