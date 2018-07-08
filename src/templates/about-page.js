import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <h2 className="title is-size-2 has-text-weight-bold is-bold-light">
        {title}
      </h2>
      <PageContent className="content" content={content} />
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <div className='container'>
      <div className='columns'>
        <aside className="column is-2 menu menu-left">
            <section className="section">
              <p className="menu-label">
                <Link className="menu-link" to='/about/'>About</Link>
              </p>
              <ul className="menu-list">
                <li>
                  <Link
                    className="menu-link"
                    to="/about/mission/">
                    Mission
                  </Link>
                </li>
                <li>
                  <Link
                    className="menu-link"
                    to="/about/team/">
                    Team
                  </Link>
                </li>
              </ul>
            </section>
        </aside>
        <div className="column is-7">
          <AboutPageTemplate
            contentComponent={HTMLContent}
            title={post.frontmatter.title}
            content={post.html}
          />
        </div>
      </div>
    </div>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        path
      }
    }
  }
`
