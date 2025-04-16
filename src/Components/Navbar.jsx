// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navbarWrapper}>
        {/* Logo */}
        <div className={styles.logo}>
          <div className={styles.logoImage}>
            <span className={styles.logoText}>M</span>
          </div>
          <span className={styles.brandName}>Madhyam Nepal</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className={styles.navItems}>
          <a href="#home" className={`${styles.navLink} ${styles.activeLink}`}>Home</a>
          <a href="#about" className={styles.navLink}>About</a>
          <a href="#services" className={styles.navLink}>Services</a>
          <a href="#team" className={styles.navLink}>Team</a>
          <a href="#contact" className={styles.navLink}>Contact Us</a>
          <button className={styles.scheduleButton}>
            Schedule Meeting
          </button>
        </div>
        
        {/* Mobile Toggle */}
        <button className={styles.mobileToggle} onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileNavItems}>
          <a href="#home" className={`${styles.navLink} ${styles.activeLink}`}>Home</a>
          <a href="#about" className={styles.navLink}>About</a>
          <a href="#services" className={styles.navLink}>Services</a>
          <a href="#team" className={styles.navLink}>Team</a>
          <a href="#contact" className={styles.navLink}>Contact Us</a>
          <button className={styles.mobileScheduleButton}>
            Schedule Meeting
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;