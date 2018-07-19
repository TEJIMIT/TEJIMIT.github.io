import React from 'react';

import LeftMenu from '../../components/LeftMenu'
import RightNews from '../../components/RightNews'
import { LINKS } from '../../templates/about-page'


const Contact = (props) => {
  const { edges: posts } = props.data.allMarkdownRemark

  return (
    <section className="section">
      <div className="container">
        <div id="about" className="columns">
          <div className="column is-2">
            <LeftMenu title="about" links={LINKS} />
          </div>
          <div className="column is-7">
            <h2 className='title is-size-2 has-text-weight-bold is-bold-light'>
              Contact Us
            </h2>
            <div className="contact-form">
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Your Name" />
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    placeholder="your@email.com" />
                </div>
              </div>
              <div className="field">
                <label className="label">Subject</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Subject" />
                </div>
              </div>
              <div class="field">
                <label class="label">Message</label>
                <div class="control">
                  <textarea class="textarea" placeholder="Your Message"></textarea>
                </div>
              </div>
              <div class="field is-grouped">
                <div class="control">
                  <button class="button is-danger">Clear</button>
                </div>
                <div class="control">
                  <button class="button is-link">Submit →</button>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-3">
            <RightNews posts={posts} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact


export const contactQuery = graphql`
  query ContactQuery {
    allMarkdownRemark(
        limit: 3,
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: { frontmatter: { templateKey: { eq: "news-post" } }}
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
            }
          }
        }
      }
  }
`
