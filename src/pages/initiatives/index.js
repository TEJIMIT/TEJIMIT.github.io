import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import RightNews from '../../components/RightNews'


class Initiatives extends React.Component {

  renderProjects(projs) {
    return (
      projs.map(({ node: proj }) => (
        <div key={proj.id} className="card initiative-card">
          <div className="card-image">
            <figure className="image is-120x120">
              <img src="https://fakeimg.pl/120x120/" alt="Placeholder image" />
            </figure>
          </div>
          <div className="card-content">
            <h4 className="title has-text-weight-bold is-size-4">{proj.frontmatter.title}</h4>
            <div className="content">
              <p>{proj.excerpt}</p>
            </div>
          </div>
        </div>
      ))
    )
  }

  render() {
    const { data } = this.props
    const { edges: inits } = data.initiatives
    const { edges: news } = data.news

    return (
      <section className="section">
        <div className="container">
          <div id="projects" className="columns">
            <div className="column is-three-quarters">
              <h2 className='title is-size-2 has-text-weight-bold is-bold-light'>Initiatives</h2>
              {this.renderProjects(inits)}
            </div>
            <div className="column">
              <RightNews posts={news} />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

// Projects.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       edges: PropTypes.array,
//     }),
//   }),
// }

export default Initiatives


export const pageQuery = graphql`
  query ProjectQuery {
    initiatives: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___title]},
        filter: { frontmatter: { templateKey: { eq: "initiative-page" } } }
      ) {
        edges {
          node {
            excerpt(pruneLength: 200)
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    news: allMarkdownRemark(
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
