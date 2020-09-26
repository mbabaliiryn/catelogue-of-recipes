import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/footer.scss';

const Footer = () => (
  <section className="footer">
    <div className="footer-info">

      <div className="social-icons">
        <ul className="text-center">
          <li>
            <a href="https://www.facebook.com/dennylucaz" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'facebook']} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/dennylucaz" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'twitter']} />
            </a>
          </li>
          <li>
            <a href="https://angel.co/u/denis-oluka" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'angellist']} />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/denis-oluka" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </a>
          </li>
          <li>
            <a href="https://github.com/OlukaDenis" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
          </li>
          <li>
            <a href="skype:deniz.lucaz" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'skype']} />
            </a>
          </li>
        </ul>
      </div>

      <p>Keen Foods | All rights reserved</p>
    </div>
  </section>
);

export default Footer;
