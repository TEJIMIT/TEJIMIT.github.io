import React from 'react';
import Img from "gatsby-image";
import Links from 'gatsby-link';

import AboutMenu from '../../components/AboutMenu';


const AboutESG = ({ data }) => {
  const { sizes } = data.img.childImageSharp;

  return (
    <section className="section">
      <div className="container">
        <div id="about" className="columns">
          <div className="column is-2">
            <div className="is-hidden-mobile is-hidden-tablet-only">
              <AboutMenu />
            </div>
            <div className="is-hidden-desktop">
              <Links to="/about/partners/">&larr; Partners</Links>
              <span className="is-pulled-right">
                <Links to="/about/">About Us &rarr;</Links>
              </span>
            </div>
          </div>
          <div className="column is-10">
            <h2 className='title is-size-2 has-text-weight-bold is-bold-light page-title'>
              About Experimental Study Group (ESG)
            </h2>
            <Img sizes={sizes} />
            <br />
            <p>
              ESG’s primary mission is to offer MIT’s first-year undergraduate core curriculum in small classes that foster a hands-on, highly interactive learning experience. This environment encourages students and teaching staff to get to know each other well; it enables instructors to adapt their pacing and teaching to be nimble and responsive to their students’ needs.
            </p>

            <p>
              Since its founding in 1969, ESG has grown and evolved, adding new initiatives that expand and enhance the freshman experience. We offer more seminars than any other single department within MIT, ranging from the math of toys and games to special topics in physics to the bio-chemical processes of drugs on the human brain. ESG provides an ideal environment for students to explore their educational passions and for academics and researchers to evolve and incubate new ways of teaching. Creativity, innovation, and change are hallmarks of the ESG experience.
            </p>

            <p>Learn more about ESG <a href="http://esg.mit.edu/">here</a>.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutESG;

export const esgImageQuery = graphql`
  query ESGImageQuery {
      img: file(relativePath: { eq: "about/esg.png" }) {
        childImageSharp {
          sizes(maxWidth: 1200) {
            ...GatsbyImageSharpSizes_noBase64
          }
        }
      }
  }
`
