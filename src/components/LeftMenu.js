import React, { Component } from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'


class LeftMenu extends Component {

  renderLink(link) {
    return (
      <li key={link.item}>
        <Link
          className='menu-item'
          to={link.url}>
          {link.item}
        </Link>
      </li>
    )
  }

  render() {
    const { title, links } = this.props;

    return (
      <aside className="menu menu-left">
        <p className="title is-size-6 menu-label">
          {title}
        </p>
        <ul className="menu-list">
          {links.map(this.renderLink)}
        </ul>
      </aside>
    )
  }
}


LeftMenu.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    item: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }))
}

export default LeftMenu
