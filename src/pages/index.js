import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import Header from '../components/Header'

import philosophy from '../img/philosophy_of_love.jpg';
import lee from '../img/staff/lee.jpg';
import carole from '../img/staff/carole.jpg';
import richard from '../img/staff/richard.jpg';
import anjali from '../img/staff/anjali.jpg';
import brooke from '../img/staff/brooke.jpg';
import rachel from '../img/staff/rachel.jpg';
import mpec from '../img/initiatives/mpec.jpg';
import cbb from '../img/initiatives/cbb.jpg';
import mural from '../img/initiatives/mural.jpg';
import research from '../img/initiatives/research.jpg';


export default class IndexPage extends React.Component {

  renderPosts(posts) {
    return (
      posts.map(({ node: post }) => {
        return (
          <div key={post.id} className="press-post-item">
            <div className="columns">
              <div className="column is-one-third">
                <a
                  href={post.frontmatter.url}
                  target="_blank"
                >
                  <figure className="image is-3by2">
                    <img
                      src={post.frontmatter.thumbnail}
                      alt="thumbnail"
                    />
                  </figure>
                </a>
              </div>
              <div className="column is-two-thirds">
                <a
                  className="has-text-primary" href={post.frontmatter.url}
                  target="_blank"
                >
                  <h5 className="has-text-weight-bold is-size-5 news-post" >
                    {post.frontmatter.title}
                  </h5>
                </a>
                <h6
                  className="has-text-weight-bold is-size-6"
                >
                  {post.frontmatter.publication}
                </h6>
                <small className="text-muted">{post.frontmatter.date}</small>
                <h6
                  className="has-text-weight-bold is-size-6"
                >
                  {post.frontmatter.description}
                </h6>
              </div>
            </div>
          </div>
        )
      })
    );
  }

  render() {
    const { edges: posts } = this.props.data.allMarkdownRemark;

    return (
      <div id="home">
        <Header />

        <section className="hero is-shade" id="home-about">
          <div className="hero-body">
            <div className="container">
              <Link to="/about/">
                <h3 className="title is-3 has-text-centered section-title">
                  The Educational Justice Institute
                </h3>
              </Link>
              <div className="columns is-tablet">
                <div className="column is-one-third-tablet">
                  <img src={philosophy} />
                </div>
                <div className="column is-two-thirds-tablet">
                  <p>
                    The Educational Justice Institute (TEJI) is an innovative and groundbreaking initiative that provides a transformative learning experience for incarcerated individuals and university students.  Founded in 2017, TEJI is growing exponentially by developing co-learning opportunities for students both behind and outside of prison walls.
                  </p>
                  <p>
                    TEJI aims to enhance the prospects for incarcerated individuals by empowering them to reach their potential and re-define their identity through higher education and the use of technology to prepare for reentry.  The social-emotional benefits of education, such as an increased sense of self-worth and self-motivation, coupled with job readiness preparation, are immeasurable.
                  </p>
                  <Link to="/about/"> Read More →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="hero" id="home-initiatives">
          <div className="hero-body">
            <div className="container">
              <Link to="/initiatives/">
                <h1 className="title is-3 has-text-centered section-title">
                  Initiatives
                </h1>
              </Link>
              <div>
                <ul className="initiative-list is-inline-flex-mobile">
                  <li key="mpec" className="initiative-item">
                    <Link to="initiatives/mpec">
                      <figure className="image">
                        <img src={mpec} alt="Placeholder image" />
                        <h3 className="title is-overlay has-text-centered has-text-weight-bold">
                          Massachusetts Prison Education Consortium
                        </h3>
                      </figure>
                    </Link>
                  </li>
                  <li key="cbb" className="initiative-item">
                    <Link to="initiatives/coders-beyond-bars">
                      <figure className="image">
                        <img src={cbb} alt="Placeholder image" />
                        <h3 className="title is-overlay has-text-centered has-text-weight-bold">
                          Coders Beyond Bars
                        </h3>
                      </figure>
                    </Link>
                  </li>
                  <li key="ar-mural" className="initiative-item">
                    <Link to="initiatives/AR-mural">
                      <figure className="image">
                        <img src={mural} alt="Placeholder image" />
                        <h3 className="title is-overlay has-text-centered has-text-weight-bold">
                          AR Mural
                        </h3>
                      </figure>
                    </Link>
                  </li>
                  <li key="research" className="initiative-item">
                    <Link to="initiatives/research">
                      <figure className="image">
                        <img src={research} alt="Placeholder image" />
                        <h3 className="title is-overlay has-text-centered has-text-weight-bold">
                          Research
                        </h3>
                      </figure>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="hero is-shade" id="home-news">
          <div className="hero-body">
            <div className="container">
              <Link to="/press">
                <h1 className="title is-3 has-text-centered section-title">
                  Press and Media
                </h1>
              </Link>
              <div>
                {this.renderPosts(posts)}
              </div>
            </div>
          </div>
        </section>

        <section className="hero" id="home-team">
          <div className="hero-body">
            <div className="container">
              <Link to="/about/team/">
                <h3 className="title is-3 has-text-centered section-title">
                  Team
                </h3>
              </Link>
              <div className="team-list section-content">
                <div className="team-item">
                  <Link to="/about/team/#lee">
                    <figure className="image is-128x128">
                      <img
                        className="is-rounded"
                        src={lee} />
                    </figure>
                    <h5
                      className="title is-5 has-text-centered name"
                    >
                      Lee Perlman, Ph.D.
                    </h5>
                    <p className="has-text-centered">Co-Director</p>
                  </Link>
                </div>
                <div className="team-item">
                  <Link to="/about/team/#carole">
                    <figure className="image is-128x128">
                      <img
                        className="is-rounded"
                        src={carole} />
                    </figure>
                    <h5
                      className="title is-5 has-text-centered name"
                    >
                      Carole Cafferty
                    </h5>
                    <p className="has-text-centered">Co-Director</p>
                  </Link>
                </div>
                <div className="team-item">
                  <Link to="/about/team/#richard">
                  <figure className="image is-128x128">
                  <img
                    className="is-rounded"
                    src={richard} />
                  </figure>
                  <h5
                    className="title is-5 has-text-centered name"
                  >
                    Richard Kim
                  </h5>
                  <p className="has-text-centered">Program Manager</p>
                  </Link>
                </div>
                <div className="team-item">
                  <Link to="/about/team/#anjali">
                  <figure className="image is-128x128">
                  <img
                    className="is-rounded"
                    src={anjali} />
                  </figure>
                  <h5
                    className="title is-5 has-text-centered name"
                  >
                    Anjali Moorthy
                  </h5>
                  <p className="has-text-centered">Program Manager</p>
                  </Link>
                </div>
                <div className="team-item">
                  <Link to="/about/team/#brooke">
                  <figure className="image is-128x128">
                  <img
                    className="is-rounded"
                    src={brooke} />
                  </figure>
                  <h5
                    className="title is-5 has-text-centered name"
                  >
                    Brooke Wages
                  </h5>
                  <p className="has-text-centered">Graduate Fellow</p>
                  </Link>
                </div>
                <div className="team-item">
                  <Link to="/about/team/#rachel">
                  <figure className="image is-128x128">
                  <img
                    className="is-rounded"
                    src={rachel} />
                  </figure>
                  <h5
                    className="title is-5 has-text-centered name"
                  >
                    Rachel Thompson
                  </h5>
                  <p className="has-text-centered">Graduate Fellow</p>
                </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 3,
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "press-post" } }}
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
            description
            thumbnail
            publication
            url
          }
        }
      }
    }
  }
`
