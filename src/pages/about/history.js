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
            <h2 className='title is-size-2 has-text-weight-bold is-bold-light page-title'>
              History
            </h2>
            <div className="timeline is-centered">
              {/* <header className="timeline-header">
                <span className="tag is-medium is-primary">Today</span>
              </header> */}
              <div className="timeline-item">
                <div className="timeline-marker is-image is-32x32">
                  <img src="http://bulma.io/images/placeholders/32x32.png" />
                </div>
                <div className="timeline-content">
                  <p className="heading">September 17 2018</p>
                  <p>Coders Beyond Bars Initiative launches coding course in
                  Boston Pre-release Center</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker is-danger is-icon">
                  <i className="fa fa-flag"></i>
                </div>
                <div className="timeline-content">
                  <p className="heading">September 5, 2018</p>
                  <p>The Vera Institute of Justice awards MIT $250,000</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker is-image is-32x32">
                  <img src="http://bulma.io/images/placeholders/32x32.png" />
                </div>
                <div className="timeline-content">
                  <p className="heading">June 2018</p>
                  <p>Richard Kim and Anjali Moorthy joins TEJI as Program Managers</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker is-image is-32x32">
                  <img src="http://bulma.io/images/placeholders/32x32.png" />
                </div>
                <div className="timeline-content">
                  <p className="heading">May 2018</p>
                  <p>The Prison Initiative renamed to The Educational Justice Institute</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker is-image is-32x32">
                  <img src="http://bulma.io/images/placeholders/32x32.png" />
                </div>
                <div className="timeline-content">
                  <p className="heading">February 2018</p>
                  <p>Carole Cafferty joins The Prison Initiative</p>
                </div>
              </div>
              <header className="timeline-header">
                <span className="tag is-medium is-primary">2018</span>
              </header>
              <div className="timeline-item">
                <div className="timeline-marker is-icon">
                  <i className="fa fa-flag"></i>
                </div>
                <div className="timeline-content">
                  <p className="heading">May 2017</p>
                  <p>Lee Perlman launches The Prison Initiative</p>
                </div>
              </div>
              {/* <div className="timeline-header">
                <span className="tag is-medium is-primary">2017</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default History;
