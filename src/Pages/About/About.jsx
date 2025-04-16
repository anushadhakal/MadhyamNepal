import React, { useEffect, useState } from 'react';
import styles from './About.module.css';
import image from '../../assets/madhyamLogo.webp'; // Placeholder image path

export default function About() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Add animation after component mounts
    setAnimate(true);
    
    // Optional: Re-trigger animation when scrolled into view
    const handleScroll = () => {
      const element = document.getElementById('about-image');
      if (element) {
        const position = element.getBoundingClientRect();
        
        // If element is in viewport
        if (position.top < window.innerHeight && position.bottom >= 0) {
          setAnimate(true);
        } else {
          setAnimate(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id = "about" className={styles.aboutContainer}>
      <div className={styles.aboutHeader}>
        <h2><span>About</span> Us</h2>
      </div>
      
      <div className={styles.aboutContent}>
        <div className={styles.imageContainer}>
          <div 
            id="about-image"
            className={`${styles.image} ${animate ? styles.animateImage : ''}`}
          >
            {/* Placeholder image - replace with your actual image */}
            <img 
              src={image} 
              alt="Madhyam Nepal Digital Marketing Agency" 
              className={styles.actualImage}
            />
            <div className={styles.imageBorder}></div>
          </div>
        </div>
        
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Digital Marketing Agency in Pokhara - Madhyam Nepal</h2>
          
          <div className={styles.subtitleText}>
            <p>
            <span>Madhyam Nepal</span> is a dynamic digital Marketing agency dedicated to empowering businesses with innovative and result-driven strategies. 

Our mission is to connect brands with their target audiences effectively, enabling them to grow and thrive in the competitive digital landscape. At "Madhyam," we combine creativity with data-driven insights to deliver impactful solutions tailored to our teams' unique needs.
            </p>
          </div>
         
          
          <div className={styles.servicesSection}>
            <h4 className={styles.servicesTitle}>Our Expertise</h4>
            <div className={styles.servicesList}>
              <div className={styles.serviceItem}>Social Media Marketing</div>
              <div className={styles.serviceItem}>Content Marketing</div>
              <div className={styles.serviceItem}>Meta Ads</div>
              <div className={styles.serviceItem}>Website Design </div>
              <div className={styles.serviceItem}>Graphic Design</div>
              <div className={styles.serviceItem}>Video Marketing</div>
              <div className={styles.serviceItem}>Influencer Marketing</div>
              <div className={styles.serviceItem}>Lead Generation Campaigns</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}