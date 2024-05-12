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

  const handleKeyDown = useCallback(
    (event) => {
      // Key handling for accessibility
      if (event.key === 'Enter' || event.key === ' ') {
        toggleMenu();
      }
    },
    [toggleMenu],
  );

  return (
    <nav className={styles.navbar}>
      <div
        className={styles.menuIcon}
        onClick={toggleMenu}
        onKeyDown={handleKeyDown}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        role="button"
        tabIndex="0">
        {isOpen ? '✖️' : '☰'}
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.showMenu : ''}`}>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.path} onClick={toggleMenu} onKeyDown={handleKeyDown}>
              {link.name}
            </a>
          </li>
        ))}
        <li>
          <button onClick={showModal} aria-label="Book a session">
            Book
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
