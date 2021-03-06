import React from 'react'
import { connect } from 'react-redux'

import Home from './routes/Home'
import ClientsList from './routes/client-list/ClientsListContainer'
import ClientDetails from './routes/client-details/ClientDetailsContainer'
import ProductDetails from './routes/product-details/ProductDetailsContainer'
import EquipmentList from './routes/equipment-list/EquipmentListContainer'
import ApiList from './routes/api-list/ApiListContainer'
import ApiDetails from './routes/api-details/ApiDetailsContainer'

const NotFound = () =>
  <div>404 Page not found</div>

const PageComponent = ({ page }) => {
  const Page = pages[page]
  return Page ? <Page/> : null
}

const pages = {
  notFound: NotFound,
  home: Home,
  clientList: ClientsList,
  clientDetails: ClientDetails,
  productDetails: ProductDetails,
  equipmentList: EquipmentList,
  apiList: ApiList,
  apiDetails: ApiDetails
}

const mapStateToProps = (state) => ({
  page: state.routing.page
})

export default connect(mapStateToProps)(PageComponent)
