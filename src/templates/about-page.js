import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

import RightNews from '../components/RightNews'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <h2 className="title is-size-2 has-text-weight-bold is-bold-light">
        {title}
      </h2>
      <PageContent className="content" content={content} />
    </div>
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
    <section className="section">
      <div className="container">
          <div id="about" className='columns'>
            <aside className="column is-2 menu menu-left">
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
                    to="/about/staff/">
                    Staff
                  </Link>
                </li>
                <li>
                  <Link
                    className={`menu-item ${page.frontmatter.path === '/about/partners/' ? 'is-active' : ''}`}
                    to="/about/partners/">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link
                    className={`menu-item ${page.frontmatter.path === '/about/directions/' ? 'is-active' : ''}`}
                    to="/about/directions/">
                    Directions
                  </Link>
                </li>
                <li>
                  <Link
                    className={`menu-item ${page.frontmatter.path === '/about/contact/' ? 'is-active' : ''}`}
                    to="/about/contact/">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    className={`menu-item ${page.frontmatter.path === '/about/esg/' ? 'is-active' : ''}`}
                    to="/about/esg/">
                    About ESG
                  </Link>
                </li>
              </ul>
            </aside>
            <div className="column is-7">
              <AboutPageTemplate
                contentComponent={HTMLContent}
                title={page.frontmatter.title}
                content={page.html}
              />
            </div>
            <aside className="column is-3">
              <RightNews posts={posts} />
            </aside>
          </div>
        </div>
      </section>
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
