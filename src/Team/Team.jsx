import React, { useEffect, useState } from 'react';
import styles from './Team.module.css';
// Import placeholder images - replace with actual team member images
import member1 from '../assets/madhyamLogo.webp';

export default function Team() {
  const [animate, setAnimate] = useState(false);
  const [activeMembers, setActiveMembers] = useState([]);

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      position: "Founder & CEO",
      image: member1,
      social: {
        linkedin: "https://linkedin.com/",
        twitter: "https://twitter.com/",
        instagram: "https://instagram.com/"
      }
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Creative Director",
      image: member1,
      social: {
        linkedin: "https://linkedin.com/",
        twitter: "https://twitter.com/",
        instagram: "https://instagram.com/"
      }
    },
    {
      id: 3,
      name: "Alex Johnson",
      position: "Marketing Strategist",
      image: member1,
      social: {
        linkedin: "https://linkedin.com/",
        twitter: "https://twitter.com/",
        instagram: "https://instagram.com/"
      }
    }
  ];

  useEffect(() => {
    // Initialize active members
    setActiveMembers([...teamMembers]);
    
    // Add animation after component mounts
    setAnimate(true);
    
    // Re-trigger animation when scrolled into view
    const handleScroll = () => {
      const element = document.getElementById('team-section');
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
    
    // Set up the carousel rotation
    const carouselInterval = setInterval(() => {
      setActiveMembers(prevMembers => {
        const newMembers = [...prevMembers];
        // Move the first member to the end
        const firstMember = newMembers.shift();
        newMembers.push(firstMember);
        return newMembers;
      });
    }, 3000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(carouselInterval);
    };
  }, []);

  return (
    <div id = "team" className={styles.teamContainer}>
      <div className={styles.teamHeader}>
        <h2><span>Team</span> Madhyam Nepal</h2>
      </div>
      
      <div className={styles.teamContent}>
        <div className={styles.teamIntro}>
          <p>
            Meet the creative minds behind Madhyam Nepal. Our diverse team of digital marketing experts 
            is passionate about helping businesses thrive in the digital world through innovative strategies 
            and cutting-edge solutions.
          </p>
        </div>
        
        <div className={`${styles.teamMembers} ${animate ? styles.animated : ''}`}>
          {activeMembers.map((member, index) => (
            <div 
              key={member.id} 
              className={styles.memberCard}
            >
              <div className={styles.memberImageContainer}>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className={styles.memberImage}
                />
                <div className={styles.imageBorder}></div>
              </div>
              
              <div className={styles.memberInfo}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberPosition}>{member.position}</p>
                
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}