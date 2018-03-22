import React from 'react'
import { connect } from 'react-redux'

import Home from './routes/Home'
import ClientsList from './routes/clients-list/ClientsListContainer'
import ClientDetails from './routes/client-details/ClientDetailsContainer'
import ProductDetails from './routes/product-details/ProductDetailsContainer'

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
  clientDetails: ClientDetails,
  productDetails: ProductDetails
}

const mapStateToProps = (state) => ({
  page: state.routing.page
})

export default connect(mapStateToProps)(PageComponent)
