import React, { Component } from 'react';

import AboutMenu from '../../components/AboutMenu';

import lee from '../../img/staff/lee.jpg';
import carole from '../../img/staff/carole.jpg';
import richard from '../../img/staff/richard.jpg';
import anjali from '../../img/staff/anjali.jpg';
import brooke from '../../img/staff/brooke.jpg';
import rachel from '../../img/staff/rachel.jpg';


class Team extends Component {
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
            <div className="column is-10">
              <h2 className='title is-size-2 has-text-weight-bold is-bold-light page-title'>
                Team
              </h2>
              <div id="lee" className="columns">
                <div className="column is-one-quarter">
                  <figure className="image profile-image">
                    <img
                      className="is-rounded"
                      src={lee} />
                  </figure>
                </div>
                <div className="column is-three-quarters">
                  <div className="profile-info">
                    <h4 className="title is-size-4">
                      Lee Perlman, Ph.D.
                    </h4>
                    •
                    <h6 className="subtitle is-size-6">
                      Co-Director
                    </h6>
                  </div>
                  <div className="profile-contact">
                    <a href="mailto:lperlman@mit.edu">
                      <span className="icon ">
                        <i className="fas fa-envelope fa-lg"></i>
                      </span>
                    </a>
                  </div>
                  <p>
                    TEJI grew out of Dr. Lee Perlman’s dedication and passion to provide incarcerated men and women with the opportunity to obtain college degrees.
                  </p>

                  <p>
                    Lee earned his BA from St. John’s College (Annapolis), and his MA in political philosophy at Georgetown University, before completing his doctorate at MIT in political philosophy. In 1984 Lee joined the teaching staff of the Experimental Study Group (ESG), MIT’s first freshman learning community, where he has taught for most of the last 33 years.
                  </p>

                  <p>
                    Lee began teaching in prisons in 2012, through Boston University’s Prison Education Program. He founded the MIT Prison Initiative in 2016 with the support of ESG. Through the initiative, Lee teaches classes to both MIT students and prisoners at medium- to maximum-security Massachusetts Correctional Institutions. Lee has twice been awarded the Irwin Sizer Award for Most Significant Improvement to MIT Education (1997, 2015).
                  </p>
                </div>
              </div>
              <hr />

              <div id="carole" className="columns">
                <div className="column is-one-quarter">
                  <figure className="image profile-image">
                    <img
                      className="is-rounded"
                      src={carole} />
                  </figure>
                </div>
                <div className="column is-three-quarters">
                  <div className="profile-info">
                    <h4 className="title is-size-4">
                      Carole Cafferty
                    </h4>
                    •
                    <h6 className="subtitle is-size-6">
                      Co-Director
                    </h6>
                  </div>
                  <div className="profile-contact">
                    <a href="mailto:cafferty@mit.edu">
                      <span className="icon ">
                        <i className="fas fa-envelope fa-lg"></i>
                      </span>
                    </a>
                  </div>
                  <p>
                    Carole Cafferty joined TEJI as Co-Director in February of 2018. Carole co-directs all TEJI initiatives, manages all administrative aspects of TEJI interfacing with correctional facilities throughout Massachusetts, engaging in long-range planning, and handling all communications and event planning for the program. Her goals include envisioning and realizing new opportunities for education of justice-involved men and women, expanding the horizon of MIT students, increasing public service outreach to the broader Massachusetts community, and transforming the initiative into a multi-university consortium, based at MIT.
                  </p>

                  <p>
                    Carole brings over 25 years of experience as a corrections professional to her role. A committed advocate for incarcerated individuals, she has dedicated her career to creating educational and programming initiatives within correctional facilities. She is well respected for her creative program design and collaboration with community-based agencies and academic institutions alike. Throughout her career she has created emotional literacy and digital learning programs, as well as treatment programs that have prepared men and women for successful release back into their communities. Carole is a graduate of St. Anselm College and holds a master’s degree in correctional administration from the University of Massachusetts at Lowell, where she currently serves as an adjunct faculty member in the School of Criminology and Justice Studies.
                  </p>
                </div>
              </div>
              <hr />

              <div id="richard" className="columns">
                <div className="column is-one-quarter">
                  <figure className="image profile-image">
                    <img
                      className="is-rounded"
                      src={richard} />
                  </figure>
                </div>
                <div className="column is-three-quarters">
                  <div className="profile-info">
                    <h4 className="title is-size-4">
                      Richard Kim
                    </h4>
                    •
                    <h6 className="subtitle is-size-6">
                      Research Scientist &amp; Program Manager
                    </h6>
                  </div>
                  <div className="profile-contact">
                    <a href="mailto:kimr@mit.edu">
                      <span className="icon ">
                        <i className="fas fa-envelope fa-lg"></i>
                      </span>
                    </a>
                    <a href="http://richardkim.me/" target="_blank">
                      <span className="icon ">
                        <i className="fas fa-globe fa-lg"></i>
                      </span>
                    </a>
                    <a href="https://www.linkedin.com/in/richardskim111/" target="_blank">
                      <span className="icon ">
                        <i className="fab fa-linkedin fa-lg"></i>
                      </span>
                    </a>
                  </div>
                  <p>
                    Richard earned his master's in Media Arts and Sciences from the Media Lab, Massachusetts Institute of Technology where he specialized in research in artificial intelligence, machine ethics, and computational social science.  Prior to coming back to graduate school, Richard worked in the financial services industry in Tokyo, Japan and Los Angeles, California for approximately six years.  He obtained his Chartered Financial Analyst certification.
                  </p>

