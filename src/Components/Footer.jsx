// components/Footer/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerInfo}>
            <div className={styles.logoContainer}>
         
              <h3 className={styles.logoText}>Madhyam <span>Nepal</span></h3>
            </div>
            <p className={styles.description}>
              Your trusted digital marketing partner in Nepal.
            </p>
            <div className={styles.socialLinks}>
              <a href="https://www.facebook.com/Madhyamnepal" target = "_blank" className={styles.socialLink}>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/madhyamnepal/" target = "_blank" className={styles.socialLink}>
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div className={styles.footerLinks}>
            <div className={styles.linkColumn}>
              <h4 className={styles.linkTitle}>Quick Links</h4>
              <ul className={styles.links}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
          
            
            <div className={styles.linkColumn}>
              <h4 className={styles.linkTitle}>Contact Info</h4>
              <ul className={styles.contactInfo}>
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Newroad Pokhara, Nepal</span>
                </li>
                <li>
                  <i className="fas fa-phone-alt"></i>
                  <span>9808337780</span>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <span>madhyam.np@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} Madhyam Nepal. All Rights Reserved.
          </p> 
          <p  className={styles.copyright}>
           <a href="https://birtasoft.com/" target='blank'>Powered By: Birta Soft</a> 
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;