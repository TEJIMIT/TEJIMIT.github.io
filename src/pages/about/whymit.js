import React from 'react';
import Img from 'gatsby-image';

import AboutMenu from '../../components/AboutMenu';


const WhyMIT = ({ data }) => {
  const { sizes } = data.img.childImageSharp;

  return (
    <section className="section">
      <div className="container">
        <div id="about" className="columns">
          <div className="column is-2">
            <AboutMenu />
          </div>
          <div className="column is-10">
            <h2 className='title is-size-2 has-text-weight-bold is-bold-light page-title'>
              Why MIT
            </h2>
            <Img sizes={sizes} />
            <br />
            <p>
              As a recognized leader in education and research, MIT has the ability and the responsibility to effect positive change through education in all areas of society, including Massachusetts prisons and jails. Our goal is to improve quality of life and future prospects through education, while simultaneously raising the social consciousness of MIT students. (from draft REIF letter of support)
            </p>

            <p>
              The MIT mission statement reads: "We are also driven to bring knowledge to bear on the world’s great challenges." As a recognized world leader in education and research, MIT has the ability and the responsibility to effect responsible corrections reform through education and the integration of educational technology into prisons and jails, while simultaneously raising the social consciousness of MIT students. Toward this end, TEJI aims to foster partnerships with other institutions of higher learning, most recently through the Vera Institute funded MPEC, as well as with other organizations that are working to enhance corrections education through technological innovation, such as EDOVO. We believe that our work with these partners offers the potential to reinvent correctional education in America.
            </p>

            <p>
              MIT has a long history of sending faculty into the Massachusetts prison system to teach, primarily through programs at other higher education institutions, such as the Boston University Prison Education Program. Through the creation of TEJI@MIT, MIT has brought much of its work with the incarcerated under one roof.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMIT;


export const mitImageQuery = graphql`
  query MITImageQuery {
      img: file(relativePath: { eq: "about/mit.png" }) {
        childImageSharp {
          sizes(maxWidth: 1200) {
            ...GatsbyImageSharpSizes_noBase64
          }
        }
      }
  }
`
