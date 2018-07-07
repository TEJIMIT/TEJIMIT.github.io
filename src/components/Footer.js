import React from 'react'
import Link from 'gatsby-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
  <footer className='footer'>
    <div className='container'>
      <div className='columns'>
        <div className='column is-half'>
          <div className='contact-name text-muted'>
            <h5>The Educational Justice Institute</h5>
            <h6>Massachusetts Institute of Technology</h6>
          </div>
          <div className='contact-address'>
          <p>77 Massachusetts Ave.</p>
          <p>24-612</p>
          <p>Cambridge, MA 02139</p>
          </div>
          <div className='contact-phone'>
            <p>(617) 452-3756</p>
          </div>
          <div className='contact-email'>
            <p><a href='mailto:teji@mit.edu'>teji@mit.edu</a></p>
          </div>
        </div>
        <div className='column'>
          <ul className='footer-navigation'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/mission/'>About</Link></li>
            <li><Link to='/projects/'>Projects</Link></li>
            <li><Link to='/news/'>News</Link></li>
            <li><Link to='/blog/'>Blog</Link></li>
            <li><Link to='/contact/'>Contact</Link></li>
          </ul>
        </div>
        <div className='column footer-social'>
          <a href="#" className='footer-social-link'>
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
             />
          </a>
          <a href="#" className='footer-social-link'>
            <FontAwesomeIcon
               icon={faTwitter}
               size="2x"
              />
          </a>
          <a href="#" className='footer-social-link'>
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
             />
          </a>
          <a
            href="https://www.youtube.com/channel/UCMrzgqxPPD5wDYhSXYpol4w" className='footer-social-link'>
            <FontAwesomeIcon
              icon={faYoutube}
              size="2x"
             />
          </a>
        </div>
      </div>
      <p className='text-muted'>&copy; 2018 The Educational Justice Institute</p>
    </div>
  </footer>
)

export default Footer
