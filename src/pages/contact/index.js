import React, { Component } from 'react';
import axios from 'axios';
import GoogleMapReact from 'google-map-react';

const GOOGLE_MAPS_API = "AIzaSyB-F5W_7sKvTIuEg6NVGSCwPiD-K8VCz1E";


const Contact = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className='title is-size-2 has-text-weight-bold is-bold-light page-title'>
          Contact Us
        </h2>
        <div className="columns is-desktop">
          <div className="column is-7-desktop">
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
          </div>
          <div className="column is-5-desktop">
            <div className='contact-map'>
              <GoogleMapReact
                  bootstrapURLKeys={{ key: GOOGLE_MAPS_API }}
                  defaultCenter={{
                    lat: 42.360571,
                    lng: -71.0922101
                  }}
                  defaultZoom={16}
                >
                  <div
                    className="map-marker"
                    lat={42.3609}
                    lng={-71.09185}
                  >
                    <p>TEJI</p>
                  </div>
                </GoogleMapReact>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
