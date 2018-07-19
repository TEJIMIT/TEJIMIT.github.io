import React from 'react'

import LeftMenu from '../../components/LeftMenu'
import map from '../../img/mit_esg_map.png'
import { LINKS } from '../../templates/about-page'



const Directions = () => {
  return (
    <section className="section">
      <div className="container">
        <div id="about" className="columns">
          <div className="column is-2">
            <LeftMenu title="about" links={LINKS} />
          </div>
          <div className="column is-7">
            <h2 className='title is-size-2 has-text-weight-bold is-bold-light'>
              Maps &amp; Directions
            </h2>
            <div className='contact'>
              <div className='contact-information'>
                <div className='contact-name'>
                  <h4 className='is-size-4'>The Educational Justice Institute</h4>
                  <h5 className='is-size-5'>Massachusetts Institute of Technology</h5>
                </div>
                <div className='contact-address'>
                  <p>
                    77 Massachusetts Ave. <br />
                    24-612 <br />
                    Cambridge, MA 02139
                  </p>
                </div>
                <div className='contact-phone'>
                  <p>Phone: (617) 452-3756</p>
                </div>
                <div className='contact-email'>
                  <p>E-mail: <a href='mailto:teji@mit.edu'>teji@mit.edu</a></p>
                </div>
              </div>
              <div className='contact-map'>
                <img src={map} alt="Map" className="image"/>
              </div>
            </div>
          </div>
          <div className="column is-3">
            <p>Right Menu</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Directions
