import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

import RightNews from '../components/RightNews'
import LeftMenu from '../components/LeftMenu'

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



export const LINKS = [
    {
      item: 'About Us',
      url: '/about/'
    },
    {
      item: 'Staff',
      url: '/about/staff/'
    },
    {
      item: 'Partners',
      url: '/about/partners/'
    },
    {
      item: 'Maps & Directions',
      url: '/about/directions/'
    }
]



const AboutPage = ({ data }) => {
  const { page } = data

  return (
    <section className="section">
      <div className="container">
          <div id="about" className='columns'>
            <div className="column is-2">
              <LeftMenu title="about" links={LINKS} />
            </div>
            <div className="column is-7">
              <AboutPageTemplate
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
  }
`
