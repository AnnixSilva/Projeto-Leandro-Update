import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-icon"
      >
        <InstagramIcon style={{ fontSize: 40 }} />
      </a>
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-icon"
      >
        <FacebookIcon style={{ fontSize: 40 }} />
      </a>
    </footer>
  );
}

export default Footer;