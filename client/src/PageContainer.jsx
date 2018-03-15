import React from 'react'
import { connect } from 'react-redux'

import Home from './routes/Home'
import ClientsList from './routes/clients/ClientsListContainer'

const PageComponent = ({ page }) => {
  const Page = pages[page]
  return Page ? <Page/> : null
}

const pages = {
  home: Home,
  clientsList: ClientsList
}

const mapStateToProps = (state) => ({
  page: state.routing.page
})

export default connect(mapStateToProps)(PageComponent)
