import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'


class Initiatives extends React.Component {

  renderProjects(proj) {
    const { title } = proj.node.frontmatter;

    return (
        <li className="initiative-item">
          <figure key={title} className="image is-128x128">
            <img src="https://fakeimg.pl/120x120/" alt="Placeholder image" />
          </figure>
        </li>
      );
  }

  render() {
    const { data } = this.props;
    const { edges: inits } = data.initiatives;

    return (
      <section className="section">
        <div className="container">
          <div id="projects" className="columns">
            <div className="column">
              <h2 className='title is-size-2 has-text-weight-bold is-bold-light'>Initiatives</h2>
              <ul className="initiative-list">
                {inits.map(this.renderProjects)}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Initiatives;


export const pageQuery = graphql`
  query ProjectQuery {
    initiatives: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___title]},
        filter: { frontmatter: { templateKey: { eq: "initiative-page" } } }
      ) {
        edges {
          node {
            excerpt(pruneLength: 200)
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
  }
`
