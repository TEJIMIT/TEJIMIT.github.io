import React from 'react';


const Contact = (props) => {
  return (
    <section className="section">
      <div className="container">
        <div id="about" className="columns">
          <div className="column is-7">
            <h2 className='title is-size-2 has-text-weight-bold is-bold-light'>
              Contact Us
            </h2>
            <form className="contact-form" name="contact" method="POST" netlify>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="name"
                    placeholder="Your Name" />
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    name="email"
                    placeholder="your@email.com" />
                </div>
              </div>
              <div className="field">
                <label className="label">Subject</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="subject"
                    placeholder="Subject" />
                </div>
              </div>
              <div class="field">
                <label class="label">Message</label>
                <div class="control">
                  <textarea name="message" class="textarea" placeholder="Your Message"></textarea>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <button class="button is-link submit is-pulled-right" type="submit">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
