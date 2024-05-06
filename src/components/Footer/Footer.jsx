import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.contact}>
          <h4>Contact Us</h4>
          <p>Email: info@blueschild.com</p>
          <p>Phone: +123 456 7890</p>
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
