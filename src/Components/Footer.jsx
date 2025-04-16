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
              {/* <img src={logo} alt="Birta Academy Logo" className={styles.logo} /> */}
              <h3 className={styles.logoText}>Madhyam <span>Nepal</span></h3>
            </div>
            <p className={styles.description}>
              Your trusted digital marketing partner in Nepal.
            </p>
            <div className={styles.socialLinks}>
              <a href="https://www.facebook.com/birtasoft" target = "_blank" className={styles.socialLink}>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/birtasoft_/" target = "_blank" className={styles.socialLink}>
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/bimalcodes/" target = "_blank" className={styles.socialLink}>
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div className={styles.footerLinks}>
            <div className={styles.linkColumn}>
              <h4 className={styles.linkTitle}>Quick Links</h4>
              <ul className={styles.links}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#courses">Courses</a></li>
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
                  <span>9861474074 9703602478</span>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <span>info@birtasoft.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} Birta Academy. All Rights Reserved.
          </p> 
          <p  className={styles.copyright}>
            Powered By: Birta Soft
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;