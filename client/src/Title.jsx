import React from 'react'
import GithubCorner from 'react-github-corner'
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
    <GithubCorner
      href="https://github.com/nayema/maco-bot"
      bannerColor="rgba(224, 224, 224, 1)"
      octoColor="#fff"
      size={80}
      direction="right"
    />
    <Typography variant="display3" gutterBottom className={classes.font}>
      Maco Bot
    </Typography>
  </div>
)

export default withStyles(styles)(Title)
