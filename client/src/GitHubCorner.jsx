import React from 'react'
import GithubCorner from 'react-github-corner'
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

const GitHubCorner = ({ classes }) => (
  <div className={classes.root}>
    <GithubCorner
      href="https://github.com/nayema/maco-bot"
      bannerColor="rgba(224, 224, 224, 1)"
      octoColor="#fff"
      size={80}
      direction="right"
    />
  </div>
)

export default withStyles(styles)(GitHubCorner)
