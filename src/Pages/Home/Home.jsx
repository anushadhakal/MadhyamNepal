import React, { useEffect, useRef } from 'react';
import styles from './Home.module.css';
import image from "../../assets/heroImg.webp";

const Home = () => {
  const typedTextRef = useRef(null);
  const words = ["Your Digital Future"];
  
  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;
    
    const type = () => {
      const currentWord = words[wordIndex];
      
      if (isDeleting) {
        typedTextRef.current.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 80; 
      } else {
        typedTextRef.current.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 150; 
      }

      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typingSpeed = 3000; 
      }
   
      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
      
      setTimeout(type, typingSpeed);
    };
    
    if (typedTextRef.current) {
      setTimeout(type, 1000);
    }
  
    return () => {
      clearTimeout(type);
    };
  }, []);
  
  return (
    <div id='home' className={styles.firstSection}>
      <div className={`${styles.symbol} ${styles.cross}`}></div>
      <div className={`${styles.symbol} ${styles.circle}`}></div>
      <div className={`${styles.symbol} ${styles.square}`}></div>
      <div className={`${styles.symbol} ${styles.triangle}`}></div>
      <div className={`${styles.symbol} ${styles.plus}`}></div>
      <div className={`${styles.largeBubble} ${styles.largeBubble1}`}></div>
      <div className={`${styles.largeBubble} ${styles.largeBubble2}`}></div>
      
      <div className={styles.contentWrapper}>
        <div className={styles.headerText}>
          <h2 className={styles.sectionTitle}>
            Your vision, <br />
            <span>
              Our Mission, <span ref={typedTextRef} className={styles.typedText}></span>
            </span>
          </h2>
          <h3 className={styles.subheading}>
            <b>Madhyam Nepal </b> is the leading digital marketing agency in Pokhara, dedicated to transforming your business into a recognizable brand. From crafting engaging social media campaigns to executing powerful SEO strategies, we specialize in delivering end-to-end marketing solutions tailored to your goals.
          </h3>
         
          
        </div>
        <div className={styles.headerImageDiv}>
          <div className={styles.imageContainer}>
            <img
              src={image}
              alt="A Boy Working on Laptop"
              className={styles.headerImage}
            />
            
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;