import React, { Component } from 'react';
import Img from "gatsby-image";

import AboutMenu from '../../components/AboutMenu';


class Partners extends Component {

  renderPartner(partners) {
    return (
      partners.map(({ node: partner }) => {
        const { id } = partner;
        const { sizes } = partner.childImageSharp;
        return (
          <div
            className="partner-item"
            key={id}
          >
            <Img
              sizes={sizes}
            />
          </div>
        );
      })
    );
  }

  render() {
    const { data } = this.props;
    const { edges: partners } = data.allFile;

    return (
      <section className="section">
        <div className="container">
          <div id="partners" className="columns">
            <div className="column is-2">
              <AboutMenu />
            </div>
            <div className="column is-10">
              <h2 className='title is-size-2 has-text-weight-bold is-bold-light page-title'>
                Partners
              </h2>
              <div className="partner-container">
                {this.renderPartner(partners)}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Partners;


export const imageQuery = graphql`
  query ImageQuery {
      allFile(
        filter: {
          relativeDirectory: {
            regex: "/partners/"
          }
          extension: {
            eq: "jpg"
          }
        }
      ) {
        totalCount
        edges {
          node {
            id
            childImageSharp {
              sizes(maxWidth: 250) {
                ...GatsbyImageSharpSizes_noBase64
              }
            }
          }
        }
      }
}
`
