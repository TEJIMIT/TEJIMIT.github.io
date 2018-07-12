import React from 'react'
import Links from 'gatsby-link'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

export const ProjectPageTemplate = ({ title, content, contentComponent }) => {
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

ProjectPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ProjectPage = () => {
  return (
    <div>
      <h2 className='title is-size-2 has-text-weight-bold is-bold-light'>Projects</h2>
    </div>
  )
}

export default ProjectPage
