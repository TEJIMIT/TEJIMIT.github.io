import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

import RightNews from '../components/RightNews'

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
  const { page } = data
  const { edges: posts } = data.blogs
  
  return (
    <div className='container'>
      <div className='columns'>
        <aside className="column is-2 menu menu-left">
            <section className="section">
              <p className="menu-label">
                <Link
                  className={`menu-item ${page.frontmatter.path === '/about/' ? 'is-active' : ''}`}
                  to='/about/'>About</Link>
              </p>
              <ul className="menu-list">
                <li>
                  <Link
                    className={`menu-item ${page.frontmatter.path === '/about/mission/' ? 'is-active' : ''}`}
                    to="/about/mission/">
                    Mission
                  </Link>
                </li>
                <li>
                  <Link
                    className={`menu-item ${page.frontmatter.path === '/about/team/' ? 'is-active' : ''}`}
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
            title={page.frontmatter.title}
            content={page.html}
          />
        </div>
        <aside className="column is-3">
          <section className="section">
            <RightNews posts={posts} />
          </section>
        </aside>
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
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        path
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
