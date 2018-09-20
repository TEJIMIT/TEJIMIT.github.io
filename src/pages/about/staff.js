import React, { Component } from 'react';

import AboutMenu from '../../components/AboutMenu';


class Staff extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: {
        lee: false,
        carole: false,
        richard: false,
        anjali: false
      }
    }
  }

  render() {
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

              <div className="columns">
                <div className="column is-one-quarter">
                  <figure class="image is-128x128">
                    <img
                      class="is-rounded"
                      src="https://bulma.io/images/placeholders/128x128.png" />
                  </figure>
                </div>
                <div className="column is-three-quarters">
                  <h4 className="title is-size-4">
                    Lee Perlman, Ph.D.
                  </h4>
                  <h6 className="title is-size-6">
                    Co-director
                  </h6>
                  <p>
                    Lorem Ipsum
                  </p>
                </div>
              </div>
              <hr />

              <div className="columns">
                <div className="column is-one-quarter">
                  <figure class="image is-128x128">
                    <img
                      class="is-rounded"
                      src="https://bulma.io/images/placeholders/128x128.png" />
                  </figure>
                </div>
                <div className="column is-three-quarters">
                  <h4 className="title is-size-4">
                    Carole Cafferty
                  </h4>
                  <h6 className="title is-size-6">
                    Co-director
                  </h6>
                  <p>
                    Lorem Ipsum
                  </p>
                </div>
              </div>
              <hr />

              <div className="columns">
                <div className="column is-one-quarter">
                  <figure class="image is-128x128">
                    <img
                      class="is-rounded"
                      src="https://bulma.io/images/placeholders/128x128.png" />
                  </figure>
                </div>
                <div className="column is-three-quarters">
                  <h4 className="title is-size-4">
                    Richard Kim
                  </h4>
                  <h6 className="title is-size-6">
                    Research Scientist &amp; Program Manager
                  </h6>
                  <p>
                    Lorem Ipsum
                  </p>
                </div>
              </div>
              <hr />

              <div className="columns">
                <div className="column is-one-quarter">
                  <figure class="image is-128x128">
                    <img
                      class="is-rounded"
                      src="https://bulma.io/images/placeholders/128x128.png" />
                  </figure>
                </div>
                <div className="column is-three-quarters">
                  <h4 className="title is-size-4">
                    Anjali Moorthy
                  </h4>
                  <h6 className="title is-size-6">
                    Program Manager
                  </h6>
                  <p>
                    Lorem Ipsum
                  </p>
                </div>
              </div>
              <hr />

            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Staff;
