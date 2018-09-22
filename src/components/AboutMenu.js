import React from 'react'
import Link from 'gatsby-link'


const AboutMenu = () => {
  return (
    <aside className="menu menu-about">
      <p className="title is-size-6 menu-label">
        About
      </p>
      <ul className="menu-list">
        <li key='about'>
          <Link
            className='menu-item'
            to='/about/'>
            About Us
          </Link>
        </li>
        <li key='history'>
          <Link
            className='menu-item'
            to='/about/history/'>
            History
          </Link>
        </li>
        <li key='staff'>
          <Link
            className='menu-item'
            to='/about/staff/'>
            Staff
          </Link>
        </li>
        <li key='partners'>
          <Link
            className='menu-item'
            to='/about/partners/'>
            Partners
          </Link>
        </li>
        <li key='directions'>
          <Link
            className='menu-item'
            to='/about/directions/'>
            Map & Directions
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default AboutMenu;
