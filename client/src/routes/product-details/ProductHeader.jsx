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

const ProductHeader = ({ product, clientName, updateProductStarted, classes, productUpdatingInProgress, cancelEditProduct, editProduct, removeProductStarted }) =>
  <Formik
    initialValues={product}
    onSubmit={(values) => updateProductStarted(values)}
    render={props => (
      <form>
        <Typography variant="display3" gutterBottom>{props.values['name']}</Typography>
        Client: {clientName}
        <div>
          {
            product.isEditing ? <span>
          <Button
            variant="raised"
            className={classes.button}
            color="primary"
            disabled={productUpdatingInProgress}
            onClick={props.handleSubmit}>
            Update
          </Button>
          <Button
            variant="raised"
            className={classes.button}
            disabled={productUpdatingInProgress}
            onClick={cancelEditProduct}>
            Cancel
          </Button>
        </span> : <span>
          <Button
            variant="raised"
            className={classes.button}
            onClick={editProduct}>
            Edit
          </Button>
          <Button
            variant="raised"
            className={classes.button}
            color="secondary"
            onClick={() => removeProductStarted(product.id)}>
            Remove
          </Button>
        </span>
          }
        </div>
        <EditableTextField
          props={props}
          fieldName="name"
          label="Name"
          model={product}
          modelUpdateInProgress={productUpdatingInProgress}
        />
      </form>
    )}
  />

export default withStyles(styles)(ProductHeader)
