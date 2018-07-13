import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'



class RightNews extends React.Component {

  renderPosts(posts) {
    return (
      posts.map(({ node: post }) => (
          <div className="news-item" key={post.id} >
            <div>
              <Link to={post.fields.slug}>
                <h5 className="has-text-weight-bold is-size-5 news-post">{post.frontmatter.title}</h5>
              </Link>
              <small className="text-muted">{post.frontmatter.date}</small>
            </div>
            <p>
              {post.excerpt}  &nbsp;
              <Link to={post.fields.slug}>Read More →</Link>
            </p>
          </div>
        ))
    )
  }

  render() {
      return (
        <div className="box">
          <h3 className="title has-text-weight-bold is-size-3">
            Latest News
          </h3>
          {this.renderPosts(this.props.posts)}
        </div>
      )
  }
}

RightNews.propTypes = {
  posts: PropTypes.array,
}

export default RightNews
