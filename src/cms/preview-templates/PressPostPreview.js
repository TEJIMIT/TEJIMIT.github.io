import React from 'react'
import PropTypes from 'prop-types'
import { PressPostTemplate } from '../../templates/press-post'

const PressPostPreview = ({ entry, widgetFor }) => (
  <PressPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
);

PressPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default PressPostPreview;
