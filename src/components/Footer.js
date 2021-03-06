import React from 'react';
import Link from 'gatsby-link';

const Footer = () => (
  <footer className='footer'>
    <div className='container'>
      <div className='columns'>
        <div className='column is-half'>
          <div className='contact-name'>
            <h1 className='is-size-4'>The Educational Justice Institute</h1>
            <h5 className='is-size-5'>Massachusetts Institute of Technology</h5>
          </div>
          <div className='contact-address'>
          <p>
            77 Massachusetts Ave. <br />
            24-612 <br />
            Cambridge, MA 02139
          </p>
          </div>
          <div className='contact-phone'>
            <p>Phone: (617) 452-3756</p>
            <p>Fax: (617) 253-8584</p>
          </div>
          <div className='contact-email'>
            <p><a href='mailto:teji@mit.edu'>teji@mit.edu</a></p>
          </div>
        </div>
        <div className='column'>
          <ul className='footer-navigation'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about/'>About</Link></li>
            <li><Link to='/initiatives/'>Initiatives</Link></li>
            <li><Link to='/press/'>Press</Link></li>
            <li><Link to='/resources/'>Resources</Link></li>
            <li><Link to='/contact/'>Contact</Link></li>
          </ul>
        </div>
        <div className='column'>
          <p>Follow Us:</p>
          <div className="footer-social">
            <a href="https://www.linkedin.com/company/teji-mit/" className='footer-social-link'>
              <span className="icon ">
                <i className="fab fa-linkedin fa-2x"></i>
              </span>
            </a>
            <a href="https://www.facebook.com/The-Educational-Justice-Institute-at-MIT-893214594217368/?ref=bookmarks" className='footer-social-link'>
              <span className="icon ">
                <i className="fab fa-facebook fa-2x"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright">
      <div className='container'>
        <p className='has-text-grey-lighter'>&copy; 2018 The Educational Justice Institute</p>
      </div>
    </div>
  </footer>
)

export default Footer;
