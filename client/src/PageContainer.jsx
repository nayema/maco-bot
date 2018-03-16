import React from 'react'
import { connect } from 'react-redux'

import Home from './routes/Home'
import ClientsList from './routes/clients/ClientsListContainer'
import ClientDetails from './routes/clients/ClientDetails'

const PageComponent = ({ page }) => {
  const Page = pages[page]
  return Page ? <Page/> : null
}

const pages = {
  home: Home,
  clientsList: ClientsList,
  clientDetails: ClientDetails
}

const mapStateToProps = (state) => ({
  page: state.routing.page
})

export default connect(mapStateToProps)(PageComponent)
