import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'



class RightMenu extends React.Component {

  render() {
      return (
        this.props.posts.map(({ node: post }) => (
            <div key={post.id} >
              <p>
                <Link className="has-text-primary" to={post.fields.slug}>
                  {post.frontmatter.title}
                </Link>
                <br />
                <small>{post.frontmatter.date}</small>
              </p>
              <p>
                <Link to={post.fields.slug}>
                  Read More →
                </Link>
              </p>
            </div>
          ))
      )
  }
}

export default RightMenu
