import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'


class Initiatives extends React.Component {

  renderProjects(proj) {
    const { slug } = proj.node.fields;
    const { title, path } = proj.node.frontmatter;

    return (
        <li key={title} className="initiative-item">
          <Link to={path}>
            <figure key={title} className="image">
              <img src="https://fakeimg.pl/400x300/" alt="Placeholder image" />
              <h3 className="title is-overlay has-text-centered has-text-weight-bold is-size-3 has-text-white-bis">{title}</h3>
            </figure>
          </Link>
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
              <ul className="initiative-list is-inline-flex-mobile">
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
            id
            fields {
              slug
            }
            frontmatter {
              title
              path
            }
          }
        }
      }
  }
`
