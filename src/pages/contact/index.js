import React, { Component } from 'react';


const Contact = () => {
  return (
    <section className="section">
      <div className="container">
        <div id="about" className="columns">
          <div className="column is-7">
            <h2 className='title is-size-2 has-text-weight-bold is-bold-light'>
              Contact Us
            </h2>
            <form
              className="contact-form"
              name="contact"
              method="post"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="field">
                <label className="label">Name</label>
                <div className="control has-icons-right">
                  <input
                    className="input"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Subject</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Message</label>
                <div className="control">
                  <textarea
                    name="message"
                    className="textarea"
                    placeholder="Your Message"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button
                    className="button is-link submit is-pulled-right"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
