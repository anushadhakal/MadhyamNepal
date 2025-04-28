import { useState, useEffect, useRef } from 'react';
import styles from './Ourclient.module.css';
import logoOne from '../assets/logo1.webp';
import logoTwo from '../assets/logo2.webp';
import logoThree from '../assets/logo3.webp';
import logoFour from '../assets/logo4.webp';
import logoFive from '../assets/logo5.webp';
import logoSix from '../assets/logo6.webp';
import logoSeven from '../assets/logo7.webp';

// Sample logo data - replace these with your actual client logos
const clientLogos = [
  { id: 1, name: 'Company 1', logo: logoOne},
  { id: 2, name: 'Company 2', logo: logoTwo },
  { id: 3, name: 'Company 3', logo: logoThree },
  { id: 4, name: 'Company 4', logo: logoFour },
  { id: 5, name: 'Company 5', logo: logoFive },
  { id: 6, name: 'Company 6', logo: logoSix },
  { id: 7, name: 'Company 7', logo: logoSeven },
];

export default function Ourclient() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [isMobile, setIsMobile] = useState(false);
  const [totalSlides, setTotalSlides] = useState(clientLogos.length);
  const [activeDotIndex, setActiveDotIndex] = useState(0); // Track active dot separately for mobile
  const carouselRef = useRef(null);

  // Determine how many logos to display based on screen width
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 992) {
        setVisibleCount(4); // Large screens
        setIsMobile(false);
      } else if (window.innerWidth >= 768) {
        setVisibleCount(3); // Medium screens
        setIsMobile(false);
      } else if (window.innerWidth >= 576) {
        setVisibleCount(2); // Small screens
        setIsMobile(true);
      } else {
        setVisibleCount(1); // Very small screens
        setIsMobile(true);
      }
    };

    // Initial check
    updateVisibleCount();

    // Update on resize
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  // Update total slides whenever visibleCount changes
  useEffect(() => {
    setTotalSlides(clientLogos.length);
  }, [visibleCount]);

  // Rotate logos every 2.2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
      
      // Toggle active dot in mobile view
      if (isMobile) {
        setActiveDotIndex(prevDotIndex => prevDotIndex === 0 ? 1 : 0);
      } else {
        setActiveDotIndex((currentIndex + 1) % totalSlides);
      }
    }, 2200);
    
    return () => clearInterval(interval);
  }, [totalSlides, currentIndex, isMobile]);

  // Get the current logos to display in a single row
  const getVisibleLogos = () => {
    const logos = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % clientLogos.length;
      logos.push(clientLogos[index]);
    }
    return logos;
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    
    // Update active dot index when clicking dots
    if (isMobile) {
      setActiveDotIndex(index === currentIndex ? 0 : 1);
    } else {
      setActiveDotIndex(index);
    }
  };

  // For mobile, only show 2 dots with proper animation
  const renderDots = () => {
    if (isMobile) {
      // Just show 2 dots for mobile with proper active state
      return (
        <>
          <button
            className={`${styles.dot} ${activeDotIndex === 0 ? styles.activeDot : ''}`}
            onClick={() => handleDotClick(currentIndex)}
            aria-label={`Current position`}
          />
          <button
            className={`${styles.dot} ${activeDotIndex === 1 ? styles.activeDot : ''}`}
            onClick={() => handleDotClick((currentIndex + 1) % totalSlides)}
            aria-label={`Next position`}
          />
        </>
      );
    } else {
      // Show all dots for larger screens
      return Array.from({ length: totalSlides }, (_, idx) => (
        <button
          key={idx}
          className={`${styles.dot} ${currentIndex === idx ? styles.activeDot : ''}`}
          onClick={() => handleDotClick(idx)}
          aria-label={`Go to slide ${idx + 1}`}
        />
      ));
    }
  };

  // Loading dots for visual indicator (smaller screens only)
  const renderLoadingDots=()=>{}

  return (
    <section className={styles.clientSection}>
      <div className={styles.sectionContent}>
        <div className={styles.sectionHeader}>
          <h2>Our <span>Clients</span></h2>
        </div>
        
        <div ref={carouselRef} className={styles.logoContainer}>
          {getVisibleLogos().map((client) => (
            <div
              key={client.id}
              className={`${styles.logoItem} ${styles.fadeIn}`}
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className={styles.logo}
              />
            </div>
          ))}
        </div>
        
        {/* Dot Navigation with fixed mobile implementation */}
        <div className={styles.dotNavigation}>
          {renderDots()}
        </div>
        
        {/* Optional: Add loading indicator for mobile */}
        {renderLoadingDots()}
      </div>
    </section>
  );
}