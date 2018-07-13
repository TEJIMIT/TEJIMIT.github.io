import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import TopNavBar from '../components/TopNavBar'
import Footer from '../components/Footer'
import './all.sass'


const TemplateWrapper = ({ children }) => {
  return (
    <div>
      <Helmet
        htmlAttributes={{"lang": "en"}}
        title="TEJI@MIT | The Educational Justice Institute" />
      <TopNavBar />
      <Navbar />
      <div>
        {children()}
      </div>
      <Footer />
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
