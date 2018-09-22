import React, { Component } from 'react';

import AboutMenu from '../../components/AboutMenu';

import lee from '../../img/staff/lee.jpg';
import carole from '../../img/staff/carole.jpg';
import richard from '../../img/staff/richard.jpg';
import anjali from '../../img/staff/anjali.jpg';
import brooke from '../../img/staff/brooke.jpg';
import rachel from '../../img/staff/rachel.jpg';


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
                      src={lee} />
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis est sem. Vivamus placerat convallis magna, vel varius eros pretium eget. Donec consequat nulla sollicitudin nibh finibus, sed pulvinar augue placerat. Curabitur sodales nulla eget eros dapibus, eu vulputate tortor porttitor. Vivamus dapibus tellus pharetra orci ultrices mattis. Proin gravida, magna quis pulvinar auctor, felis velit ultrices erat, pharetra tincidunt nunc ex sit amet diam. Nullam porta sapien sem, non molestie ex commodo a. Etiam vel lectus non velit sollicitudin tristique. Suspendisse efficitur condimentum justo, eu aliquam orci dictum a. Donec ut sagittis tortor, et pulvinar magna. Ut fermentum leo quis iaculis porta. Vestibulum augue ante, volutpat at molestie vel, tristique quis dolor. Morbi eu sapien semper, porttitor enim sed, ultrices odio. Nam sed elit at velit aliquam lobortis nec at mauris. Fusce ac iaculis lorem. Integer et sapien lacinia, varius magna ac, porta neque.
                  </p>
                </div>
              </div>
              <hr />

              <div className="columns">
                <div className="column is-one-quarter">
                  <figure class="image is-128x128">
                    <img
                      class="is-rounded"
                      src={carole} />
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis est sem. Vivamus placerat convallis magna, vel varius eros pretium eget. Donec consequat nulla sollicitudin nibh finibus, sed pulvinar augue placerat. Curabitur sodales nulla eget eros dapibus, eu vulputate tortor porttitor. Vivamus dapibus tellus pharetra orci ultrices mattis. Proin gravida, magna quis pulvinar auctor, felis velit ultrices erat, pharetra tincidunt nunc ex sit amet diam. Nullam porta sapien sem, non molestie ex commodo a. Etiam vel lectus non velit sollicitudin tristique. Suspendisse efficitur condimentum justo, eu aliquam orci dictum a. Donec ut sagittis tortor, et pulvinar magna. Ut fermentum leo quis iaculis porta. Vestibulum augue ante, volutpat at molestie vel, tristique quis dolor. Morbi eu sapien semper, porttitor enim sed, ultrices odio. Nam sed elit at velit aliquam lobortis nec at mauris. Fusce ac iaculis lorem. Integer et sapien lacinia, varius magna ac, porta neque.
                  </p>
                </div>
              </div>
              <hr />

              <div className="columns">
                <div className="column is-one-quarter">
                  <figure class="image is-128x128">
                    <img
                      class="is-rounded"
                      src={richard} />
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis est sem. Vivamus placerat convallis magna, vel varius eros pretium eget. Donec consequat nulla sollicitudin nibh finibus, sed pulvinar augue placerat. Curabitur sodales nulla eget eros dapibus, eu vulputate tortor porttitor. Vivamus dapibus tellus pharetra orci ultrices mattis. Proin gravida, magna quis pulvinar auctor, felis velit ultrices erat, pharetra tincidunt nunc ex sit amet diam. Nullam porta sapien sem, non molestie ex commodo a. Etiam vel lectus non velit sollicitudin tristique. Suspendisse efficitur condimentum justo, eu aliquam orci dictum a. Donec ut sagittis tortor, et pulvinar magna. Ut fermentum leo quis iaculis porta. Vestibulum augue ante, volutpat at molestie vel, tristique quis dolor. Morbi eu sapien semper, porttitor enim sed, ultrices odio. Nam sed elit at velit aliquam lobortis nec at mauris. Fusce ac iaculis lorem. Integer et sapien lacinia, varius magna ac, porta neque.
                  </p>
                </div>
              </div>
              <hr />

              <div className="columns">
                <div className="column is-one-quarter">
                  <figure class="image is-128x128">
                    <img
                      class="is-rounded"
                      src={anjali} />
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
                    Educator by profession and polymath by nature, Anjali earned her master's from the Harvard Graduate School of Education with a focus on Creative/Constructionist Learning, Social Entrepreneurship, and Instructional Design. Before attending grad school, Anjali was a Corps Member at Teach for India, where she worked as an educator and mentor to 200 at-risk adolescents, and then as a founder teacher in a charter secondary school. In those roles, she worked on experiential learning, student leadership, social-emotional learning, teacher training, and community engagement.
                  </p>
                  <p>
                    She believes that education sits at the root of the solutions to most global issues like poverty, and it has the power to catalyse a change in the trajectory of one's life if done right. Her focus is on working with at-risk youth and understanding what education needs to look like to ensure their self-sufficiency, agency, and success in the economy and society.
                  </p>
                  <p>
                    While at Harvard, she also volunteered through the Petey Greene program as a Teaching Assistant in a medium security men's correctional facility in Massachusetts. During this time, the students at the facility left a strong impression on her with their passion for learning, grasp of concepts, openness to challenges, and desire to make a change. This experience led her on the path of the criminal justice movement, and using education as a tool to break the cycle of recidivism.
                  </p>
                </div>
              </div>
              <hr />


              <div className="columns">
                <div className="column is-one-quarter">
                  <figure class="image is-128x128">
                    <img
                      class="is-rounded"
                      src={brooke} />
                  </figure>
                </div>
                <div className="column is-three-quarters">
                  <h4 className="title is-size-4">
                    Brooke Wages
                  </h4>
                  <h6 className="title is-size-6">

                  </h6>
                  <p>
                    Brooke Wages is pursuing a Masters in Public Administration at Harvard Kennedy School and a concurrent Masters in Business Administration at MIT, Sloan School of Management. While completing this dual degree program she will start a social enterprise that trains and places formerly incarcerated people into highly skilled trade roles in the energy industry.
                  </p>
                  <p>
                    Brooke grew up in Raleigh, North Carolina and realized her interest in reentry while earning her Bachelor's in Mechanical Engineering from North Carolina State University. After graduation, Brooke completed British Petroleum’s Leadership and Development Rotational Program and an AmeriCorps VISTA term. In her free time she served as the Marketing and Social Media Coordinator for the National Alliance for the Empowerment of the Formerly Incarcerated, developed a partnership plan for Chicago’s Juvenile Temporary Detention Center and NAACP Chicago Westside Branch, lead the National Society for Black Engineers as the Energy Director, and was an off-unit volunteer for Swannanoa Correctional Center for Women.
                  </p>
                </div>
              </div>
              <hr />

              <div className="columns">
                <div className="column is-one-quarter">
                  <figure class="image is-128x128">
                    <img
                      class="is-rounded"
                      src={rachel} />
                  </figure>
                </div>
                <div className="column is-three-quarters">
                  <h4 className="title is-size-4">
                    Rachel Thompson
                  </h4>
                  <h6 className="title is-size-6">

                  </h6>
                  <p>
                    Rachel Thompson earned her bachelor’s degree in Social Anthropology and Comparative Literature from Harvard University, where she co-founded and directed the Harvard Organization for Prison Education and Reform, a network of eight volunteer groups that tutor in prisons across Massachusetts and work on advocacy initiatives relating to mass incarceration and education. At MIT, Rachel is pursuing her master’s degree in Comparative Media Studies, and her research interrogates the ethics of American incarceration media, from made-in-prison podcasts to exploitative reality television, as well as the technological infrastructures underlying the incarceration system.
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
