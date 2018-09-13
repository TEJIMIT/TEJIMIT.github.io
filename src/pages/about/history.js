import React from 'react';

import AboutMenu from '../../components/AboutMenu';

const History = () => {
  return (
    <section className="section">
      <div className="container">
        <div id="about" className="columns">
          <div className="column is-2">
            <AboutMenu />
          </div>
          <div className="column is-7">
            <h2 className='title is-size-2 has-text-weight-bold is-bold-light'>
              History
            </h2>
            <div className="timeline">
              <header className="timeline-header">
                <span className="tag is-medium is-primary">Start</span>
              </header>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <p className="heading">January 2016</p>
                  <p>Timeline content - Can include any HTML element</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker is-image is-32x32">
                  <img src="http://bulma.io/images/placeholders/32x32.png" />
                </div>
                <div className="timeline-content">
                  <p className="heading">February 2016</p>
                  <p>Timeline content - Can include any HTML element</p>
                </div>
              </div>
              <header className="timeline-header">
                <span className="tag is-primary">2017</span>
              </header>
              <div className="timeline-item">
                <div className="timeline-marker is-icon">
                  <i className="fa fa-flag"></i>
                </div>
                <div className="timeline-content">
                  <p className="heading">March 2017</p>
                  <p>Timeline content - Can include any HTML element</p>
                </div>
              </div>
              <div className="timeline-header">
                <span className="tag is-medium is-primary">End</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default History;
