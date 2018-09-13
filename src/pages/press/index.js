import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'


class Press extends React.Component {

  renderPosts(posts) {
    return (
      posts.map(({ node: post }) => (
          <div key={post.id} className="box">
            <div className="columns">
              <div className="column is-one-fifth">
                Image
              </div>
              <div className="column is-fourth-fifths">
                <Link className="has-text-primary" to={post.fields.slug}>
                  <h5 className="has-text-weight-bold is-size-5 news-post">
                    {post.frontmatter.title}
                  </h5>
                </Link>
                <small className="text-muted">{post.frontmatter.date}</small>
              <p>
                {post.excerpt} &nbsp;
                <Link to={post.fields.slug}>
                  Read More →
                </Link>
              </p>
              </div>
            </div>
          </div>
        ))
    )
  }

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="section">
        <div className="container">
          <div id="news" className="columns">
            <div className="column">
              <h2 className="title has-text-weight-bold is-size-2">
                Press and Media
              </h2>
              {this.renderPosts(posts)}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Press.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default Press;


export const pageQuery = graphql`
  query PressQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "press-post" } }}
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
