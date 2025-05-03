// import { useState, useEffect, useRef } from 'react';
// import styles from './Ourclient.module.css';
// import logoOne from '../assets/logo1.webp';
// import logoTwo from '../assets/logo2.webp';
// import logoThree from '../assets/logo3.webp';
// import logoFour from '../assets/logo4.webp';
// import logoFive from '../assets/logo5.webp';
// import logoSix from '../assets/logo6.webp';
// import logoSeven from '../assets/logo7.webp';

// const clientLogos = [
//   { id: 1, name: 'Company 1', logo: logoOne },
 
//   { id: 3, name: 'Company 3', logo: logoThree },
//   { id: 4, name: 'Company 4', logo: logoFour },
//   { id: 5, name: 'Company 5', logo: logoFive },
//   { id: 6, name: 'Company 6', logo: logoSix },
//   { id: 2, name: 'Company 2', logo: logoTwo },
//   { id: 7, name: 'Company 7', logo: logoSeven },
// ];

// export default function Ourclient() {
//   const [activeDotIndex, setActiveDotIndex] = useState(0);
//   const [slidePosition, setSlidePosition] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const carouselRef = useRef(null);
  
//   // Always show 6 logos on desktop, 1 on mobile
//   const visibleCount = isMobile ? 1 : 6;
//   const totalSlides = clientLogos.length;

//   // Check for mobile view
//   useEffect(() => {
//     const checkIfMobile = () => {
//       setIsMobile(window.innerWidth <= 576);
//     };
    
//     checkIfMobile();
//     window.addEventListener('resize', checkIfMobile);
    
//     return () => window.removeEventListener('resize', checkIfMobile);
//   }, []);

//   // Set up automatic carousel movement
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!isAnimating) {
//         handleNextSlide();
//       }
//     }, 2200);
    
//     return () => clearInterval(interval);
//   }, [slidePosition, isAnimating, isMobile]);

//   // Handle smooth transition to next slide
//   const handleNextSlide = () => {
//     setIsAnimating(true);
    
//     const nextPosition = (slidePosition + 1) % totalSlides;
//     setSlidePosition(nextPosition);
//     setActiveDotIndex(nextPosition);
    
//     setTimeout(() => {
//       setIsAnimating(false);
//     }, 500);
//   };

//   // Handle dot navigation
//   const handleDotClick = (index) => {
//     if (isAnimating || index === activeDotIndex) return;
    
//     setIsAnimating(true);
//     setSlidePosition(index);
//     setActiveDotIndex(index);
    
//     setTimeout(() => {
//       setIsAnimating(false);
//     }, 500);
//   };

//   // Create a complete circular array of logos for continuous display
//   const getDisplayLogos = () => {
//     if (isMobile) {
//       // For mobile, only show one logo at a time
//       return [clientLogos[slidePosition]].map((logo) => ({
//         ...logo,
//         key: `${logo.id}-${slidePosition}`
//       }));
//     }
    
//     // For desktop, show multiple logos
//     const extendedLogos = [...clientLogos, ...clientLogos];
//     return extendedLogos.slice(slidePosition, slidePosition + visibleCount).map((logo, index) => ({
//       ...logo,
//       key: `${logo.id}-${index}-${slidePosition}`
//     }));
//   };

//   // Render navigation dots
//   const renderDots = () => {
//     return Array.from({ length: totalSlides }, (_, idx) => (
//       <button
//         key={idx}
//         className={`${styles.dot} ${activeDotIndex === idx ? styles.activeDot : ''}`}
//         onClick={() => handleDotClick(idx)}
//         aria-label={`Go to slide ${idx + 1}`}
//         disabled={isAnimating}
//       />
//     ));
//   };

//   // Render loading dots when animating
//   const renderLoadingDots = () => {
//     return (
//       <div className={styles.dotNavigation}>
//         <span className={styles.loadingDot} />
//         <span className={styles.loadingDot} />
//         <span className={styles.loadingDot} />
//       </div>
//     );
//   };

//   return (
//     <section className={styles.clientSection}>
//       <div className={styles.sectionContent}>
//         <div className={styles.sectionHeader}>
//           <h2>Our <span>Clients</span></h2>
//         </div>
        
//         <div 
//           ref={carouselRef} 
//           className={`${styles.logoContainer} ${isAnimating ? styles.sliding : ''} ${isMobile ? styles.mobileView : ''}`}
//         >
//           {getDisplayLogos().map((client) => (
//             <div
//               key={client.key}
//               className={`${styles.logoItem} ${isAnimating ? isMobile ? styles.fadeIn : '' : ''}`}
//             >
//               <img 
//                 src={client.logo}
//                 alt={`${client.name} logo`}
//                 className={styles.logo}
//                 loading="lazy"
//                 decoding="async"
//               />
//             </div>
//           ))}
//         </div>
        
//         <div className={styles.dotNavigation}>
//           {isAnimating ? renderLoadingDots() : renderDots()}
//         </div>
//       </div>
//     </section>
//   );
// }
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
  { id: 5, name: 'Company 5', logo: logoFive },
  { id: 6, name: 'Company 6', logo: logoSix },
  { id: 2, name: 'Company 2', logo: logoTwo },
  { id: 7, name: 'Company 7', logo: logoSeven },
];

