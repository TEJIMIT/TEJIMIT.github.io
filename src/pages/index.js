import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import Header from '../components/Header'
import RightNews from '../components/RightNews'


export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div id="home">
        <Header />
        <section className="section">
          <div className="container">
              <div className="columns is-desktop">
                <div className="column">
                  <h3 className="title has-text-weight-bold is-size-3">
                    Home Page
                  </h3>
                </div>
                <div className="column is-one-quarter-desktop">
                  <RightNews posts={posts} />
                </div>
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
      filter: { frontmatter: { templateKey: { eq: "news-post" } }}
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
