import React from 'react'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

const styles = () => ({
  root: {
    flexGrow: 1,
    marginTop: 15,
    textAlign: 'center'
  },
  font: {
    fontFamily: 'Indie Flower'
  }
})

const Title = ({ classes }) => (
  <div className={classes.root}>
    <Typography variant="display3" gutterBottom className={classes.font}>
      Maco Bot
    </Typography>
  </div>
)

export default withStyles(styles)(Title)
