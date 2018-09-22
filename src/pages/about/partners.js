import React from 'react';
import AboutMenu from '../../components/AboutMenu';



const PARTNER_INFO = {
  MPEC: [

  ],
  corrections: [

  ],
  nonprofits: [

  ],
  technology: [

  ],
  research: [

  ]
};


const Partners = () => {
  return (
    <section className="section">
      <div className="container">
        <div id="partners" className="columns">
          <div className="column is-2">
            <AboutMenu />
          </div>
          <div className="column is-7">
            <h2 className='title is-size-2 has-text-weight-bold is-bold-light'>
              Partners
            </h2>
            <section className="section">
              
            </section>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
