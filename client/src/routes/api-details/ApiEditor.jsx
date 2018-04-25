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

const ApiEditor = ({ classes, api, updateApiStarted, apiUpdatingInProgress, editApi, cancelEditApi, removeApiStarted }) =>
  <Formik
    initialValues={api}
    onSubmit={(values) => updateApiStarted({ ...api, ...values })}
    onReset={() => cancelEditApi()}
    render={props => (
      <form>
        <Typography variant="display3" gutterBottom>{props.values['name']}</Typography>
        <div>
          {
            api.isEditing ? <span>
          <Button
            variant="raised"
            className={classes.button}
            color="primary"
            disabled={apiUpdatingInProgress}
            onClick={props.handleSubmit}>
            Update
          </Button>
          <Button
            variant="raised"
            className={classes.button}
            disabled={apiUpdatingInProgress}
            onClick={props.handleReset}>
            Cancel
          </Button>
        </span> : <span>
          <Button
            variant="raised"
            className={classes.button}
            onClick={editApi}>
            Edit
          </Button>
          <Button
            variant="raised"
            className={classes.button}
            color="secondary"
            onClick={() => removeApiStarted(api.id)}>
            Remove
          </Button>
        </span>
          }
        </div>
        <EditableTextField
          props={props}
          fieldName="name"
          label="Name"
          model={api}
          modelUpdateInProgress={apiUpdatingInProgress}
        />
        <EditableTextField
          props={props}
          fieldName="adi"
          label="ADI"
          model={api}
          modelUpdateInProgress={apiUpdatingInProgress}
        />
      </form>
    )}
  />

export default withStyles(styles)(ApiEditor)
