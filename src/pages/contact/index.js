import React from 'react';
import map from '../../img/mit_esg_map.png'

const Contact = () => {
  return (
    <section className="section">
      <div className='container'>
        <h2 className='title is-size-2 has-text-weight-bold is-bold-light'>Contact</h2>
        <div className='columns is-desktop contact'>
          <div className='column contact-map'>
            <img src={map} alt="Map" className="image"/>
          </div>
          <div className='column'>
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
        </div>
      </div>
    </section>
  );
}

export default Contact
