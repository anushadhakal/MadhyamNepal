import { useState, useEffect, useRef } from 'react';
import styles from './Ourclient.module.css';
import logoOne from '../assets/logo1.webp';
import logoTwo from '../assets/logo2.webp';
import logoThree from '../assets/logo3.webp';
import logoFour from '../assets/logo4.webp';
import logoFive from '../assets/logo5.webp';
import logoSix from '../assets/logo6.webp';
import logoSeven from '../assets/logo7.webp';

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
  const [activeDotIndex, setActiveDotIndex] = useState(0); 
  const carouselRef = useRef(null);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 992) {
        setVisibleCount(4); 
        setIsMobile(false);
      } else if (window.innerWidth >= 768) {
        setVisibleCount(3); 
        setIsMobile(false);
      } else if (window.innerWidth >= 576) {
        setVisibleCount(2); 
        setIsMobile(true);
      } else {
        setVisibleCount(1); 
        setIsMobile(true);
      }
    };

    updateVisibleCount();

    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  useEffect(() => {
    setTotalSlides(clientLogos.length);
  }, [visibleCount]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
      setActiveDotIndex((prevDotIndex) => (prevDotIndex + 1) % totalSlides);
    }, 2200);
    
    return () => clearInterval(interval);
  }, [totalSlides]);

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
    setActiveDotIndex(index);
  };

  const renderDots = () => {
    // Always show all dots regardless of device size
    return Array.from({ length: totalSlides }, (_, idx) => (
      <button
        key={idx}
        className={`${styles.dot} ${activeDotIndex === idx ? styles.activeDot : ''}`}
        onClick={() => handleDotClick(idx)}
        aria-label={`Go to slide ${idx + 1}`}
      />
    ));
  };

  const renderLoadingDots = () => {};

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
        
        <div className={styles.dotNavigation}>
          {renderDots()}
        </div>
        {renderLoadingDots()}
      </div>
    </section>
  );
}