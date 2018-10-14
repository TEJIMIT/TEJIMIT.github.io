import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'



class Press extends React.Component {

  renderPosts(posts) {
    return (
      posts.map(({ node: post }) => (
          <div key={post.id} className="press-post-item">
            <div className="columns">
              <div className="column is-one-fifth">
                <a
                  href={post.frontmatter.url}
                  target="_blank"
                >
                  <img
                    src={post.frontmatter.thumbnail}
                    alt="Thumbnail"
                  />
                </a>
              </div>
              <div className="column is-fourth-fifths">
                <a
                  className="has-text-primary" href={post.frontmatter.url}
                  target="_blank"
                >
                  <h5 className="has-text-weight-bold is-size-3 news-post" >
                    {post.frontmatter.title}
                  </h5>
                </a>
                <h6
                  className="has-text-weight-bold is-size-4"
                >
                  {post.frontmatter.publication}
                </h6>
                <small className="text-muted">{post.frontmatter.date}</small>
                <h6
                  className="has-text-weight-bold is-size-6"
                >
                  {post.frontmatter.description}
                </h6>
                <br />
                <p>
                  {post.excerpt} &nbsp;
                  <a
                    href={post.frontmatter.url}
                    target="_blank">
                    Read More →
                  </a>
                </p>
              </div>
            </div>
            <hr />
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
              <h2 className="title has-text-weight-bold is-size-2  page-title">
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
            description
            thumbnail
            publication
            url
          }
        }
      }
    }
  }
`
