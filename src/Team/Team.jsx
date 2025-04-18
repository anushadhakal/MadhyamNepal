import React, { useEffect, useState } from 'react';
import styles from './Team.module.css';
import member1 from '../assets/madhyamLogo.webp';

export default function Team() {
  const [animate, setAnimate] = useState(false);
  const [activeMembers, setActiveMembers] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const teamMembers = [
    {
      id: 1,
      name: "abc xyz",
      position: "Founder & CEO",
      image: member1,
    },
    {
      id: 2,
      name: "abc xyzzz",
      position: "Creative Director",
      image: member1,
    },
    {
      id: 3,
      name: "xyz abc",
      position: "Marketing Strategist",
      image: member1,
    },
    {
      id: 4,
      name: "xyz abc",
      position: "Marketing Strategist",
      image: member1,
    },
    {
      id: 5,
      name: "xyz abc",
      position: "Marketing Strategist",
      image: member1,
    },
    {
      id: 6,
      name: "xyz abc",
      position: "Marketing Strategist",
      image: member1,
    },
    {
      id: 7,
      name: "xyz abc",
      position: "Marketing Strategist",
      image: member1,
    },
    {
      id: 8,
      name: "xyz abc",
      position: "Marketing Strategist",
      image: member1,
    }
  ];
  
  useEffect(() => {
    setActiveMembers([...teamMembers]);
    setAnimate(true);
    
    const handleScroll = () => {
      const element = document.getElementById('team-section');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
          setAnimate(true);
        } else {
          setAnimate(false);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    const carouselInterval = setInterval(() => {
      setActiveMembers(prevMembers => {
        const newMembers = [...prevMembers];
        const firstMember = newMembers.shift();
        newMembers.push(firstMember);
        return newMembers;
      });
      
      setActiveIndex(prevIndex => (prevIndex + 1) % teamMembers.length);
    }, 2000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(carouselInterval);
    };
  }, []);
  
  const handleDotClick = (index) => {
    // Calculate how many positions we need to shift the array
    const currentFirstId = activeMembers[0].id;
    const targetId = teamMembers[index].id;
    
    // Find current position of the target in activeMembers
    let currentIndexOfTarget = activeMembers.findIndex(member => member.id === targetId);
    
    if (currentIndexOfTarget === -1) return;
    
    // Rotate array to bring target to front
    const newMembers = [...activeMembers];
    while (newMembers[0].id !== targetId) {
      const firstMember = newMembers.shift();
      newMembers.push(firstMember);
    }
    
    setActiveMembers(newMembers);
    setActiveIndex(index);
  };
  
  return (
    <div id="team" className={styles.teamContainer}>
      <div className={styles.teamHeader}>
        <h2>Team<span> Madhyam Nepal</span></h2>
      </div>
      
      <div className={styles.teamContent}>
        <div className={styles.teamIntro}>
          <p>
            Meet the creative minds behind Madhyam Nepal.
          </p>
        </div>
        
        <div className={`${styles.teamMembers} ${animate ? styles.animated : ''}`}>
          {activeMembers.slice(0, 3).map((member, index) => (
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
        
        {/* Dot Navigation */}
        <div className={styles.dotNavigation}>
          {teamMembers.map((member, index) => (
            <button
              key={member.id}
              className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`View ${member.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}