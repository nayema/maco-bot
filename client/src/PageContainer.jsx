import React from 'react'
import { connect } from 'react-redux'

const PageComponent = ({ page }) => {
  const Page = pages[page]
  return Page ? <Page/> : null
}

const HomeComponent = () =>
  <div>
    HOME
  </div>

const pages = {
  homePage: HomeComponent
}

const mapStateToProps = (state) => ({
  page: state.routing.page
})

export default connect(mapStateToProps)(PageComponent)
