import React from 'react'
import { connect } from 'react-redux'

import Home from './routes/Home'
import ClientsList from './routes/client-list/ClientsListContainer'
import ClientDetails from './routes/client-details/ClientDetailsContainer'
import ProductDetails from './routes/product-details/ProductDetailsContainer'
import EquipmentList from './routes/equipment-list/EquipmentListContainer'

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
  productDetails: ProductDetails,
  equipmentList: EquipmentList
}

const mapStateToProps = (state) => ({
  page: state.routing.page
})

export default connect(mapStateToProps)(PageComponent)
