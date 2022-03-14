import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className="footer">Made with
      <FontAwesomeIcon icon={faHeart} />
      by <a className="footer-link" href="https://www.linkedin.com/in/rahmad-ramdhani-a08102131/">Rahmad Ramdhani</a>
    </div>
  );
}

export default Footer;
