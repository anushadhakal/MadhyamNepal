import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';
import logoImage from '../assets/logo.webp'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY + 150;
    const sections = ['home', 'about', 'services', 'team', 'contact'];

    for (let id of sections) {
      const section = document.getElementById(id);
      if (section) {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        if (scrollY >= top && scrollY < bottom) {
          setActiveLink(id);
          break;
        }
      }
    }

    setScrolled(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveLink(id);
      setIsOpen(false); 
    }
  };

  const renderLink = (id, label) => (
    <a
      onClick={() => handleLinkClick(id)}
      className={`${styles.navLink} ${activeLink === id ? styles.activeLink : ''}`}
    >
      {label}
    </a>
  );

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navbarWrapper}>
        {/* Logo */}
        <div className={styles.logo}>
          <div className={styles.logoContainer}>
            <img 
              src={logoImage} 
              alt="Madhyam Nepal Logo" 
              className={styles.logoImage} 
            />
          </div>
        </div>

        {/* Desktop Nav */}
        <div className={styles.navItems}>
          {renderLink('home', 'Home')}
          {renderLink('about', 'About')}
          {renderLink('services', 'Services')}
          {renderLink('team', 'Team')}
          {renderLink('contact', 'Contact Us')}
          <button className={styles.scheduleButton}>Schedule Meeting</button>
        </div>

        {/* Mobile Toggle */}
        <button className={styles.mobileToggle} onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileNavItems}>
          {renderLink('home', 'Home')}
          {renderLink('about', 'About')}
          {renderLink('services', 'Services')}
          {renderLink('team', 'Team')}
          {renderLink('contact', 'Contact Us')}
          <button className={styles.mobileScheduleButton}>Schedule Meeting</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;