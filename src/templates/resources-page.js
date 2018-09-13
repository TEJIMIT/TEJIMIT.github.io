import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'


export const ResourcesPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section">
      <div className="container">
        <div id="resources">
          <PageContent className="content" content={content} />
        </div>
      </div>
    </section>
  );
}

ResourcesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.fun
}


const ResourcesPage = ({ data }) => {
  const { page } = data
  console.log(HTMLContent)
  return (
    <section className="section">
      <div className="container">
        <div id="resources" className="columns">
          <div className="column is-three-quarters">
            <h2 className="title is-size-2 has-text-weight-bold is-bold-light">
              Resources
            </h2>
            <ResourcesPageTemplate
              contentComponent={HTMLContent}
              title={page.frontmatter.title}
              content={page.html}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export const resourcePageQuery = graphql`
  query ResourcePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        path
      }
    }
  }
`

export default ResourcesPage
