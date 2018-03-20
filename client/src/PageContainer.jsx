import React from 'react'
import { connect } from 'react-redux'

import Home from './routes/Home'
import ClientsList from './routes/clients/ClientsListContainer'
import ClientDetails from './routes/clients/ClientDetailsContainer'

const NotFound = () =>
  <div>404 Page not found</div>

const PageComponent = ({ page }) => {
  const Page = pages[page]
  return Page ? <Page/> : null
}

const pages = {
  notFound: NotFound,
  home: Home,
  clientsList: ClientsList,
  clientDetails: ClientDetails
}

const mapStateToProps = (state) => ({
  page: state.routing.page
})

export default connect(mapStateToProps)(PageComponent)
