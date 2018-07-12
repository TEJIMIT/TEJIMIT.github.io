import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'


export const ResourcesPageTemplate = ({ title, content, contentComponent }) => {
  const ResourcesContent = contentComponent || Content

  return (
    <div id="resources">
      <h2 className="title is-size-2 has-text-weight-bold is-bold-light">
        {title}
      </h2>
      <PageContent className="content" content={content} />
    </div>
  );
}


const ResourcesPage = () => {
  return (
    <div>
      <h1>Resources Page</h1>
    </div>
  )
}

export default ResourcesPage
