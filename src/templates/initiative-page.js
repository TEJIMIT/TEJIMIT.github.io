import React from 'react'
import Links from 'gatsby-link'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

import InitiativeMenu from '../components/InitiativeMenu';

export const InitiativePageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
      <div>
        <PageContent className="content" content={content} />
      </div>
  );
};

InitiativePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};


const InitiativePage = ({ data }) => {
  const { markdownRemark: page } = data;

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-desktop">
          <div className="column is-2">
            <div className="is-hidden-mobile is-hidden-tablet-only">
              <InitiativeMenu />
            </div>
            <div className="is-hidden-desktop">
              <Links to="/initiatives/">&larr; Initiatives</Links>
            </div>
          </div>
          <div className="column is-10">
            <h2 className="title is-size-2 has-text-weight-bold is-bold-light page-title">
              {page.frontmatter.title}
            </h2>
            <InitiativePageTemplate
              content={page.html}
              contentComponent={HTMLContent}
              title={page.frontmatter.title}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

InitiativePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default InitiativePage;


export const pageQuery = graphql`
  query InitiativeByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`
