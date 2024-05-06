import React, { useState, useCallback } from 'react';
import styles from './Navbar.module.css';
import { links } from '../../utils/constants';
import { useModal } from '../../context/ModalContext';

const Navbar = () => {
  const { showModal } = useModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div
        className={styles.menuIcon}
        onClick={toggleMenu}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        role="button"
        tabIndex="0">
        {isOpen ? '✖️' : '☰'}
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.showMenu : ''}`}>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.path} onClick={toggleMenu}>
              {link.name}
            </a>
          </li>
        ))}
        <li>
          <button onClick={showModal}>Book</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
