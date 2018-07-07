import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/logo.png'

const Navbar = () => (
  <nav className="navbar main-navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="TEJI Logo" />
          </figure>
        </Link>
      </div>
      <div className="navbar-end">
        <Link className="navbar-item" to="/mission/">
          About
        </Link>
        <Link className="navbar-item" to="/projects/">
          Projects
        </Link>
        <Link className="navbar-item" to="/news/">
          News
        </Link>
        <Link className="navbar-item" to="/blog/">
          Blog
        </Link>
        <Link className="navbar-item" to="/contact/">
          Contact
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
