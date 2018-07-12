import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'


class New extends React.Component {

  renderPosts(posts) {
    return (
      posts.map(({ node: post }) => (
          <div key={post.id} className="box">
              <Link className="has-text-primary" to={post.fields.slug}>
                <h5 className="has-text-weight-bold is-size-5">
                  {post.frontmatter.title}
                </h5>
              </Link>
              <small>{post.frontmatter.date}</small>
            <p>
              {post.excerpt}
              <br />
              <Link to={post.fields.slug}>
                Read More →
              </Link>
            </p>
          </div>
        ))
    )
  }

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div id="news" className="columns">
        <div className="column is-three-quarters">
          <h3 className="title has-text-weight-bold is-size-3">
            Blog Posts
          </h3>
          {this.renderPosts(posts)}
        </div>
        <div className="column">
            Right Side
        </div>
      </div>
    )
  }
}

Blogs.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}
export default Blogs


export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
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
