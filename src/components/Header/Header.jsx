import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './Header.module.css';
import logo from '../../assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}
      aria-label="Main header">
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Blues Child Logo" className={styles.logo} />
          <span className={styles.logoText}>Blues Child</span>
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
