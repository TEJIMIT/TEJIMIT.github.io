import React from 'react';
import Links from 'gatsby-link';
import Img from "gatsby-image";

import AboutMenu from '../../components/AboutMenu';


const AboutUs = ({ data }) => {
  const { sizes } = data.img.childImageSharp;

  return (
    <section className="section">
      <div className="container">
        <div id="about" className="columns is-desktop">
          <div className="column is-3-desktop is-2-widescreen">
            <div className="is-hidden-mobile is-hidden-tablet-only">
              <AboutMenu />
            </div>
            <div className="is-hidden-desktop">
              <span className="is-pulled-right"><Links to="/about/whymit/">Why MIT &rarr;</Links></span>
            </div>
          </div>
          <div className="column is-9-desktop is-10-widescreen">
            <h2 className='title is-size-2 has-text-weight-bold is-bold-light page-title'>
              About Us
            </h2>
            <Img sizes={sizes} />
            <br />
            <p>
              The Educational Justice Institute (TEJI) is an innovative and groundbreaking initiative that provides a transformative learning experience for incarcerated individuals and university students.  Founded in 2017, TEJI is growing exponentially by developing co-learning opportunities for students both behind and outside of prison walls.
            </p>

            <p>
              TEJI aims to enhance the prospects for incarcerated individuals by empowering them to reach their potential and re-define their identity through higher education and the use of technology to prepare for reentry.  The social-emotional benefits of education, such as an increased sense of self-worth and self-motivation, coupled with job readiness preparation, are immeasurable.
            </p>

            <p>
              Through working and studying with justice-involved individuals under the auspices of TEJI, MIT students experience the issues and challenges facing men and women who are incarcerated in prisons and jails. They gain firsthand knowledge regarding the complexities surrounding America’s incarcerated population, have the potential to develop a sustained commitment to community involvement, and develop increased empathy and compassion, as they directly experience the humanization of those who have been de-humanized by our society. As future leaders in the United States and across the world, these experiences provide useful and necessary development opportunities that will enhance their future work.
            </p>

            <p>
              TEJI has accomplished much in its short existence, including:
            </p>

            <ul className="accomplishments">
              <li key={1}>
                <span className="icon has-text-info">
                  <i className="far fa-check-circle"></i>
                </span>
                Partnering with a wide range of institutions, both higher education and technology, to develop programming that will reinvent prison education
              </li>
              <li key={2}>
                <span className="icon has-text-info">
                  <i className="far fa-check-circle"></i>
                </span>
                Supporting classes in prison that include both MIT students and incarcerated individuals
              </li>
              <li key={3}>
                <span className="icon has-text-info">
                  <i className="far fa-check-circle"></i>
                </span>
                Recruiting and supporting tutors and teaching assistants for prisons and jails
              </li>
              <li key={4}>
                <span className="icon has-text-info">
                  <i className="far fa-check-circle"></i>
                </span>
                Sponsoring debates with Harvard and MIT students debating incarcerated individuals
              </li>
              <li key={5}>
                <span className="icon has-text-info">
                  <i className="far fa-check-circle"></i>
                </span>
                Scheduling a speaker series regarding topics of interest to prison education
              </li>
              <li key={6}>
                <span className="icon has-text-info">
                  <i className="far fa-check-circle"></i>
                </span>
                Fostering the formation of a student corrections education and social justice reform group
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

export const tejiImageQuery = graphql`
  query TEJIImageQuery {
      img: file(relativePath: { eq: "about/teji.png" }) {
        childImageSharp {
          sizes(maxWidth: 1200) {
            ...GatsbyImageSharpSizes_noBase64
          }
        }
      }
  }
`
