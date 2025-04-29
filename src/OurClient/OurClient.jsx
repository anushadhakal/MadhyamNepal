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
  { id: 1, name: 'Company 1', logo: logoOne },
 
  { id: 3, name: 'Company 3', logo: logoThree },
  { id: 4, name: 'Company 4', logo: logoFour },
  { id: 2, name: 'Company 2', logo: logoTwo },
  { id: 5, name: 'Company 5', logo: logoFive },
  { id: 6, name: 'Company 6', logo: logoSix },
  { id: 7, name: 'Company 7', logo: logoSeven },
];

export default function Ourclient() {
  const visibleCount = 6;
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const [slidePosition, setSlidePosition] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const carouselRef = useRef(null);
  const totalSlides = clientLogos.length;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        handleNextSlide();
      }
    }, 2200);
    
    return () => clearInterval(interval);
  }, [slidePosition, isAnimating]);

  const handleNextSlide = () => {
    setIsAnimating(true);
    
    const nextPosition = (slidePosition + 1) % totalSlides;
    setSlidePosition(nextPosition);
    setActiveDotIndex(nextPosition);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const handleDotClick = (index) => {
    if (isAnimating || index === activeDotIndex) return;
    
    setIsAnimating(true);
    setSlidePosition(index);
    setActiveDotIndex(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const getDisplayLogos = () => {
  
    const extendedLogos = [...clientLogos, ...clientLogos];
 
    return extendedLogos.slice(slidePosition, slidePosition + visibleCount).map((logo, index) => ({
      ...logo,
      key: `${logo.id}-${index}-${slidePosition}`
    }));
  };

  const renderDots = () => {
    return Array.from({ length: totalSlides }, (_, idx) => (
      <button
        key={idx}
        className={`${styles.dot} ${activeDotIndex === idx ? styles.activeDot : ''}`}
        onClick={() => handleDotClick(idx)}
        aria-label={`Go to slide ${idx + 1}`}
        disabled={isAnimating}
      />
    ));
  };

  return (
    <section className={styles.clientSection}>
      <div className={styles.sectionContent}>
        <div className={styles.sectionHeader}>
          <h2>Our <span>Clients</span></h2>
        </div>
        
        <div 
          ref={carouselRef} 
          className={`${styles.logoContainer} ${isAnimating ? styles.sliding : ''}`}
          style={{ 
            '--slide-position': slidePosition,
            '--transition-speed': '500ms'
          }}
        >
          {getDisplayLogos().map((client) => (
            <div
              key={client.key}
              className={styles.logoItem}
            >
              <img 
                src={client.logo}
                alt={`${client.name} logo`}
                className={styles.logo}
                loading="lazy"
                decoding="async"
                width="140"
                height="140"
              />
            </div>
          ))}
        </div>
        
        <div className={styles.dotNavigation}>
          {renderDots()}
        </div>
      </div>
    </section>
  );
}