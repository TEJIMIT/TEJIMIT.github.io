import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import Header from '../components/Header'


export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div id="home">
        <Header />
        <section className="section">
          <div className="container">
              <div>
                About Us
              </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
              <div>
                What We Do
              </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
              <div>
                News and Media
              </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
              <div>
                Partnerships
              </div>
          </div>
        </section>
      </div>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 3,
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "press-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 100)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
