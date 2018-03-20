import React from 'react'
import { Formik, Form, Field } from 'formik'
import Typography from 'material-ui/Typography'
import Input from 'material-ui/Input'
import { LinearProgress } from 'material-ui/Progress'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {
    width: 'auto',
    margin: 'auto'
  }
})

const LoadingClientDetailsProgress = () => <LinearProgress mode="query"/>

const ClientDetails = ({ classes, client, loadingClientDetails, changeEditClient, updateClientStarted, cancelEditClient, editClient, removeClientStarted }) =>
  <div className={classes.root}>
    {loadingClientDetails && <LoadingClientDetailsProgress loadingClients={loadingClientDetails}/>}
    {client && <div>
      <Typography variant="display3" gutterBottom>{client['name']}</Typography>
      <Formik
        initialValues={{ name: '' }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
          }, 1000)
        }}
        render={props => (
          <form onSubmit={props.handleSubmit}>
            <input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.name}
              name="name"
            />
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
            <button type="submit">Submit</button>
          </form>
        )}
      />
    </div>
    }
  </div>

export default withStyles(styles)(ClientDetails)
