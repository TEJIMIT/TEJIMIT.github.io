import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'


export const ResourcesPageTemplate = ({ title, content, contentComponent }) => {
  const ResourcesContent = contentComponent || Content

  return (
    <section className="section">
      <div className="container">
        <div id="resources">
          <h2 className="title is-size-2 has-text-weight-bold is-bold-light">
            {title}
          </h2>
          {/* <PageContent className="content" content={content} /> */}
        </div>
      </div>
    </section>
  );
}


const ResourcesPage = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className='title is-size-2 has-text-weight-bold is-bold-light'>Resources Page</h2>
      </div>
    </section>
  )
}

export default ResourcesPage
