import React from 'react'
import Link from 'gatsby-link'

import logo from '../img/teji_logo.svg'


class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      menu: ''
    }
  }

  handleBurgerClick() {
    let menu = (this.state.menu === 'is-active') ? '' : 'is-active'
    this.setState({menu})
  }

  render() {
    return (
        <nav className="navbar main-navbar is-transparent">
          <div className="container">
            <div className="navbar-brand is-vertical-center">
              <Link to="/" className="navbar-item">
                <figure className="image">
                  <img src={logo} alt="TEJI Logo" />
                </figure>
              </Link>
              <a
                role="button"
                className="navbar-burger"
                data-target="navMenu"
                aria-label="menu"
                aria-expanded="false"
                onClick={this.handleBurgerClick.bind(this)}>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
            <div className={`navbar-menu ${this.state.menu}`} id="navMenu">
              <div className="navbar-end">
                <Link className="navbar-item" to="/about/">
                  About
                </Link>
                <Link className="navbar-item" to="/initiatives/">
                  Initiatives
                </Link>
                <Link className="navbar-item" to="/press/">
                  Press
                </Link>
                <Link className="navbar-item" to="/resources/">
                  Resources
                </Link>
                <Link className="navbar-item" to="/contact/">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
    )
  }
}

export default Navbar
