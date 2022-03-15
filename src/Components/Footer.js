import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className="footer" style={{ marginTop: "15px", marginBottom: "15px" }}>Made with
      <div>
        <FontAwesomeIcon icon={faHeart} color={"red"} />
      </div>
      by <a className="footer-link" href="https://www.linkedin.com/in/rahmad-ramdhani-a08102131/" style={{ textDecoration: "none" }}>Rahmad Ramdhani</a>
    </div>
  );
}

export default Footer;
