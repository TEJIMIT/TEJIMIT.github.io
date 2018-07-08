import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import RightNews from '../../components/RightNews'


class Projects extends React.Component {

  renderProjects(projs) {
    return (
      projs.map(({ node: proj }) => (
        <div key={proj.id} className="box">
          <h4 className="has-text-weight-bold is-size-4">{proj.frontmatter.title}</h4>
          <p>{proj.excerpt}</p>
        </div>
      ))
    )
  }

  render() {
    const { data } = this.props
    const { edges: projs } = data.projects
    const { edges: blogs } = data.blogs

    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-three-quarters">
              <h2 className='title is-size-2 has-text-weight-bold is-bold-light'>Our Projects</h2>
              {this.renderProjects(projs)}
            </div>
            <div className="column">
              <RightNews posts={blogs} />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

Projects.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default Projects


export const pageQuery = graphql`
  query ProjectQuery {
    projects: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___title]},
        filter: { frontmatter: { templateKey: { eq: "projects-page" } } }
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
    blogs: allMarkdownRemark(
        limit: 3,
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
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