export default function Ourclient() {
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const [slidePosition, setSlidePosition] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);
  
  // Always show 6 logos on desktop, 1 on mobile
  const visibleCount = isMobile ? 1 : 6;
  const totalSlides = clientLogos.length;

  // Check for mobile view
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 576);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Handle smooth transition to next slide
  const handleNextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    const nextPosition = (slidePosition + 1) % totalSlides;
    setSlidePosition(nextPosition);
    setActiveDotIndex(nextPosition);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  // Handle dot navigation
  const handleDotClick = (index) => {
    if (isAnimating || index === activeDotIndex) return;
    
    setIsAnimating(true);
    setSlidePosition(index);
    setActiveDotIndex(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  // Create a complete circular array of logos for continuous display
  const getDisplayLogos = () => {
    if (isMobile) {
      // For mobile, only show one logo at a time
      return [clientLogos[slidePosition]].map((logo) => ({
        ...logo,
        key: `${logo.id}-${slidePosition}`,
        isLast: false
      }));
    }
    
    // For desktop, show multiple logos
    const extendedLogos = [...clientLogos, ...clientLogos];
    return extendedLogos.slice(slidePosition, slidePosition + visibleCount).map((logo, index) => ({
      ...logo,
      key: `${logo.id}-${index}-${slidePosition}`,
      isLast: index === visibleCount - 1 // Mark the last (rightmost) logo
    }));
  };

  // Render navigation dots
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

  // Render loading dots when animating
  const renderLoadingDots = () => {
    return (
      <div className={styles.dotNavigation}>
        <span className={styles.loadingDot} />
        <span className={styles.loadingDot} />
        <span className={styles.loadingDot} />
      </div>
    );
  };

  return (
    <section id="client" className={styles.clientSection}>
      <div className={styles.sectionContent}>
        <div className={styles.sectionHeader}>
          <h2>Our <span>Clients</span></h2>
        </div>
        
        <div 
          ref={carouselRef} 
          className={`${styles.logoContainer} ${isAnimating ? styles.sliding : ''} ${isMobile ? styles.mobileView : ''}`}
        >
          {getDisplayLogos().map((client) => (
            <div
              key={client.key}
              className={`${styles.logoItem} ${isAnimating ? isMobile ? styles.fadeIn : '' : ''} ${client.isLast ? styles.lastLogoItem : ''}`}
              onClick={client.isLast ? handleNextSlide : undefined}
            >
              <img 
                src={client.logo}
                alt={`${client.name} logo`}
                className={`${styles.logo} ${client.isLast ? styles.nextNavLogo : ''}`}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
        
        <div className={styles.dotNavigation}>
          {isAnimating ? renderLoadingDots() : renderDots()}
        </div>
      </div>
    </section>
  );
}