                  <p>
                    Coming back to graduate school, Richard redirected his career focus to applied mathematics and computer science.  He completed his master’s in Information Technology with emphasis in Mathematics and Computation.  As a graduate student, Richard taught five courses in computer science and applied mathematics as teaching fellow at Harvard University. Subsequently, he enrolled in MIT Media Lab to pursue his doctorate.
                  </p>

                  <p>
                    While at MIT, he volunteered to teach mathematics to incarcerated students at a correctional facility through the Petey Greene program.  From this experience as a volunteer tutor to incarcerate individuals, Richard was inspired to teach computer programming to incarcerated individuals.
                  </p>
                </div>
              </div>
              <hr />

              <div id="anjali" className="columns">
                <div className="column is-one-quarter">
                  <figure className="image profile-image">
                    <img
                      className="is-rounded"
                      src={anjali} />
                  </figure>
                </div>
                <div className="column is-three-quarters">
                  <div className="profile-info">
                    <h4 className="title is-size-4">
                      Anjali Moorthy
                    </h4>
                    •
                    <h6 className="subtitle is-size-6">
                      Program Manager
                    </h6>
                  </div>
                  <div className="profile-contact">
                    <a href="mailto:anjali.moorthy@codersbeyondbars.org">
                      <span className="icon ">
                        <i className="fas fa-envelope fa-lg"></i>
                      </span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/anjali-moorthy/"
                      target="_blank"
                    >
                      <span className="icon ">
                        <i className="fab fa-linkedin fa-lg"></i>
                      </span>
                    </a>

                  </div>
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


              <div id="brooke" className="columns">
                <div className="column is-one-quarter">
                  <figure className="image profile-image">
                    <img
                      className="is-rounded"
                      src={brooke} />
                  </figure>
                </div>
                <div className="column is-three-quarters">
                  <div className="profile-info">
                    <h4 className="title is-size-4">
                      Brooke Wages
                    </h4>
                    •
                    <h6 className="subtitle is-size-6">
                      Graduate Fellow
                    </h6>
                  </div>
                  <div className="profile-contact">
                    <a href="mailto:brooke.wages@gmail.com">
                      <span className="icon ">
                        <i className="fas fa-envelope fa-lg"></i>
                      </span>
                    </a>
                  </div>
                  <p>
                    Brooke Wages is pursuing a Masters in Public Administration at Harvard Kennedy School and a concurrent Masters in Business Administration at MIT, Sloan School of Management. While completing this dual degree program she will start a social enterprise that trains and places formerly incarcerated people into highly skilled trade roles in the energy industry.
                  </p>
                  <p>
                    Brooke grew up in Raleigh, North Carolina and realized her interest in reentry while earning her Bachelor's in Mechanical Engineering from North Carolina State University. After graduation, Brooke completed British Petroleum’s Leadership and Development Rotational Program and an AmeriCorps VISTA term. In her free time she served as the Marketing and Social Media Coordinator for the National Alliance for the Empowerment of the Formerly Incarcerated, developed a partnership plan for Chicago’s Juvenile Temporary Detention Center and NAACP Chicago Westside Branch, lead the National Society for Black Engineers as the Energy Director, and was an off-unit volunteer for Swannanoa Correctional Center for Women.
                  </p>
                </div>
              </div>
              <hr />

              <div id="rachel" className="columns">
                <div className="column is-one-quarter">
                  <figure className="image profile-image">
                    <img
                      className="is-rounded"
                      src={rachel} />
                  </figure>
                </div>
                <div className="column is-three-quarters">
                  <div className="profile-info">
                    <h4 className="title is-size-4">
                      Rachel Thompson
                    </h4>
                    •
                    <h6 className="subtitle is-size-6">
                      Graduate Fellow
                    </h6>
                  </div>
                  <div className="profile-contact">
                    <a href="mailto:rachelpt@mit.edu">
                      <span className="icon">
                        <i className="fas fa-envelope fa-lg"></i>
                      </span>
                    </a>
                  </div>
                  <p>
                    Rachel Thompson earned her bachelor’s degree in Social Anthropology and Comparative Literature from Harvard University, where she co-founded and directed the Harvard Organization for Prison Education and Reform, a network of eight volunteer groups that tutor in prisons across Massachusetts and work on advocacy initiatives relating to mass incarceration and education. At MIT, Rachel is pursuing her master’s degree in Comparative Media Studies, and her research interrogates the ethics of American incarceration media, from made-in-prison podcasts to exploitative reality television, as well as the technological infrastructures underlying the incarceration system.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Team;
