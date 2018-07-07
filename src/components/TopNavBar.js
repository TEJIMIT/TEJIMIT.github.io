import React from 'react'
import Link from 'gatsby-link'


const TopNavBar = () => (
  <div className="navbar top-navbar" role="navigation" aria-label="main navigation">
    <div className="container">
      <div className="navbar-menu">
        <div className="navbar-start">
          <a
            className="navbar-item"
            href="http://web.mit.edu/">
            MIT
          </a>
          <a
            className="navbar-item"
            href="http://esg.mit.edu/">
            ESG
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default TopNavBar
