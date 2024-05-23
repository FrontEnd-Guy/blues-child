import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as YoutubeIcon } from '../../assets/youtube.svg';
import { ReactComponent as InstagramIcon } from '../../assets/instagram.svg';
import { ReactComponent as FacebookIcon } from '../../assets/facebook.svg';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerInfo}>
          <div className={styles.contact}>
            <h4>Contact Us</h4>
            <p>
              Email: <a href="mailto:oliviasings@yahoo.com">oliviasings@yahoo.com</a>
            </p>
            <p>
              Text: <a href="sms:+16622133430">662 213 3430</a>
            </p>
            <p>
              or <a href="sms:+16623725100">662 372 5100</a>
            </p>
          </div>
          <div className={styles.socialMedia}>
            <a
              href="https://www.youtube.com"
              aria-label="Visit our YouTube"
              target="_blank"
              rel="noreferrer">
              <YoutubeIcon />
            </a>
            <a
              href="https://www.instagram.com"
              aria-label="Visit our Instagram"
              target="_blank"
              rel="noreferrer">
              <InstagramIcon />
            </a>
            <a
              href="https://www.facebook.com"
              aria-label="Visit our Facebook"
              target="_blank"
              rel="noreferrer">
              <FacebookIcon />
            </a>
          </div>
        </div>

        <div className={styles.copyRight}>
          <img className={styles.footerLogo} src={logo} alt="logo" />
          <p className={styles.logoText}>Blues Child</p>
          <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
