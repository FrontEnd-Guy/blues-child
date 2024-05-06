import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './Header.module.css';

import logo from '../../assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled && styles.headerScrolled}`}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <span className={styles.logoText}>Blues Child</span>
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
