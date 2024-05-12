import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as YoutubeIcon } from '../../assets/youtube.svg';
import { ReactComponent as InstagramIcon } from '../../assets/instagram.svg';
import { ReactComponent as FacebookIcon } from '../../assets/facebook.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerInfo}>
          <div className={styles.contact}>
            <h4>Contact Us</h4>
            <p>Email: info@blueschildrocks.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
          <div className={styles.socialMedia}>
            <a href="https://www.youtube.com" aria-label="Visit our YouTube">
              <YoutubeIcon />
            </a>
            <a href="https://www.instagram.com" aria-label="Visit our Instagram">
              <InstagramIcon />
            </a>
            <a href="https://www.facebook.com" aria-label="Visit our Facebook">
              <FacebookIcon />
            </a>
          </div>
        </div>

        <div className={styles.copyRight}>
          <p className={styles.logoText}>Blues Child</p>
          <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
