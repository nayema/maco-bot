import React from 'react'
import { withStyles } from 'material-ui/styles'
import Tabs, { Tab } from 'material-ui/Tabs'
import Typography from 'material-ui/Typography'

import ClientsEditor from './clients-editor/ClientsEditorContainer'
import ProductsEditor from './products-editor/ProductsEditorContainer'

const TabContainer = (props) => (
  <Typography component="div" style={{ padding: 8 * 3 }}>
    {props.children}
  </Typography>
)

const styles = () => ({
  root: {
    flexGrow: 1
  }
})

const ConfigurationTabs = ({ classes, activeTabIndex, changeConfigTab }) => (
  <div className={classes.root}>
    <Tabs
      value={activeTabIndex}
      onChange={(_, value) => changeConfigTab(value)}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab label="Clients"/>
      <Tab label="Products"/>
    </Tabs>
    {activeTabIndex === 0 && <TabContainer><ClientsEditor/></TabContainer>}
    {activeTabIndex === 1 && <TabContainer><ProductsEditor/></TabContainer>}
  </div>
)

export default withStyles(styles)(ConfigurationTabs)
