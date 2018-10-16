import React, { Component } from 'react';
import axios from 'axios';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

const MAPBOX_API = "pk.eyJ1IjoicmljaGFyZGtpbSIsImEiOiJjam45dnNsbDIxMDd2M2xwYnBnMXcxZGQzIn0.dt-QUkhZJW5GEdC3LEf-_Q";


class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: 400,
        height: 400,
        latitude: 42.3609,
        longitude: -71.09185,
        zoom: 16
      }
    }
  }
  render() {
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
                      <p>Fax: (617) 253-8584</p>
                    </div>
                    <div className='contact-email'>
                      <p>E-mail: <a href='mailto:teji@mit.edu'>teji@mit.edu</a></p>
                    </div>
                  </div>
                </div>
                <div className="column is-5-desktop">
                  <div className='contact-map'>
                    <ReactMapGL
                      minZoom={13}
                      {...this.state.viewport}
                      mapboxApiAccessToken={MAPBOX_API}
                      onViewportChange={(viewport) => this.setState({viewport})}
                      mapStyle="mapbox://styles/richardkim/cjnaavrxq4ud02rnm4z89gpiu"
                    >
                      <Marker latitude={42.3609} longitude={-71.09185} offsetLeft={-17} offsetTop={-23}>
                        <div className="map-marker">
                        </div>
                      </Marker>
                      <Popup latitude={42.3609} longitude={-71.09185} closeButton={false} anchor="top">
                        <div>TEJI</div>
                      </Popup>
                    </ReactMapGL>
                    {/* <GoogleMapReact
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
                      </GoogleMapReact> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
      );
  }
}

export default Contact;
