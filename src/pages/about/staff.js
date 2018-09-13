import React from 'react';

import AboutMenu from '../../components/AboutMenu';

const Staff = () => {
  return (
    <section className="section">
      <div className="container">
        <div id="about" className="columns">
          <div className="column is-2">
            <AboutMenu />
          </div>
          <div className="column is-7">
            <h2 className='title is-size-2 has-text-weight-bold is-bold-light'>
              Staff
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Staff;
