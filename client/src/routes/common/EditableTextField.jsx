import React from 'react'
import TextField from 'material-ui/TextField'
import { withStyles } from 'material-ui/styles/index'

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
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

export default withStyles(styles)(EditableTextField)
