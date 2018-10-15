import React from 'react'
import Link from 'gatsby-link'

const InitiativeMenu = () => {
  return (
    <aside className="menu menu-about">
      <p className="title is-size-6 menu-label">
        Initiatives
      </p>
      <ul className="menu-list">
        <li key='mpec'>
          <Link
            className='menu-item'
            to='/initiatives/mpec/'>
            MPEC
          </Link>
        </li>
        <li key='cbb'>
          <Link
            className='menu-item'
            to='/initiatives/coders-beyond-bars/'>
            Coders Beyond Bars
          </Link>
        </li>
        <li key='ar-mural'>
          <Link
            className='menu-item'
            to='/initiatives/AR-mural/'>
            AR Mural
          </Link>
        </li>
        <li key='research'>
          <Link
            className='menu-item'
            to='/initiatives/research/'>
            Research
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default InitiativeMenu;
