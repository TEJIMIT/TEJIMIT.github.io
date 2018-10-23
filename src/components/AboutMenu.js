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
            Introduction
          </Link>
        </li>
        <li key='college'>
          <Link
            className='menu-item'
            to='/about/college/'>
            College in Prison
          </Link>
        </li>
        <li key='whymit'>
          <Link
            className='menu-item'
            to='/about/whymit/'>
            Why MIT
          </Link>
        </li>
        <li key='staff'>
          <Link
            className='menu-item'
            to='/about/team/'>
            Team
          </Link>
        </li>
        <li key='partners'>
          <Link
            className='menu-item'
            to='/about/partners/'>
            Partners
          </Link>
        </li>
        <li key='esg'>
          <Link
            className='menu-item'
            to='/about/esg/'>
            About ESG
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default AboutMenu;
