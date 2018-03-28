import React from 'react'
import { Formik } from 'formik'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'

import EditableTextField from '../common/EditableTextField'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
})

const ClientHeader = ({ classes, client, updateClientStarted, clientUpdatingInProgress, editClient, cancelEditClient, removeClientStarted }) =>
  <Formik
    initialValues={client}
    onSubmit={(values) => updateClientStarted({ ...client, ...values, products: client.products })}
    onReset={() => cancelEditClient()}
    render={props => (
      <form>
        <Typography variant="display3" gutterBottom>{props.values['name']}</Typography>
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
            onClick={props.handleReset}>
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
        <EditableTextField
          props={props}
          fieldName="name"
          label="Name"
          model={client}
          modelUpdateInProgress={clientUpdatingInProgress}
        />
      </form>
    )}
  />

export default withStyles(styles)(ClientHeader)
