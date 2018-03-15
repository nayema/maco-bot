import React from 'react'
import { connect } from 'react-redux'

import HomePage from './routes/HomePage'

const PageComponent = ({ page }) => {
  const Page = pages[page]
  return Page ? <Page/> : null
}

const pages = {
  homePage: HomePage
}

const mapStateToProps = (state) => ({
  page: state.routing.page
})

export default connect(mapStateToProps)(PageComponent)
