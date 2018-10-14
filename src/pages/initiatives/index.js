import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import mpec from '../../img/initiatives/mpec.jpg';
import cbb from '../../img/initiatives/cbb.jpg';
import mural from '../../img/initiatives/mural.jpg';
import research from '../../img/initiatives/research.jpg';


class Initiatives extends React.Component {

  render() {
    return (
      <section className="section">
        <div className="container">
          <div id="projects" className="columns">
            <div className="column">
              <h2 className='title is-size-2 has-text-weight-bold is-bold-light page-title'>Initiatives</h2>
              <ul className="initiative-list is-inline-flex-mobile">
                <li key="mpec" className="initiative-item">
                  <Link to="initiatives/mpec">
                    <figure className="image">
                      <img src={mpec} alt="Placeholder image" />
                      <h3 className="title is-overlay has-text-centered has-text-weight-bold is-size-3 has-text-white-bis">
                        Massachusetts Prison Education Consortium
                      </h3>
                    </figure>
                  </Link>
                </li>
                <li key="cbb" className="initiative-item">
                  <Link to="initiatives/coders-beyond-bars">
                    <figure className="image">
                      <img src={cbb} alt="Placeholder image" />
                      <h3 className="title is-overlay has-text-centered has-text-weight-bold is-size-3 has-text-white-bis">
                        Coders Beyond Bars
                      </h3>
                    </figure>
                  </Link>
                </li>
                <li key="ar-mural" className="initiative-item">
                  <Link to="initiatives/AR-mural">
                    <figure className="image">
                      <img src={mural} alt="Placeholder image" />
                      <h3 className="title is-overlay has-text-centered has-text-weight-bold is-size-3 has-text-white-bis">
                        AR Mural
                      </h3>
                    </figure>
                  </Link>
                </li>
                <li key="research" className="initiative-item">
                  <Link to="initiatives/research">
                    <figure className="image">
                      <img src={research} alt="Placeholder image" />
                      <h3 className="title is-overlay has-text-centered has-text-weight-bold is-size-3 has-text-white-bis">
                        Research
                      </h3>
                    </figure>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Initiatives;
